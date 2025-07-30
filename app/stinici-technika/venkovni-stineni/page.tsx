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
            image1: "/assets/img/IMG_7776.jpeg",
            image2: "/assets/img/podomitka_rolety_venek.jpg",
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
            subtitle2: "2 varianty provedení",
            variant1: <strong>&bdquo;Přiznané&rdquo;</strong>,
            variant2: <strong>&bdquo;Podomítkové&rdquo;</strong>,
        },
        {
            title: "Venkovní žaluzie",
            subtitle:
                "Venkovní žaluzie vám dávají plnou kontrolu nad světlem i teplotou v interiéru. Pomáhají udržet příjemné klima a zároveň šetří energii i náklady.",
            image1: "/assets/img/IMG_7723.jpeg",
            image2: "/assets/img/zaluzie_venek_podomitka.png",
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
            subtitle2: "2 varianty provedení",
            variant1: <strong>&bdquo;Přiznané&rdquo;</strong>,
            variant2: <strong>&bdquo;Podomítkové&rdquo;</strong>,
        },
        {
            title: "Screenové rolety",
            subtitle:
                "Screenové rolety účinně stíní, aniž by bránily výhledu. Zabraňují přehřívání interiéru a blokují škodlivé UV paprsky – ideální pro moderní domy a kanceláře.",
            image1: "/assets/img/screen_prizn.png",
            image2: "/assets/img/screen_podomitka.png",
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
            subtitle2: "2 varianty provedení",
            variant1: <strong>&bdquo;Přiznané&rdquo;</strong>,
            variant2: <strong>&bdquo;Podomítkové&rdquo;</strong>,
        },
    ];

    const breadcrumbItems = [
        { title: "Domů", href: "/", "aria-label": "Domů" },
        {
            title: "Stínicí technika",
            href: "/stinici-technika",
            "aria-label": "Stínicí technika",
        },
        { title: "Venkovní stínění", "aria-label": "Venkovní stínění" },
    ];

    return (
        <>
            <HeroSection
                title="Elegantní ochrana proti slunci i horku &#45; venkovní stínění pro vaše pohodlí po celý rok"
                backgroundImage="/assets/img/external_venetian_blind.jpg"
                placeholderColor="#5ca437"
                aria-label="Venkovní stínění"
            />
            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} aria-label="Navigace" />
                    <div className="space-y-6 md:col-span-12">
                        <h2
                            className="mb-12 font-bold text-3xl md:text-5xl text-center"
                            aria-label="Typy venkovního stínění"
                        >
                            Typy venkovního stínění
                        </h2>

                        {items.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                image1={item.image1}
                                image2={item.image2}
                                stats={item.stats}
                                subtitle2={item.subtitle2}
                                variant1={item.variant1}
                                variant2={item.variant2}
                                aria-label={item.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Contact aria-label="Kontakt" />
        </>
    );
}
