"use client";

import { memo, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Type definition for gallery images
export type GalleryImage = {
    src: string;
    alt: string;
    title?: string;
    description?: string;
};

// Props for the Gallery component
type GalleryProps = {
    title?: string;
    subtitle?: string;
    images: GalleryImage[];
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    showTitles?: boolean;
    enableLightbox?: boolean;
    className?: string;
    aspectRatio?: "square" | "landscape" | "portrait" | "auto";
};

// Main reusable gallery component
export const Gallery = memo(function Gallery({
    title,
    subtitle,
    images,
    columns = 3,
    showTitles = true,
    enableLightbox = true,
    className = "",
    aspectRatio = "landscape",
}: GalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        if (enableLightbox) {
            setCurrentImageIndex(index);
            setLightboxOpen(true);
        }
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const getGridClasses = () => {
        const baseClass = "gap-4 grid";
        switch (columns) {
            case 1:
                return `${baseClass} grid-cols-1`;
            case 2:
                return `${baseClass} grid-cols-1 sm:grid-cols-2`;
            case 3:
                return `${baseClass} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`;
            case 4:
                return `${baseClass} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
            case 5:
                return `${baseClass} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`;
            case 6:
                return `${baseClass} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6`;
            default:
                return `${baseClass} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`;
        }
    };

    const getAspectRatioClass = () => {
        switch (aspectRatio) {
            case "square":
                return "aspect-square";
            case "landscape":
                return "aspect-[4/3]";
            case "portrait":
                return "aspect-[3/4]";
            case "auto":
                return "";
            default:
                return "aspect-[4/3]";
        }
    };

    return (
        <>
            <div className={`w-full ${className}`}>
                {/* Header */}
                {(title || subtitle) && (
                    <div className="mb-8 text-center">
                        {title && (
                            <h2 className="mb-4 font-bold text-4xl">{title}</h2>
                        )}
                        {subtitle && (
                            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Gallery Grid */}
                <div className={getGridClasses()}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <div
                                className={`${getAspectRatioClass()} relative overflow-hidden`}
                            >
                                <Image
                                    width={1920}
                                    height={1080}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                />

                                {/* Hover overlay */}
                                {enableLightbox && (
                                    <div className="absolute inset-0 flex justify-center items-center bg-black/0 group-hover:bg-black/20 transition-colors">
                                        <ZoomIn
                                            size={24}
                                            className="opacity-0 group-hover:opacity-100 text-white transition-opacity"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Image title */}
                            {showTitles && image.title && (
                                <div className="p-3">
                                    <h4 className="font-semibold text-sm">
                                        {image.title}
                                    </h4>
                                    {image.description && (
                                        <p className="mt-1 text-muted-foreground text-xs">
                                            {image.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && enableLightbox && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/90 p-4">
                    {/* Close Button */}
                    <Button
                        variant={"destructive"}
                        onClick={closeLightbox}
                        className="top-4 right-4 z-10 absolute text-white hover:text-gray-300 cursor-pointer"
                    >
                        <X size={32} />
                    </Button>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant={"secondary"}
                                size={"icon"}
                                onClick={goToPrevious}
                                className="left-4 z-10 absolute bg-foreground text-white hover:text-gray-300 hover:bg-accent-foreground cursor-pointer"
                            >
                                <ChevronLeft size={32} />
                            </Button>
                            <Button
                                variant={"secondary"}
                                size={"icon"}
                                onClick={goToNext}
                                className="right-4 z-10 absolute bg-foreground text-white hover:text-gray-300 hover:bg-accent-foreground cursor-pointer"
                            >
                                <ChevronRight size={32} />
                            </Button>
                        </>
                    )}

                    {/* Current image */}
                    <div className="flex flex-col items-center max-w-4xl max-h-full">
                        <Image
                            width={1920}
                            height={1080}
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            className="max-w-full max-h-[80vh] object-contain"
                        />

                        {/* Image info */}
                        {(images[currentImageIndex].title ||
                            images[currentImageIndex].description) && (
                            <div className="mt-4 text-white text-center">
                                {images[currentImageIndex].title && (
                                    <h3 className="font-semibold text-lg">
                                        {images[currentImageIndex].title}
                                    </h3>
                                )}
                                {images[currentImageIndex].description && (
                                    <p className="mt-2 text-gray-300">
                                        {images[currentImageIndex].description}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Image counter */}
                        {images.length > 1 && (
                            <div className="mt-4 text-white text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
});
