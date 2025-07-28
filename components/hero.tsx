"use client";
import { ArrowRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMemo, useCallback, memo, useState, useEffect } from "react";

type HeroSectionProps = {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    placeholderColor?: string;
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
    placeholderColor = "#1f2937",
    primaryCta,
    secondaryCta,
}: HeroSectionProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");

    // Load background image
    useEffect(() => {
        if (!backgroundImage) return;

        const img = new Image();

        img.onload = () => {
            setImageSrc(backgroundImage);
            setImageLoaded(true);
        };

        img.onerror = () => {
            // Silently fail - keep the placeholder
            console.warn(`Failed to load background image: ${backgroundImage}`);
        };

        // Set crossOrigin if needed for external images
        if (
            backgroundImage.startsWith("http") &&
            !backgroundImage.includes(window.location.hostname)
        ) {
            img.crossOrigin = "anonymous";
        }

        img.src = backgroundImage;
    }, [backgroundImage]);

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
                "overflow-hidden"
            ),
        []
    );

    // Memoize the background layer className
    const backgroundLayerClassName = useMemo(
        () =>
            cn(
                "absolute inset-0 bg-cover bg-no-repeat bg-center transition-all duration-700 ease-out",
                imageLoaded
                    ? "animate-bg-zoom-out-mobile lg:animate-bg-zoom-out opacity-100 scale-100"
                    : "opacity-0 scale-105"
            ),
        [imageLoaded]
    );

    // Memoize the placeholder layer className
    const placeholderClassName = useMemo(
        () =>
            cn(
                "absolute inset-0 transition-opacity duration-700 ease-out",
                imageLoaded ? "opacity-0" : "opacity-100"
            ),
        [imageLoaded]
    );

    // Memoize the background style object
    const backgroundStyle = useMemo(
        () => ({
            backgroundImage: imageLoaded ? `url(${imageSrc})` : "none",
        }),
        [imageLoaded, imageSrc]
    );

    // Memoize the placeholder style
    const placeholderStyle = useMemo(
        () => ({
            backgroundColor: placeholderColor,
        }),
        [placeholderColor]
    );

    // Memoize the primary CTA button to prevent recreation
    const primaryCtaButton = useMemo(() => {
        if (!primaryCta) return null;

        return (
            <Link
                href={primaryCta.href}
                aria-label={primaryCta.label}
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
                aria-label={secondaryCta.label}
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
        <section className={sectionClassName}>
            {/* Elegant Placeholder Layer */}
            <div className={placeholderClassName}>
                <div className="absolute inset-0" style={placeholderStyle} />
                {/* Subtle animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
            </div>

            {/* Background Image Layer */}
            <div className={backgroundLayerClassName} style={backgroundStyle} />

            {/* Content - Always visible */}
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
                onClick={scrollToNextSection}
                aria-label="Scroll down to the next section"
                className="bottom-8 left-1/2 z-20 absolute flex justify-center items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 rounded-full size-12 aspect-square text-white transition-all -translate-x-1/2 animate-bounce cursor-pointer transform"
            >
                <ChevronsDown size={24} />
            </Button>

            {/* Overlay */}
            <div className="z-0 absolute inset-0 bg-black/55" />
        </section>
    );
});
