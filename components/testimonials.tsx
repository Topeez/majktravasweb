"use client";

import { Star } from "lucide-react";
import { useMemo, useState } from "react";

interface Testimonial {
    initials: string;
    name: string;
    text: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

export function Testimonials() {
    // Memoized testimonials to prevent recreation on every render
    const testimonials = useMemo(
        () => [
            {
                initials: "PN",
                name: "Petr Novák",
                text: "Velmi profesionální přístup. Montáž rolet proběhla rychle a precizně. Po roce používání vše funguje bez problémů. Rozhodně doporučuji!",
            },
            {
                initials: "JK",
                name: "Jana Kovářová",
                text: "Objednala jsem si markýzu na terasu a jsem nadšená. Instalace byla rychlá, cena férová a markýza dokonale plní svůj účel. Skvělá práce!",
            },
            {
                initials: "MS",
                name: "Martin Svoboda",
                text: "Montáž garážových vrat proběhla bez problémů. Ocenil jsem individuální přístup a odborné rady. Servis po instalaci je také na výborné úrovni.",
            },
            {
                initials: "AH",
                name: "Anna Horáková",
                text: "Perfektní servis od začátku do konce. Rychlá reakce na dotazy, kvalitní materiály a precizní montáž. Jsem velmi spokojená s výsledkem.",
            },
            {
                initials: "TV",
                name: "Tomáš Veselý",
                text: "Excellentní práce! Montáž žaluzií proběhla bez problémů a výsledek předčil moje očekávání. Určitě budu doporučovat dál.",
            },
        ],
        []
    );

    const [isPaused, setIsPaused] = useState(false);

    // Double the testimonials array for seamless infinite scroll
    const duplicatedTestimonials = useMemo(() => {
        return [...testimonials, ...testimonials];
    }, [testimonials]);

    // Memoized testimonial card component
    const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
        <div
            key={index}
            className="flex-shrink-0 bg-gray-50 hover:bg-gray-100 p-6 rounded-xl min-w-[350px] max-w-[350px] transition-all duration-300 group-hover:cursor-grab"
        >
            <div className="flex items-center">
                <div className="flex justify-center items-center bg-foreground rounded-full w-12 h-12 font-bold text-white">
                    {testimonial.initials}
                </div>
                <div className="ml-4">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex mt-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="fill-current" size={16} />
                        ))}
                    </div>
                </div>
            </div>
            <p className="mt-4 text-gray-600 italic leading-relaxed">
                {testimonial.text}
            </p>
        </div>
    );

    return (
        <section id="recenze" className="py-16 md:py-24 overflow-hidden">
            <div className="cs-container">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="font-bold text-3xl md:text-5xl">
                        Co říkají moji zákazníci
                    </h2>
                    <p className="mt-4 text-gray-600 text-xl">
                        Přečtěte si reference od spokojených klientů, kteří
                        využili mé služby
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="group relative">
                    {/* Scrolling testimonials */}
                    <div
                        className="flex gap-6 w-fit"
                        style={{
                            animation: "scroll 40s linear infinite",
                            animationPlayState: isPaused ? "paused" : "running",
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
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
                            -${350 * testimonials.length +
                                24 * testimonials.length}px
                        );
                    }
                }
            `}</style>
        </section>
    );
}
