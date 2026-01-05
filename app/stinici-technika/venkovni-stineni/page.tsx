"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Card } from "@/components/venkovni-stineni/cards";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function VenkovniStineni() {
    // Definice tooltipů pro čistší kód
    const LamellaTypes = () => (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            <span className="mr-1 w-full text-muted-foreground">
                Na výběr máte několik typů <strong>lamel:</strong>
            </span>

            {/* 60/80 */}
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <span className="bg-primary/10 hover:bg-primary px-2 py-0.5 rounded-md font-bold text-primary hover:text-white text-sm transition-colors cursor-help">
                            C60/80
                        </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground max-w-xs text-background">
                        <p className="text-md">
                            <strong>Lamela 60/80 (tvar C):</strong> Klasický
                            zaoblený tvar. Umožňuje naklápění na obě strany.
                            Nemá těsnící gumu, takže neudělá úplnou tmu.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* 70/90 */}
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <span className="bg-primary/10 hover:bg-primary px-2 py-0.5 rounded-md font-bold text-primary hover:text-white text-sm transition-colors cursor-help">
                            S70/90
                        </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground max-w-xs text-background">
                        <p className="text-md">
                            <strong>Lamela 70/90 (tvar S):</strong> Designová
                            &quot;vlnka&quot;. Kombinuje pevnost
                            &quot;Zetka&quot; s oblým elegantním vzhledem. Velmi
                            odolná a dobře stíní.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* T80 */}
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <span className="bg-primary/10 hover:bg-primary px-2 py-0.5 rounded-md font-bold text-primary hover:text-white text-sm transition-colors cursor-help">
                            T80
                        </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground max-w-xs text-background">
                        <p className="text-md">
                            <strong>Lamela T80 (tvar T):</strong> Přísně
                            hranatý, technický design. Ideální pro moderní
                            architekturu. Její hlavní výhodou je extrémně nízký
                            nábal (zabere málo místa, když je vytažená).
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Z90 */}
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                        <span className="bg-primary/10 hover:bg-primary px-2 py-0.5 rounded-md font-bold text-primary hover:text-white text-sm transition-colors cursor-help">
                            Z70/90
                        </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground max-w-xs text-background">
                        <p className="text-md">
                            <strong>Lamela 70/90 (tvar Z):</strong> Špičková
                            varianta. Lamely do sebe zapadnou jako puzzle a díky
                            gumě vytvoří téměř dokonalou tmu a ticho ve větru.
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );

    const items = [
        {
            title: "Předokenní rolety",
            subtitle:
                "Předokenní rolety zajišťují výbornou ochranu před horkem i hlukem díky izolační výplni. Spolehlivě odolávají nepřízni počasí a přidávají vašemu domovu na bezpečí i komfortu.",
            image1: "/assets/img/IMG_7776.jpeg",
            image2: "/assets/img/podomitka_rolety_venek.jpg",
            stats: {
                warmSecurity: { label: "Ochrana proti teplu", value: 5 },
                blindness: { label: "Zatemnění", value: 5 },
                isolation: { label: "Tepelná izolace", value: 5 },
                security: { label: "Bezpečnostní ochrana", value: 5 },
                deafness: { label: "Odhlučnění", value: 5 },
            },
            subtitle2: "2 varianty provedení",
            variant1: <strong>&bdquo;Přiznané&rdquo;</strong>,
            variant2: <strong>&bdquo;Podomítkové&rdquo;</strong>,
        },
        {
            title: "Venkovní žaluzie",
            subtitle:
                "Venkovní žaluzie vám dávají plnou kontrolu nad světlem i teplotou v interiéru. Pomáhají udržet příjemné klima a zároveň šetří energii i náklady.",
            // TADY PŘEDÁVÁME KOMPONENTU S TOOLTIPY
            descriptionExtra: <LamellaTypes />,
            image1: "/assets/img/priznana_venkovni_zaluzie.jpeg",
            image2: "/assets/img/zaluzie_venek_podomitka.png",
            stats: {
                warmSecurity: { label: "Ochrana proti teplu", value: 4 },
                blindness: { label: "Zatemnění", value: 4 },
                isolation: { label: "Tepelná izolace", value: 3 },
                security: { label: "Bezpečnostní ochrana", value: 2 },
                deafness: { label: "Odhlučnění", value: 2 },
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
                warmSecurity: { label: "Ochrana proti teplu", value: 5 },
                blindness: { label: "Zatemnění", value: 3 },
                isolation: { label: "Tepelná izolace", value: 2 },
                security: { label: "Bezpečnostní ochrana", value: 1 },
                deafness: { label: "Odhlučnění", value: 1 },
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
                title="Elegantní ochrana proti slunci i horku – venkovní stínění pro vaše pohodlí po celý rok"
                backgroundImage="/assets/img/external_venetian_blind.jpg"
                placeholderColor="#5ca437"
                aria-label="Venkovní stínění"
            />
            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} aria-label="Navigace" />
                    <div className="space-y-12 md:col-span-12">
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
                                descriptionExtra={item.descriptionExtra}
                                image1={item.image1}
                                image2={item.image2}
                                stats={item.stats}
                                subtitle2={item.subtitle2}
                                variant1={item.variant1}
                                variant2={item.variant2}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Contact aria-label="Kontakt" />
        </>
    );
}
