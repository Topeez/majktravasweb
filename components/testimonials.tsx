"use client";

import { Star } from "lucide-react";
import { useMemo, useState } from "react";

interface Testimonial {
    initials: string;
    name: string;
    text: string;
    type: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export function Testimonials() {
    const testimonials = useMemo<Testimonial[]>(
        () => [
            {
                initials: "PN",
                name: "Petr Novák",
                type: "Rolety",
                text: "Velmi profesionální přístup. Montáž rolet proběhla rychle a precizně. Vše funguje bez problémů. Rozhodně doporučuji!",
            },
            {
                initials: "JK",
                name: "Jana Kovářová",
                type: "Markýza",
                text: "Objednala jsem si markýzu na terasu a jsem nadšená. Instalace byla rychlá, cena férová a markýza dokonale plní svůj účel. Skvělá práce!",
            },
            {
                initials: "MS",
                name: "Martin Svoboda",
                type: "Garážová vrata",
                text: "Montáž garážových vrat proběhla bez problémů. Ocenil jsem individuální přístup a odborné rady. Servis je také na výborné úrovni.",
            },
            {
                initials: "AH",
                name: "Anna Horáková",
                type: "Obecný servis",
                text: "Perfektní servis od začátku do konce. Rychlá reakce na dotazy, kvalitní materiály a precizní montáž. Jsem velmi spokojená s výsledkem.",
            },
            {
                initials: "TV",
                name: "Tomáš Veselý",
                type: "Žaluzie",
                text: "Excellentní práce! Montáž žaluzií proběhla bez problémů a výsledek předčil moje očekávání. Určitě budu doporučovat dál.",
            },
            {
                initials: "EČ",
                name: "Eva Černá",
                type: "Venkovní žaluzie",
                text: "Venkovní žaluzie nám výrazně zlepšily pohodu bydlení. Montáž byla profesionální a poradil nám i s výběrem správného typu. Výborná komunikace!",
            },
            {
                initials: "JH",
                name: "Josef Horák",
                type: "Markýza",
                text: "Investice do markýzy se určitě vyplatila. Kvalitní materiál, precizní práce a dodržení termínu. Doporučuji všem!",
            },
            {
                initials: "MN",
                name: "Marie Nováková",
                type: "Rolety",
                text: "Velmi jsem si cenila individuálního přístupu a trpělivosti při výběru rolet. Montáž proběhla čistě a rychle. Jsem maximálně spokojená.",
            },
            {
                initials: "DS",
                name: "David Svoboda",
                type: "Sekční vrata",
                text: "Sekční vrata fungují perfektně. Ocenil jsem hlavně poradenství při výběru a rychlost realizace. Profesionální služby na vysoké úrovni.",
            },
            {
                initials: "KV",
                name: "Klára Veselá",
                type: "Okenní sítě",
                text: "Montáž okenních sítí byla rychlá a bez nepořádku. Sítě perfektně sedí a plní svou funkci. Rozhodně se obrátím znovu při dalších potřebách.",
            },
            {
                initials: "PK",
                name: "Pavel Kratochvíl",
                type: "Oprava markýzy",
                text: "Rychlá a efektivní oprava staré markýzy. Problém byl vyřešen promptně. Férová cena a spolehlivý servis. Velmi doporučuji!",
            },
            {
                initials: "LM",
                name: "Lucie Malá",
                type: "Lamelové žaluzie",
                text: "Lamelové žaluzie do kanceláře splnily všechna očekávání. Výborná kvalita, přesná montáž a vstřícný přístup. Díky za profesionální práci!",
            },
        ],
        []
    );

    const [isPaused, setIsPaused] = useState(false);

    const duplicatedTestimonials = useMemo(() => {
        return [...testimonials, ...testimonials];
    }, [testimonials]);

    const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
        <div
            key={index}
            className="relative flex-shrink-0 bg-gray-50 hover:bg-gray-100 p-6 rounded-xl min-w-[400px] max-w-[400px] transition-all duration-300"
            aria-label={`Reference od ${testimonial.name} pro ${testimonial.type}`}
        >
            <div className="flex items-center">
                <div className="flex justify-center items-center bg-gray-900 rounded-full w-12 h-12 font-bold text-white">
                    {testimonial.initials}
                </div>
                <div className="ml-4">
                    <h3 className="font-bold text-gray-900 md:text-xl">
                        {testimonial.name}
                    </h3>
                    <div
                        className="flex mt-1 text-yellow-400"
                        aria-label="Hodnocení 5 hvězdiček"
                        role="img"
                    >
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="fill-current"
                                size={16}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <blockquote className="mt-4 text-gray-600 md:text-xl italic leading-relaxed">
                {testimonial.text}
            </blockquote>

            <div className="top-3 right-3 absolute bg-gray-900 px-2 py-1 rounded-full font-bold text-white text-xs">
                {testimonial.type}
            </div>
        </div>
    );

    return (
        <section
            id="recenze"
            className="bg-white py-16 md:py-24 overflow-hidden"
        >
            <div className="mx-auto px-4 container">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <p className="font-bold text-gray-500 text-base uppercase tracking-widest">
                        reference
                    </p>
                    <h2 className="font-bold text-gray-900 text-3xl md:text-5xl">
                        Co říkají moji zákazníci
                    </h2>
                    <p className="mt-4 text-gray-600 text-xl">
                        Přečtěte si reference od spokojených klientů, kteří
                        využili mé služby
                    </p>
                </div>

                <div className="relative">
                    {/* Gradient overlays for smooth fade effect */}
                    <div className="top-0 bottom-0 left-0 z-10 absolute bg-gradient-to-r from-white to-transparent w-20 pointer-events-none"></div>
                    <div className="top-0 right-0 bottom-0 z-10 absolute bg-gradient-to-l from-white to-transparent w-20 pointer-events-none"></div>

                    <div
                        className="flex gap-6 w-fit"
                        style={{
                            animation: "scroll 90s linear infinite",
                            animationPlayState: isPaused ? "paused" : "running",
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                        tabIndex={0}
                        role="group"
                        aria-label="Scrollující seznam referencí - najeďte myší pro pozastavení"
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(
                            -${(400 + 24) * testimonials.length}px
                        );
                    }
                }
            `}</style>
        </section>
    );
}
