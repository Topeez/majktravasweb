import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ZigZagItem {
    id?: string;
    title: string;
    description: string;
    features: string[];
    imageSrc: string;
    imageAlt?: string;
    buttonText?: string;
    buttonLink?: string;
}

interface ZigZagLayoutProps {
    items: ZigZagItem[];
    className?: string;
}

export function ZigZagLayout({ items, className }: ZigZagLayoutProps) {
    return (
        <div className={cn("flex flex-col gap-24 md:gap-32", className)}>
            {items.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={index}
                        id={item.id}
                        className="items-center gap-12 grid md:grid-cols-2 scroll-mt-24"
                    >
                        {/* TEXTOVÁ ČÁST */}
                        {/* Pokud je sudý (0, 2...), text je vlevo (order-first). 
                            Pokud lichý (1, 3...), text je vpravo (order-last).
                            Na mobilu je text vždy pod obrázkem nebo nad ním, podle preference. 
                            Zde dávám obrázek první na mobilu pro vizuál, nebo text.
                            Standardně: Text první na mobilu, Text vlevo na desktopu.
                         */}
                        <div
                            className={cn(
                                isEven ? "md:order-first" : "md:order-last"
                            )}
                        >
                            <h2 className="mb-6 font-bold text-foreground text-3xl md:text-4xl md:text-left text-center">
                                {item.title}
                            </h2>
                            <p className="mb-6 text-muted-foreground text-lg md:text-left text-center leading-relaxed">
                                {item.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {item.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 bg-foreground mt-1 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-primary/90">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                className="bg-foreground hover:bg-background mt-4 px-8 py-6 border border-foreground rounded-3xl w-full md:w-auto font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                            >
                                <Link href={item.buttonLink || "/#kontakt"}>
                                    {item.buttonText ||
                                        `Mám zájem o ${item.title.toLowerCase()}`}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>

                        {/* OBRÁZKOVÁ ČÁST */}
                        <div className="group relative shadow-2xl rounded-2xl w-full h-[400px] md:h-[500px] overflow-hidden">
                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt || item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Dekorativní border */}
                            <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
