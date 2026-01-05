import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    image: string;
    link: string;
    description?: string;
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

export function BentoGrid({ items, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-3 auto-rows-[350px]",
                className
            )}
        >
            {items.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    className={cn(
                        "group relative bg-gray-900 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden transition-all hover:-translate-y-1",
                        // Bento logika: 1. karta je široká (2 sloupce)
                        index === 0 ? "md:col-span-2" : "md:col-span-1"
                    )}
                >
                    {/* 1. OBRÁZEK NA POZADÍ */}
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* 2. GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                    {/* 3. TEXTOVÝ OBSAH */}
                    <div className="z-10 absolute inset-0 flex flex-col justify-end p-6 md:p-8 h-full">
                        <div className="transition-transform translate-y-2 group-hover:translate-y-0 duration-300 transform">
                            <div className="flex justify-between items-center">
                                <h3
                                    className={cn(
                                        "mb-0 font-bold text-white",
                                        index === 0
                                            ? "text-2xl md:text-3xl"
                                            : "text-xl"
                                    )}
                                >
                                    {item.title}
                                </h3>

                                <div className="bg-white/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm p-2 rounded-full transition-all translate-x-4 group-hover:translate-x-0 duration-300">
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Zobrazit popis jen pokud existuje */}
                            {item.description && (
                                <p className="opacity-80 group-hover:opacity-100 mt-3 max-w-md text-gray-200 line-clamp-2 leading-relaxed transition-opacity duration-300 delay-75">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
