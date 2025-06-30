import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            initials: "PN",
            name: "Petr Novák",
            text: "Velmi profesionální přístup. Montáž rolet proběhla rychle a precizně. Po roce používání vše funguje bez problémů. Rozhodně doporučuji!"
        },
        {
            initials: "JK",
            name: "Jana Kovářová",
            text: "Objednala jsem si markýzu na terasu a jsem nadšená. Instalace byla rychlá, cena férová a markýza dokonale plní svůj účel. Skvělá práce!"
        },
        {
            initials: "MS",
            name: "Martin Svoboda",
            text: "Montáž garážových vrat proběhla bez problémů. Ocenil jsem individuální přístup a odborné rady. Servis po instalaci je také na výborné úrovni."
        }
    ];


    return (
        <section id="recenze" className="bg-white py-16 md:py-24">
            <div className="mx-auto px-4 container">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-bold text-3xl md:text-5xl">Co říkají moji zákazníci</h2>
                    <p className="mt-4 text-gray-600 text-xl">
                        Přečtěte si reference od spokojených klientů, kteří využili mé služby
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-muted hover:shadow-md p-6 rounded-xl transition-shadow testimonial-card">
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
                            <p className="mt-4 text-gray-600 italic">{testimonial.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}