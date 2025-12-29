import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Button } from "@/components/ui/button"; // Pokud máš shadcn button
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PergolyAPristresky() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Pergoly a přístřešky" },
    ];

    return (
        <>
            <HeroSection
                title="Užívejte si zahradu za každého počasí a dopřejte svému vozu bezpečí pod moderním zastřešením."
                backgroundImage="/assets/img/bio-pergola-hero.jpg"
                placeholderColor="#5ca437"
                arria-label="Hero sekce pro pergoly a přístřešky"
            />

            <section className="py-16 md:py-24">
                <div className="mx-auto px-4 cs-container">
                    <Breadcrumb items={breadcrumbItems} className="mb-12" />

                    {/* Úvodní text stránky */}
                    <div className="mb-20 max-w-3xl">
                        <h2 className="mb-6 font-bold text-center md:text-left text-3xl md:text-4xl">
                            Rozšiřte svůj obytný prostor
                        </h2>
                        <p className="text-muted-foreground text-center md:text-left text-lg">
                            Nabízíme špičková řešení z odolného hliníku. Ať už
                            hledáte stínění pro terasu nebo bezpečné parkování,
                            naše konstrukce vynikají dlouhou životností,
                            bezúdržbovostí a moderním designem.
                        </p>
                    </div>

                    {/* SEKCE 1: BIOKLIMATICKÉ PERGOLY (Obrázek vpravo) */}
                    <div
                        id="bioklimaticke-pergoly"
                        className="items-center gap-12 grid md:grid-cols-2 mb-32 scroll-mt-24"
                    >
                        <div>
                            <h2 className="mb-6 font-bold text-foreground text-3xl md:text-4xl">
                                Bioklimatické pergoly
                            </h2>
                            <p className="mb-6 text-muted-foreground text-lg leading-relaxed">
                                Revoluční řešení zastřešení terasy. Díky
                                naklápěcím lamelám můžete regulovat sluneční
                                paprsky i proudění vzduchu. Při úplném uzavření
                                vznikne nepromokavá střecha, která vás ochrání i
                                před deštěm.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Naklápěcí lamely (regulace stínu a ventilace)",
                                    "Integrovaný odvod vody v nohách pergoly",
                                    "Vysoká odolnost proti větru a zatížení sněhem",
                                    "Možnost screenových rolet",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="bg-foreground mt-1 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-primary/90">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                className="bg-foreground hover:bg-background mt-4 py-3 border border-foreground rounded-lg w-full md:w-1/2 font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                            >
                                <Link href="/pergoly-a-pristresky/#kontakt">
                                    Mám zájem o pergolu{" "}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Obrázek */}
                        <div className="group relative shadow-2xl rounded-2xl h-[400px] md:h-[500px] overflow-hidden">
                            <Image
                                src="/assets/img/bio-pergola.jpg"
                                alt="Moderní bioklimatická pergola"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Dekorativní prvek */}
                            <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                        </div>
                    </div>

                    {/* SEKCE 2: PŘÍSTŘEŠKY PRO AUTA (Obrázek vlevo - Zig-Zag) */}
                    <div
                        id="pristresky-pro-auta"
                        className="items-center gap-12 grid md:grid-cols-2 scroll-mt-24"
                    >
                        {/* Na desktopu prohodíme pořadí, aby byl obrázek vlevo */}
                        <div className="group relative order-last md:order-first shadow-2xl rounded-2xl h-[400px] md:h-[500px] overflow-hidden">
                            <Image
                                src="/assets/img/pristresek-pro-auto.jpg"
                                alt="Hliníkový přístřešek pro auto (Carport)"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                        </div>

                        <div>
                            <div className="inline-block bg-primary/10 mb-4 px-3 py-1 rounded-full font-bold text-primary text-xs uppercase tracking-wider">
                                Ochrana vozu
                            </div>
                            <h2 className="mb-6 font-bold text-foreground text-3xl md:text-4xl">
                                Přístřešky pro auta (Carporty)
                            </h2>
                            <p className="mb-6 text-muted-foreground text-lg leading-relaxed">
                                Moderní alternativa garáže, která šetří místo a
                                vypadá skvěle. Vzdušná konstrukce zajišťuje
                                rychlé osychání vozu, čímž předchází korozi. V
                                zimě vás navíc zbaví nutnosti škrábat námrazu.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Ochrana laku před UV zářením a krupobitím",
                                    "Cirkulace vzduchu (auto rychleji schne)",
                                    "Bezúdržbová hliníková konstrukce (žádné natírání)",
                                    "Moderní design sladěný s domem",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="bg-foreground mt-1 p-1 rounded-full">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-primary/90">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                className="bg-foreground hover:bg-background mt-4 py-3 border border-foreground rounded-lg w-full md:w-1/2 font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                            >
                                <Link href="/pergoly-a-pristresky/#kontakt">
                                    Poptat přístřešek{" "}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
