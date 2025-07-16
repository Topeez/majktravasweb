"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

// Constants
const SECTION_IDS = ["home", "sluzby", "omne", "recenze", "kontakt"];
const LINKS = [
    { href: "#sluzby", label: "Služby" },
    { href: "#omne", label: "O mně" },
    { href: "#recenze", label: "Reference" },
    { href: "#kontakt", label: "Kontakt" },
];

// Extracted Hamburger Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="space-y-1">
        <span
            className={`block h-1 w-6 origin-center bg-background rounded-full transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1" : ""}`}
        ></span>
        <span
            className={`block h-1 w-4 origin-center bg-background rounded-full transition-all duration-300 ease-in-out mt-1.5 ${isOpen ? "-rotate-45 -translate-y-1.5 w-6" : ""}`}
        ></span>
    </div>
);

export function Header() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("backdrop-blur-lg");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const lastScrollY = useRef(0);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const isHomePage = pathname === "/";
    const liClasses =
        "li-item relative after:w-full after:h-[3px] after:origin-center will-change-transform";

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        const scrollDown =
            currentScrollY > lastScrollY.current && currentScrollY > 100;

        setIsVisible(!scrollDown || currentScrollY === 0);
        setBackgroundColor(
            currentScrollY >= 900 ? "bg-foreground" : "backdrop-blur-2xl"
        );

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
    }, [isHomePage]);

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

    // Handle click outside mobile menu
    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Element;
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                !target.closest(".mobile-menu-button")
            ) {
                closeMobileMenu();
            }
        };

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobileMenu();
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isMobileMenuOpen, closeMobileMenu]);

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
        >
            <nav className="flex justify-between items-center w-full cs-container">
                <Link href="/" onClick={closeMobileMenu}>
                    <Image
                        src="/assets/img/logo/logo.png"
                        width={200}
                        height={200}
                        alt="logo"
                        className="w-full h-22 md:h-32"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-4 font-bold text-background text-xl">
                    {LINKS.map((link) => (
                        <li
                            key={link.href}
                            className={`${isActive(link.href) ? "active" : ""} ${liClasses} from-left`}
                        >
                            <Link
                                href={`/${link.href}`}
                                className="block"
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/#kontakt"
                            onClick={(e) => handleLinkClick(e, "/#kontakt")}
                        >
                            <Button className="bg-background hover:bg-background hover:shadow-xl px-8 py-6 rounded-4xl w-full font-bold text-foreground hover:text-foreground text-xl transition-all duration-300 cursor-pointer">
                                Nezávazná konzultace
                            </Button>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Button
                        onClick={toggleMobileMenu}
                        className="group !z-[1000] bg-transparent hover:bg-transparent shadow-none size-10 aspect-square font-bold text-foreground hover:text-white text-xl cursor-pointer mobile-menu-button"
                        aria-expanded={isMobileMenuOpen}
                        aria-label={
                            isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"
                        }
                    >
                        <HamburgerIcon isOpen={isMobileMenuOpen} />
                    </Button>

                    {/* Mobile Menu */}
                    <div
                        ref={mobileMenuRef}
                        className={`fixed inset-0 !z-[900] bg-foreground transition-all duration-500 ease-in-out h-screen ${
                            isMobileMenuOpen
                                ? "-translate-y-20 opacity-100 pointer-events-auto"
                                : "translate-y-full opacity-0 pointer-events-none"
                        }`}
                        style={{ top: "5rem" }}
                    >
                        <Button
                            onClick={toggleMobileMenu}
                            className="group top-11 right-3.5 !z-[1000] absolute bg-transparent hover:bg-transparent shadow-none size-10 aspect-square font-bold text-foreground hover:text-white text-xl cursor-pointer mobile-menu-button"
                            aria-label="Zavřít menu"
                        >
                            <HamburgerIcon isOpen={isMobileMenuOpen} />
                        </Button>

                        <ul
                            className={`flex flex-col justify-center items-center gap-8 h-full overflow-hidden font-bold text-background text-4xl text-center transition-all duration-700 ease-in-out ${
                                isMobileMenuOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            }`}
                        >
                            {LINKS.map((link, index) => (
                                <li
                                    key={link.href}
                                    className={`${isActive(link.href) ? "active" : ""} ${liClasses} from-left transition-all duration-800 ease-in-out ${
                                        isMobileMenuOpen
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4"
                                    }`}
                                    style={{
                                        transitionDelay: isMobileMenuOpen
                                            ? `${index * 150}ms`
                                            : "0ms",
                                    }}
                                >
                                    <Link
                                        href={`/${link.href}`}
                                        className="block"
                                        onClick={(e) =>
                                            handleLinkClick(e, link.href)
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li
                                className={`transition-all duration-500 ease-in-out ${
                                    isMobileMenuOpen
                                        ? "opacity-100 blur-none translate-y-0"
                                        : "opacity-0 blur-sm translate-y-4"
                                }`}
                                style={{
                                    transitionDelay: isMobileMenuOpen
                                        ? `${LINKS.length * 100}ms`
                                        : "0ms",
                                }}
                            >
                                <Link
                                    href="/#kontakt"
                                    onClick={(e) =>
                                        handleLinkClick(e, "/#kontakt")
                                    }
                                >
                                    <Button className="bg-background hover:bg-background hover:shadow-xl px-8 py-6 rounded-4xl w-full font-bold text-foreground hover:text-foreground text-xl transition-all duration-300 cursor-pointer">
                                        Nezávazná konzultace
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
