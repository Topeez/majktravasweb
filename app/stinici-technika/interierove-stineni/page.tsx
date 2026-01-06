import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import React from "react";
import {
    interiorShadingOptions,
    interiorShadingPros,
} from "@/data/interior-shading";

export default function InterieroveStineni() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Stínicí technika", href: "/stinici-technika" },
        { title: "Interiérové stínění" },
    ];

    return (
        <>
            <HeroSection
                title="Styl a soukromí – interiérové stínění, které ladí s vaším domovem"
                backgroundImage="/assets/img/IMG_7601.jpeg"
                placeholderColor="#5ca437"
                aria-label="Interiérové stínění"
            />

            <section className="py-16 md:py-24">
                <div className="mx-auto px-4 cs-container">
                    <Breadcrumb
                        items={breadcrumbItems}
                        className="mb-12"
                        aria-label="Navigace"
                    />
                    <div className="items-center gap-12 md:gap-24 grid grid-cols-1 md:grid-cols-2 mb-24">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-foreground text-3xl md:text-5xl leading-tight">
                                Interiérové stínění{" "}
                                <span className="text-black">spojuje</span>{" "}
                                funkčnost <span className="text-black">a</span>{" "}
                                estetiku
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Správně zvolené stínění dokáže proměnit
                                atmosféru celé místnosti. Nejde jen o ochranu
                                před sluncem, ale o doplněk, který podtrhne styl
                                vašeho bydlení. Nabízím kompletní sortiment od
                                klasických žaluzií až po moderní japonské stěny.
                            </p>
                        </div>

                        {/* Pravý sloupec: Výhody v boxu */}
                        <div className="bg-muted/30 p-8 md:p-10 border border-border/50 rounded-3xl">
                            <h3 className="flex items-center gap-2 mb-6 font-bold text-xl md:text-2xl">
                                <span className="text-foreground">✦</span> Proč
                                zvolit vnitřní stínění?
                            </h3>
                            <ul className="space-y-4">
                                {interiorShadingPros.map((pro) => (
                                    <li
                                        key={pro}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="flex flex-shrink-0 justify-center items-center bg-foreground mt-1 p-1 rounded-full w-6 h-6">
                                            <Check
                                                className="w-3.5 h-3.5 text-white"
                                                strokeWidth={3}
                                            />
                                        </div>
                                        <span className="font-medium text-muted-foreground text-lg">
                                            {pro}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Typy stínění */}
                    <div className="mb-12 md:text-left text-center">
                        <h3 className="mb-4 font-bold text-3xl md:text-4xl">
                            Typy{" "}
                            <span className="text-foreground">
                                interiérového stínění
                            </span>
                        </h3>
                        <p className="text-muted-foreground">
                            Vyberte si řešení přesně pro vaše okna
                        </p>
                    </div>

                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {interiorShadingOptions.map((option) => (
                            <Card
                                key={option.title}
                                className="group relative hover:shadow-lg p-0 border-border/50 hover:border-foreground/50 overflow-hidden transition-all duration-300"
                            >
                                <div className="relative h-[280px] overflow-hidden">
                                    <Image
                                        width={1920}
                                        height={1080}
                                        src={option.img}
                                        alt={option.title}
                                        draggable={false}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="top-4 right-4 absolute bg-black/50 backdrop-blur-md p-2.5 rounded-full text-white">
                                        <option.icon
                                            size={30}
                                            className="size-5 text-background"
                                        />
                                    </div>
                                </div>
                                <CardHeader className="p-6">
                                    <CardTitle className="mb-2 text-black group-hover:text-foreground text-xl md:text-2xl transition-colors">
                                        {option.title}
                                    </CardTitle>
                                    <CardDescription className="text-base line-clamp-3">
                                        {option.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
                <h3 className="mt-20 mb-12 font-bold text-3xl md:text-5xl text-center">
                    Tak co? Máte vybráno?
                </h3>
                <h4 className="font-bold text-foreground text-2xl md:text-4xl text-center">
                    Neváhejte se mi ozvat!
                </h4>
            </section>
            <Contact aria-label="Kontaktní formulář" />
        </>
    );
}
