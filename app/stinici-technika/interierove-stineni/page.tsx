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
import {
    Blinds,
    PanelRight,
    Layers,
    FoldHorizontal,
    Moon,
    Columns4,
} from "lucide-react";

export default function InterieroveStineni() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Stínicí technika", href: "/stinici-technika" },
        { title: "Interiérové stínění" },
    ];
    const interiorShadingOptions = [
        {
            img: "/assets/img/IMG_7601.jpeg",
            title: "Žaluzie",
            description:
                "Praktické a nadčasové řešení pro regulaci světla. Hodí se do bytů, kanceláří i domů.",
            icon: (
                <Blinds
                    className="text-background"
                    size={30}
                    aria-label="Žaluzie"
                />
            ),
        },
        {
            img: "/assets/img/zaluzie_stresni.png",
            title: "Žaluzie - střešní",
            description:
                "Ideální pro střešní okna – snadno ovladatelné, efektivně stíní a ladí s interiérem.",
            icon: (
                <Blinds
                    className="text-background"
                    size={30}
                    aria-label="Žaluzie"
                />
            ),
        },
        {
            img: "/assets/img/latkove-rolety.jpg",
            title: "Látkové rolety",
            description:
                "Elegantní stínění v různých barvách i průhlednosti. Vhodné do ložnice, obýváku i kuchyně.",
            icon: (
                <Layers
                    className="text-background"
                    size={30}
                    aria-label="Látkové rolety"
                />
            ),
        },
        {
            img: "/assets/img/latkove_stresni.png",
            title: "Látkové rolety - střešní",
            description:
                "Jednoduché řešení pro střešní okna – dobře drží, neplandají a skvěle vypadají.",
            icon: (
                <Layers
                    className="text-background"
                    size={30}
                    aria-label="Látkové rolety"
                />
            ),
        },
        {
            img: "/assets/img/IMG_7820.jpeg",
            title: "Plisé",
            description:
                "Designové skládací žaluzie, které se přizpůsobí každému oknu i prostoru.",
            icon: (
                <FoldHorizontal
                    className="text-background"
                    size={30}
                    aria-label="Plisé"
                />
            ),
        },
        {
            img: "/assets/img/plise_stresni.png",
            title: "Plisé - střešní",
            description:
                "Praktické a stylové plisé pro střešní okna. Výborně stíní a dobře drží v rámu.",
            icon: (
                <FoldHorizontal
                    className="text-background"
                    size={30}
                    aria-label="Plisé"
                />
            ),
        },

        {
            img: "/assets/img/japonska_stena.jpg",
            title: "Japonské stěny",
            description:
                "Ideální pro velké prosklené plochy i jako elegantní interiérový prvek. Designová variabilita.",
            icon: (
                <PanelRight
                    className="text-background"
                    size={30}
                    aria-label="Japonské stěny"
                />
            ),
        },
        {
            img: "/assets/img/textil_roleta_den_a_noc.jpg",
            title: "Rolety den/noc",
            description:
                "Účinné řešení pro úplné zatemnění místnosti. Vhodné do ložnic, domácích kin či hotelů.",
            icon: (
                <Moon
                    className="text-background"
                    size={30}
                    aria-label="Rolety den/noc"
                />
            ),
        },
        {
            img: "/assets/img/vertikalni_zaluzie.jpg",
            title: "Vertikální žaluzie",
            description:
                "Klasické i moderní řešení pro regulaci světla. Vhodné do každé místnosti díky různým materiálům a barevným variantám.",
            icon: (
                <Columns4
                    className="text-background"
                    size={30}
                    aria-label="Vertikální žaluzie"
                />
            ),
        },
    ];

    const interiorShadingPros = [
        "Chrání před sluncem",
        "Zvyšuje soukromí",
        "Designový prvek interiéru",
        "Široký výběr látek a barev",
    ];

    return (
        <>
            <HeroSection
                title="Styl a soukromí &#45; interiérové stínění, které ladí s vaším domovem"
                backgroundImage="/assets/img/IMG_7601.jpeg"
                placeholderColor="#5ca437"
                aria-label="Interiérové stínění"
            />
            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} aria-label="Navigace" />

                    <div className="flex flex-col justify-between items-center md:items-start col-span-12 pb-8 h-full">
                        <div className="md:text-left text-center">
                            <h2
                                className="mb-4 font-semibold text-3xl md:text-5xl leading-[1.2]"
                                aria-label="Titulek"
                            >
                                Interiérové stínění spojuje funkčnost a estetiku
                            </h2>
                        </div>

                        <div>
                            <h3
                                className="my-4 font-bold text-foreground text-2xl md:text-4xl md:text-left text-center"
                                aria-label="Titulek"
                            >
                                Výhody
                            </h3>
                            <ul
                                className="text-muted-foreground text-lg md:text-xl list-disc list-inside"
                                aria-label="Výhody"
                            >
                                {interiorShadingPros.map((pro, index) => (
                                    <li key={index}>{pro}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-12">
                        <h3
                            className="my-12 font-bold text-3xl md:text-5xl text-center"
                            aria-label="Titulek"
                        >
                            Typy interiérového stínění
                        </h3>
                        <div
                            className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            aria-label="Typy stínění"
                        >
                            {interiorShadingOptions.map((option, index) => (
                                <Card
                                    key={index}
                                    className="relative p-0"
                                    aria-label={option.title}
                                >
                                    <div className="h-[240px] overflow-hidden">
                                        <Image
                                            width={400}
                                            height={400}
                                            src={option.img}
                                            alt={option.title}
                                            draggable={false}
                                            className="shadow-md rounded-t-xl w-full h-full object-cover"
                                            aria-label={option.title}
                                        />
                                    </div>
                                    <CardHeader className="p-4">
                                        <CardTitle
                                            className="mb-2 text-xl md:text-2xl"
                                            aria-label={option.title}
                                        >
                                            {option.title}
                                        </CardTitle>
                                        <CardDescription
                                            className="text-md md:text-lg"
                                            aria-label={option.description}
                                        >
                                            {option.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <div className="top-3 right-3 absolute bg-foreground p-2 rounded-full">
                                        {option.icon}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Contact aria-label="Kontaktní formulář" />
        </>
    );
}
