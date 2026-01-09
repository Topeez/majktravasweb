"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import React from "react";

type Stat = {
    label: string;
    value: number;
};

interface Props {
    title: string;
    // Změna typu: ReactNode je nejobecnější a nejlepší pro obsah (bere string, number, JSX, null...)
    subtitle: React.ReactNode;
    subtitle2?: string;
    descriptionExtra?: React.ReactNode;
    stats: {
        [key: string]: Stat;
    };
    image1: string;
    image2: string;
    variant1?: string | React.ReactElement;
    variant2?: string | React.ReactElement;
}

export function Card({
    title,
    subtitle,
    descriptionExtra,
    image1,
    image2,
    stats,
    subtitle2,
    variant1,
    variant2,
}: Props) {
    return (
        <div className="flex-col shadow-lg p-6 border rounded-2xl w-full">
            {subtitle2 && (
                <>
                    <div
                        className="flex md:flex-row md:odd:flex-row-reverse flex-col gap-6 md:gap-12 overflow-hidden"
                        aria-label={`Karta ${title}`}
                    >
                        {/* Content */}
                        <div className="flex flex-col justify-between gap-8 w-full h-full">
                            <div className="flex-1 space-y-4 text-center">
                                <h3 className="font-bold text-foreground text-2xl md:text-3xl">
                                    {title}
                                </h3>

                                {/* ZDE JE OPRAVA */}
                                <div className="text-muted-foreground text-lg">
                                    {subtitle}
                                </div>

                                {descriptionExtra && (
                                    <div className="mt-2">
                                        {descriptionExtra}
                                    </div>
                                )}
                            </div>

                            {/* Stats */}
                            <div className="flex md:flex-row flex-col justify-between items-center gap-4 w-full">
                                {Object.entries(stats).map(([key, stat]) => (
                                    <div
                                        key={key}
                                        className="shadow-sm p-4 border border-muted rounded-lg"
                                    >
                                        <div className="flex justify-center font-medium text-muted-foreground text-center">
                                            <span
                                                className="text-md md:text-xl"
                                                aria-label={stat.label}
                                            >
                                                {stat.label}
                                            </span>
                                        </div>
                                        <div className="flex gap-1 mt-2">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={
                                                        i < stat.value
                                                            ? "bg-foreground h-4 w-8 rounded-xs"
                                                            : "h-4 w-8 bg-muted-foreground rounded-xs"
                                                    }
                                                    aria-label={
                                                        i < stat.value
                                                            ? `${stat.label} - ${stat.value} z 5`
                                                            : `${stat.label} - 0 z 5`
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Separator className="my-12" />
                    <div className="space-y-6">
                        {/* Content */}
                        <div className="text-center">
                            <p className="text-muted-foreground text-base uppercase">
                                dostupné jsou
                            </p>
                            <h3 className="font-bold text-foreground text-2xl md:text-3xl">
                                {subtitle2}
                            </h3>
                        </div>

                        <div className="flex md:flex-row flex-col justify-between items-center gap-8">
                            {/* Image 1 */}
                            <div className="relative rounded-xl w-full md:w-1/2 h-64 md:h-[450px] overflow-hidden">
                                <Image
                                    src={image1}
                                    width={1200}
                                    height={800}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                                <div className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-black/50 via-20% via-black/50 to-transparent p-5">
                                    <h4 className="text-background text-3xl text-center">
                                        {variant1}
                                    </h4>
                                </div>
                            </div>

                            {/* Image 2 */}
                            <div className="relative rounded-xl w-full md:w-1/2 h-64 md:h-[450px] overflow-hidden">
                                <Image
                                    src={image2}
                                    width={1200}
                                    height={800}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                                <div className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-black/50 via-20% via-black/50 to-transparent p-5">
                                    <h4 className="text-background text-3xl text-center">
                                        {variant2}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
