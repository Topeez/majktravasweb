import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function InterieroveStineni() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Stínicí technika", href: "/stinici-technika" },
        { title: "Interiérové stínění" },
    ];
    const interiorShadingOptions = [
        {
            title: "Žaluzie",
            description:
                "Klasické i moderní řešení pro regulaci světla. Vhodné do každé místnosti díky různým materiálům a barevným variantám.",
            icon: "window-blinds", // můžeš použít např. z Lucide nebo Heroicons
        },
        {
            title: "Látkové rolety",
            description:
                "Minimalistické a praktické stínění s možností propustných i zatemňovacích látek. Skvěle ladí s interiérem.",
            icon: "layers",
        },
        {
            title: "Plisé",
            description:
                "Flexibilní stínění vhodné pro klasická i atypická okna. Široká škála látek a tvarů.",
            icon: "fold-horizontal",
        },
        {
            title: "Japonské stěny",
            description:
                "Ideální pro velké prosklené plochy i jako elegantní interiérový prvek. Designová variabilita.",
            icon: "panel-right",
        },
        {
            title: "Zatemňovací systémy",
            description:
                "Účinné řešení pro úplné zatemnění místnosti. Vhodné do ložnic, domácích kin či hotelů.",
            icon: "moon",
        },
    ];

    const interiorShadingPros = [
        "Chrání před sluncem",
        "Zvyšuje soukromí a bezpečnost",
        "Designový prvek interiéru",
        "Široký výběr látek a barev",
        "Možnost elektrického ovládání",
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

                    <div className="flex flex-col justify-between items-start col-span-6 pb-8 h-full">
                        <div className="md:text-left text-center">
                            <h2 className="mb-4 font-semibold text-3xl md:text-5xl">
                                Moderní interiérové stínění
                            </h2>
                            <p className="text-md text-muted-foreground md:text-lg">
                                Interiérové stínění spojuje funkčnost a
                                estetiku. Nabízím žaluzie, látkové rolety, plisé
                                a další varianty, které se přizpůsobí každému
                                prostoru.
                            </p>
                        </div>

                        <div>
                            <h3 className="my-4 font-bold text-foreground text-2xl md:text-4xl">
                                Výhody
                            </h3>
                            <ul className="text-md text-muted-foreground md:text-lg list-disc list-inside">
                                {interiorShadingPros.map((pro, index) => (
                                    <li key={index}>{pro}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-6 h-[500px]">
                        <Image
                            width={1200}
                            height={800}
                            src="/assets/img/IMG_7622.jpeg"
                            alt="Interiérové stínění"
                            className="shadow-md rounded-xl w-full h-full object-cover"
                        />
                    </div>

                    <div className="col-span-12">
                        <h3 className="my-12 font-bold text-2xl md:text-4xl text-center">
                            Typy interiérového stínění
                        </h3>
                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {interiorShadingOptions.map((option, index) => (
                                <Card key={index}>
                                    <CardContent>
                                        <CardTitle className="mb-2 text-xl md:text-2xl">
                                            {option.title}
                                        </CardTitle>
                                        <CardDescription className="text-md md:text-lg">
                                            {option.description}
                                        </CardDescription>
                                    </CardContent>
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
