"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";

// Extracted Hamburger Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="space-y-1" aria-hidden="true">
        <span
            className={`block h-1 w-6 origin-center bg-background rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1" : ""
            }`}
        ></span>
        <span
            className={`block h-1 w-4 origin-center bg-background rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                isOpen ? "-rotate-45 -translate-y-1.5 w-6" : ""
            }`}
        ></span>
    </div>
);

interface MobileMenuProps {
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
    links: Array<{ href: string; label: string }>;
    isActive: (href: string) => boolean;
    handleLinkClick: (e: React.MouseEvent, hash: string) => void;
    liClasses: string;
}

export function MobileMenu({
    isOpen,
    onToggle,
    onClose,
    links,
    isActive,
    handleLinkClick,
    liClasses,
}: MobileMenuProps) {
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Handle click outside mobile menu
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Element;
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                !target.closest(".mobile-menu-button")
            ) {
                onClose();
            }
        };

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    return (
        <div className="lg:hidden">
            <Button
                onClick={onToggle}
                className={`group !z-[1000] bg-transparent hover:bg-transparent shadow-none size-10 aspect-square font-bold text-foreground hover:text-white text-xl cursor-pointer mobile-menu-button ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={
                    isOpen ? "Zavřít navigační menu" : "Otevřít navigační menu"
                }
            >
                <HamburgerIcon isOpen={isOpen} />
            </Button>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                id="mobile-menu"
                className={`fixed inset-0 !z-[900] bg-foreground transition-all duration-500 ease-in-out h-screen ${
                    isOpen
                        ? "-translate-y-20 opacity-100 pointer-events-auto"
                        : "translate-y-full opacity-0 pointer-events-none"
                }`}
                style={{ top: "5rem" }}
                role="dialog"
                aria-modal="true"
                aria-label="Mobilní navigační menu"
                aria-hidden={!isOpen}
            >
                <Button
                    onClick={onToggle}
                    className="group top-7 right-3.5 !z-[1000] absolute bg-transparent hover:bg-transparent shadow-none size-10 aspect-square font-bold text-foreground hover:text-white text-xl cursor-pointer mobile-menu-button"
                    aria-label="Zavřít navigační menu"
                >
                    <HamburgerIcon isOpen={isOpen} />
                </Button>

                <ul
                    className={`flex flex-col justify-center items-center gap-8 h-full overflow-hidden font-bold text-background text-4xl text-center transition-all duration-700 ease-in-out ${
                        isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                    role="menu"
                    aria-label="Mobilní navigační odkazy"
                >
                    {links.map((link, index) => (
                        <li
                            key={link.href}
                            className={`${
                                isActive(link.href) ? "active" : ""
                            } ${liClasses} from-left transition-all duration-800 ease-in-out ${
                                isOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                            style={{
                                transitionDelay: isOpen
                                    ? `${index * 150}ms`
                                    : "0ms",
                            }}
                            role="none"
                        >
                            <Link
                                href={`/${link.href}`}
                                className="block"
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
                    <li
                        className={`transition-all duration-500 ease-in-out ${
                            isOpen
                                ? "opacity-100 blur-none translate-y-0"
                                : "opacity-0 blur-sm translate-y-4"
                        }`}
                        style={{
                            transitionDelay: isOpen
                                ? `${links.length * 100}ms`
                                : "0ms",
                        }}
                        role="none"
                    >
                        <Link
                            href="/#kontakt"
                            onClick={(e) => handleLinkClick(e, "/#kontakt")}
                            aria-label="Přejít na kontaktní formulář pro nezávaznou konzultaci"
                        >
                            <Button className="bg-background hover:bg-background hover:shadow-xl px-8 py-6 rounded-4xl w-full font-bold text-foreground hover:text-foreground text-xl transition-all duration-300 cursor-pointer">
                                Nezávazná konzultace
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
