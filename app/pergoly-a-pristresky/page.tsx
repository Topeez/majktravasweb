import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { ZigZagItem, ZigZagLayout } from "@/components/zig-zag-layout";

export default function PergolyAPristresky() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Pergoly a přístřešky" },
    ];

    const items: ZigZagItem[] = [
        {
            id: "bioklimaticke-pergoly",
            title: "Bioklimatické pergoly",
            description:
                "Revoluční řešení zastřešení terasy. Díky naklápěcím lamelám můžete regulovat sluneční paprsky i proudění vzduchu. Při úplném uzavření vznikne nepromokavá střecha, která vás ochrání i před deštěm.",
            imageSrc: "/assets/img/bio-pergola.jpg",
            features: [
                "Naklápěcí lamely (regulace stínu a ventilace)",
                "Integrovaný odvod vody v nohách pergoly",
                "Vysoká odolnost proti větru a zatížení sněhem",
                "Možnost screenových rolet",
            ],
            buttonLink: "#kontakt",
            buttonText: "Mám zájem o pergolu",
        },
        {
            id: "pristresky-pro-auta",
            title: "Přístřešky pro auta (Carporty)",
            description:
                "Moderní alternativa garáže, která šetří místo a vypadá skvěle. Vzdušná konstrukce zajišťuje rychlé osychání vozu, čímž předchází korozi. V zimě vás navíc zbaví nutnosti škrábat námrazu.",
            imageSrc: "/assets/img/pristresek-pro-auto.jpg",
            features: [
                "Ochrana laku před UV zářením a krupobitím",
                "Cirkulace vzduchu (auto rychleji schne)",
                "Bezúdržbová hliníková konstrukce (žádné natírání)",
                "Moderní design sladěný s domem",
            ],
            buttonLink: "#kontakt",
            buttonText: "Poptat přístřešek",
        },
    ];

    return (
        <>
            <HeroSection
                title="Užívejte si zahradu za každého počasí a dopřejte svému vozu bezpečí pod moderním zastřešením."
                backgroundImage="/assets/img/bio-pergola-hero.jpg"
                placeholderColor="#5ca437"
                arria-label="Hero sekce pro pergoly a přístřešky"
            />

            <section className="py-16 md:py-24 cs-container">
                <Breadcrumb items={breadcrumbItems} className="mb-12" />

                {/* Úvodní text stránky */}
                <div className="mb-20 max-w-3xl">
                    <h2 className="mb-6 font-bold text-3xl md:text-4xl md:text-left text-center">
                        Rozšiřte svůj obytný prostor
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-left text-center">
                        Nabízíme špičková řešení z odolného hliníku. Ať už
                        hledáte stínění pro terasu nebo bezpečné parkování, naše
                        konstrukce vynikají dlouhou životností, bezúdržbovostí a
                        moderním designem.
                    </p>
                </div>

                <ZigZagLayout items={items} />
            </section>

            <Contact />
        </>
    );
}
