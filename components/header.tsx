"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";
import { nets } from "@/data/nets";
import { MobileMenu } from "@/components/mobile-menu"; // Adjust the import path as needed

// Constants
const SECTION_IDS = ["home", "sluzby", "omne", "recenze", "kontakt"];
const LINKS = [
    { href: "#sluzby", label: "Služby" },
    { href: "#omne", label: "O mně" },
    { href: "#recenze", label: "Reference" },
    { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("backdrop-blur-lg");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const lastScrollY = useRef(0);
    const isHomePage = pathname === "/";
    const liClasses =
        "li-item relative after:w-full after:h-[3px] after:origin-center will-change-transform";

    // Function to get background color based on current URL
    const getHeaderBackgroundColor = useCallback(
        (currentScrollY: number) => {
            const isNetPage = nets.some((net) => pathname === net.link);

            if (isNetPage) {
                // If we're on a net page, always use bg-foreground
                return "bg-foreground";
            }

            // Default behavior for other pages
            return currentScrollY >= 900
                ? "bg-foreground"
                : "backdrop-blur-2xl";
        },
        [pathname]
    );

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        const scrollDown =
            currentScrollY > lastScrollY.current && currentScrollY > 100;

        setIsVisible(!scrollDown || currentScrollY === 0);
        setBackgroundColor(getHeaderBackgroundColor(currentScrollY));

        if (isHomePage) {
            // Highlight current section
            let current = "";
            for (const id of SECTION_IDS) {
                const section = document.getElementById(id);
                if (!section) continue;

                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;

                if (
                    currentScrollY >= sectionTop &&
                    currentScrollY < sectionTop + sectionHeight
                ) {
                    current = id;
                    break;
                }
            }
            setActiveSection(current);
        }

        lastScrollY.current = currentScrollY;
    }, [isHomePage, getHeaderBackgroundColor]);

    // Throttled scroll handler
    const throttledScrollHandler = useMemo(() => {
        let timeoutId: NodeJS.Timeout;
        return () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 16); // ~60fps
        };
    }, [handleScroll]);

    // Handle scroll effects
    useEffect(() => {
        window.addEventListener("scroll", throttledScrollHandler, {
            passive: true,
        });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener("scroll", throttledScrollHandler);
        };
    }, [throttledScrollHandler, handleScroll]);

    // Set initial background color on pathname change
    useEffect(() => {
        setBackgroundColor(getHeaderBackgroundColor(window.scrollY || 0));
    }, [pathname, getHeaderBackgroundColor]);

    // Handle mobile menu state and body overflow
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu
    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    // Toggle mobile menu
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    // Handle anchor link clicks
    const handleLinkClick = useCallback(
        (e: React.MouseEvent, hash: string) => {
            const sectionId = hash.replace("#", "");

            // Close mobile menu if open
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "auto";
            }

            // If we're on the homepage, scroll to section
            if (isHomePage) {
                e.preventDefault();
                const target = document.getElementById(sectionId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(sectionId);
                }
            }
        },
        [isMobileMenuOpen, isHomePage]
    );

    // Apply active class based on section
    const isActive = useCallback(
        (href: string) => {
            const sectionId = href.replace("#", "");
            return activeSection === sectionId;
        },
        [activeSection]
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[999] shadow-sm ${backgroundColor} ${
                isVisible ? "translate-y-0" : "-translate-y-32"
            } transition-all duration-500 will-change-transform`}
            role="banner"
        >
            <nav
                className="flex justify-between items-center w-full cs-container"
                role="navigation"
                aria-label="Hlavní navigace"
            >
                <Link
                    href="/"
                    onClick={closeMobileMenu}
                    aria-label="Travas Stínění - přejít na hlavní stránku"
                >
                    <Image
                        src="/assets/img/logo/logo.png"
                        width={200}
                        height={200}
                        alt="Travas Stínění logo"
                        className="w-full max-w-3xs h-22 md:h-32"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul
                    className="hidden lg:flex items-center gap-4 font-bold text-background text-xl"
                    role="menubar"
                    aria-label="Navigační menu"
                >
                    {LINKS.map((link) => (
                        <li
                            key={link.href}
                            className={`${isActive(link.href) ? "active" : ""} ${liClasses} from-left`}
                            role="none"
                        >
                            <Link
                                href={`/${link.href}`}
                                className="block"
                                draggable={false}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                role="menuitem"
                                aria-current={
                                    isActive(link.href) ? "page" : undefined
                                }
                                aria-label={`Přejít na sekci ${link.label}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="mb-1.5" role="none">
                        <Link
                            href="/#kontakt"
                            draggable={false}
                            onClick={(e) => handleLinkClick(e, "/#kontakt")}
                            aria-label="Přejít na kontaktní formulář pro nezávaznou konzultaci"
                        >
                            <Button className="bg-background hover:bg-background hover:shadow-xl px-8 py-6 rounded-4xl w-full font-bold text-foreground hover:text-foreground text-xl transition-all duration-300 cursor-pointer">
                                Nezávazná konzultace
                            </Button>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Navigation */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onToggle={toggleMobileMenu}
                    onClose={closeMobileMenu}
                    links={LINKS}
                    isActive={isActive}
                    handleLinkClick={handleLinkClick}
                    liClasses={liClasses}
                />
            </nav>
        </header>
    );
}
