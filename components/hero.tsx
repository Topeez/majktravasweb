"use client";
import { ArrowRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMemo, useCallback, memo } from "react";

type HeroSectionProps = {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
        icon?: boolean;
    };
};

export const HeroSection = memo(function HeroSection({
    title,
    subtitle,
    backgroundImage,
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {
    // Memoize the scroll function to prevent recreation on every render
    const scrollToNextSection = useCallback(() => {
        const nextSection = document.querySelector("section:nth-of-type(2)");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        }
    }, []);

    // Memoize the section className to prevent recalculation
    const sectionClassName = useMemo(
        () =>
            cn(
                "z-10 relative flex flex-col justify-center items-center",
                "bg-cover bg-no-repeat bg-center w-full min-h-screen text-white",
                "animate-bg-zoom-out-mobile lg:animate-bg-zoom-out"
            ),
        []
    );

    // Memoize the background style object
    const backgroundStyle = useMemo(
        () => ({
            backgroundImage: `url(${backgroundImage})`,
        }),
        [backgroundImage]
    );

    // Memoize the primary CTA button to prevent recreation
    const primaryCtaButton = useMemo(() => {
        if (!primaryCta) return null;

        return (
            <Link
                href={primaryCta.href}
                className="bg-background hover:bg-foreground px-6 md:px-8 py-3 rounded-4xl font-bold text-popover-foreground hover:text-background text-lg md:text-xl transition-colors cursor-pointer"
            >
                {primaryCta.label}
            </Link>
        );
    }, [primaryCta]);

    // Memoize the secondary CTA button to prevent recreation
    const secondaryCtaButton = useMemo(() => {
        if (!secondaryCta) return null;

        return (
            <Link
                href={secondaryCta.href}
                className="group flex items-center gap-2 bg-foreground hover:bg-background px-6 md:px-8 py-3 rounded-4xl font-bold hover:text-foreground text-lg md:text-xl transition-colors cursor-pointer"
            >
                {secondaryCta.label}
                {secondaryCta.icon && (
                    <ArrowRight
                        size={20}
                        className="transition-all group-hover:translate-x-1"
                    />
                )}
            </Link>
        );
    }, [secondaryCta]);

    return (
        <section className={sectionClassName} style={backgroundStyle}>
            <div className="z-10 grid grid-cols-12 w-full cs-container">
                <div className="space-y-12 col-span-12 py-12 text-center">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl leading-snug animate-fade-in">
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className="font-bold text-xl md:text-2xl">
                            {subtitle}
                        </h2>
                    )}
                    {(primaryCta || secondaryCta) && (
                        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                            {primaryCtaButton}
                            {secondaryCtaButton}
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll Down Button */}
            <Button
                variant="ghost"
                onClick={scrollToNextSection}
                className="bottom-8 left-1/2 z-20 absolute flex justify-center items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-full size-12 aspect-square text-white transition-all -translate-x-1/2 animate-bounce cursor-pointer transform"
            >
                <ChevronsDown size={24} />
            </Button>

            <div className="z-0 absolute inset-0 bg-black/55" />
        </section>
    );
});
