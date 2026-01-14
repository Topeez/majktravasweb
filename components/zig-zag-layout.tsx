import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactButton } from "./contact-button";

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
                                            <Check className="w-4 h-4 text-background" />
                                        </div>
                                        <span className="text-primary/90">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <ContactButton
                                href={item.buttonLink}
                                linkPrefix={item.id}
                                className="group"
                            >
                                {item.buttonText ||
                                    `Mám zájem o ${item.title.toLowerCase()}`}
                                <ArrowRight className="ml-1.5 group-hover:ml-2 size-5 transition-all" />
                            </ContactButton>
                        </div>

                        <div className="group relative shadow-2xl rounded-2xl w-full h-[400px] md:h-[500px] overflow-hidden">
                            <Image
                                src={item.imageSrc}
                                alt={item.imageAlt || item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 m-4 border-2 border-background/10 rounded-2xl pointer-events-none" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
