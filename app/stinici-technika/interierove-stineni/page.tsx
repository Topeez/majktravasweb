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
                "Klasické i moderní řešení pro regulaci světla. Vhodné do každé místnosti díky různým materiálům a barevným variantám.",
            icon: <Blinds className="text-background" size={30} />,
        },
        {
            img: "/assets/img/latkove-rolety.jpg",
            title: "Látkové rolety",
            description:
                "Minimalistické a praktické stínění s možností propustných i zatemňovacích látek. Skvěle ladí s interiérem.",
            icon: <Layers className="text-background" size={30} />,
        },
        {
            img: "/assets/img/IMG_7820.jpeg",
            title: "Plisé",
            description:
                "Flexibilní stínění vhodné pro klasická i atypická okna. Široká škála látek a tvarů.",
            icon: <FoldHorizontal className="text-background" size={30} />,
        },
        {
            img: "/assets/img/",
            title: "Japonské stěny",
            description:
                "Ideální pro velké prosklené plochy i jako elegantní interiérový prvek. Designová variabilita.",
            icon: <PanelRight className="text-background" size={30} />,
        },
        {
            img: "/assets/img/textil_roleta_den_a_noc.jpg",
            title: "Rolety den/noc",
            description:
                "Účinné řešení pro úplné zatemnění místnosti. Vhodné do ložnic, domácích kin či hotelů.",
            icon: <Moon className="text-background" size={30} />,
        },
        {
            img: "/assets/img/vertikalni_zaluzie.jpg",
            title: "Vertikální žaluzie",
            description:
                "Klasické i moderní řešení pro regulaci světla. Vhodné do každé místnosti díky různým materiálům a barevným variantám.",
            icon: <Columns4 className="text-background" size={30} />,
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
            />
            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="flex flex-col justify-between items-center md:items-start col-span-12 pb-8 h-full">
                        <div className="md:text-left text-center">
                            <h2 className="mb-4 font-semibold text-3xl md:text-5xl leading-[1.2]">
                                Interiérové stínění spojuje funkčnost a estetiku
                            </h2>
                        </div>

                        <div>
                            <h3 className="my-4 font-bold text-foreground text-2xl md:text-4xl md:text-left text-center">
                                Výhody
                            </h3>
                            <ul className="text-muted-foreground text-lg md:text-xl list-disc list-inside">
                                {interiorShadingPros.map((pro, index) => (
                                    <li key={index}>{pro}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-12">
                        <h3 className="my-12 font-bold text-3xl md:text-4xl text-center">
                            Typy interiérového stínění
                        </h3>
                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {interiorShadingOptions.map((option, index) => (
                                <Card key={index} className="relative p-0">
                                    <div className="h-[240px] overflow-hidden">
                                        <Image
                                            width={1200}
                                            height={800}
                                            src={option.img}
                                            alt={option.title}
                                            draggable={false}
                                            className="shadow-md rounded-t-xl w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardHeader className="p-4">
                                        <CardTitle className="mb-2 text-xl md:text-2xl">
                                            {option.title}
                                        </CardTitle>
                                        <CardDescription className="text-md md:text-lg">
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
            <Contact />
        </>
    );
}
