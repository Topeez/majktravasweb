import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Card } from "@/components/venkovni-stineni/cards";

export default function VenkovniStineni() {
    const items = [
        {
            title: "Předokenní rolety",
            subtitle:
                "Předokenní rolety zajišťují výbornou ochranu před horkem i hlukem díky izolační výplni. Spolehlivě odolávají nepřízni počasí a přidávají vašemu domovu na bezpečí i komfortu.",
            image: "/assets/img/IMG_7776.jpeg",
            stats: {
                warmSecurity: {
                    label: "Ochrana proti teplu",
                    value: 5,
                },
                blindness: {
                    label: "Zatemnění",
                    value: 5,
                },
                isolation: {
                    label: "Tepelná izolace",
                    value: 5,
                },
                security: {
                    label: "Bezpečnostní ochrana",
                    value: 5,
                },
                deafness: {
                    label: "Odhlučnění",
                    value: 5,
                },
            },
        },
        {
            title: "Venkovní žaluzie",
            subtitle:
                "Venkovní žaluzie vám dávají plnou kontrolu nad světlem i teplotou v interiéru. Pomáhají udržet příjemné klima a zároveň šetří energii i náklady.",
            image: "/assets/img/external_venetian_blind.jpg",
            stats: {
                warmSecurity: {
                    label: "Ochrana proti teplu",
                    value: 4,
                },
                blindness: {
                    label: "Zatemnění",
                    value: 4,
                },
                isolation: {
                    label: "Tepelná izolace",
                    value: 3,
                },
                security: {
                    label: "Bezpečnostní ochrana",
                    value: 2,
                },
                deafness: {
                    label: "Odhlučnění",
                    value: 2,
                },
            },
        },
        {
            title: "Screenové rolety",
            subtitle:
                "Screenové rolety účinně stíní, aniž by bránily výhledu. Zabraňují přehřívání interiéru a blokují škodlivé UV paprsky – ideální pro moderní domy a kanceláře.",
            image: "/assets/img/screen.jpg",
            stats: {
                warmSecurity: {
                    label: "Ochrana proti teplu",
                    value: 5,
                },
                blindness: {
                    label: "Zatemnění",
                    value: 3,
                },
                isolation: {
                    label: "Tepelná izolace",
                    value: 2,
                },
                security: {
                    label: "Bezpečnostní ochrana",
                    value: 1,
                },
                deafness: {
                    label: "Odhlučnění",
                    value: 1,
                },
            },
        },
    ];

    return (
        <>
            <HeroSection
                title="Ovládněte světlo a teplotu &#45; venkovní stínění pro vaše pohodlí po celý rok"
                subtitle="Elegantní ochrana proti slunci i horku &#45; bez kompromisů."
                backgroundImage="/assets/img/external_venetian_blind.jpg"
            />
            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb
                        items={[
                            { title: "Domů", href: "/" },
                            {
                                title: "Stínicí technika",
                                href: "/stinici-technika",
                            },
                            { title: "Venkovní stínění" },
                        ]}
                    />
                    <div className="space-y-6 md:col-span-12">
                        <h2 className="mb-12 font-bold text-foreground text-3xl md:text-5xl text-center">
                            Typy venkovního stínění
                        </h2>

                        {items.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                image={item.image}
                                stats={item.stats}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
