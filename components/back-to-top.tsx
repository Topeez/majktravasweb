"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "./ui/button";

export function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768 && "ontouchstart" in window;
        setShouldRender(!isMobile);

        if (isMobile) return; // Don't set up listeners on mobile

        let ticking = false;

        const toggleVisibility = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setVisible(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleResize = () => {
            const newIsMobile =
                window.innerWidth <= 768 && "ontouchstart" in window;
            setShouldRender(!newIsMobile);
        };

        // Initial check
        toggleVisibility();

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <Button
            variant="ghost"
            onClick={scrollToTop}
            className={`group fixed bottom-5 right-5 z-50 flex items-center justify-start rounded-full size-12 hover:w-24 bg-foreground text-background border border-background transition-[width] duration-200 cursor-pointer gap-0 overflow-hidden hover:border-foreground ${
                visible
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
            aria-label="Back to top"
        >
            <ArrowUp size={20} className="flex-shrink-0 ml-0.5" />
            <span className="opacity-0 group-hover:opacity-100 ml-1 text-sm whitespace-nowrap transition-opacity duration-200">
                Nahoru
            </span>
        </Button>
    );
}
