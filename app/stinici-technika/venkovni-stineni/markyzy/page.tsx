import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Sun, Wind, Palette, Umbrella } from "lucide-react";

export default function Markyzy() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Stínicí technika", href: "/stinici-technika" },
        {
            title: "Venkovní stínění",
            href: "/stinici-technika/venkovni-stineni",
        },
        { title: "Markýzy" },
    ];

    const awningFeatures = [
        {
            icon: <Sun size={30} className="mx-auto mb-2 text-foreground" />,
            title: "Ochrana proti slunci",
            description: "Zastíní terasu i okna a sníží teplotu v interiéru.",
        },
        {
            icon: <Wind size={30} className="mx-auto mb-2 text-foreground" />,
            title: "Odolnost proti větru",
            description: "Robustní konstrukce odolá nepříznivým podmínkám.",
        },
        {
            icon: (
                <Palette size={30} className="mx-auto mb-2 text-foreground" />
            ),
            title: "Široký výběr designu",
            description: "Různé barvy a látky ladící s vaším domem.",
        },
        {
            icon: (
                <Umbrella size={30} className="mx-auto mb-2 text-foreground" />
            ),
            title: "Ochrana před deštěm",
            description: "Voděodolné materiály chrání před lehkým deštěm.",
        },
    ];

    return (
        <>
            <HeroSection
                title="Stín, kde ho potřebujete &#45; markýzy pro vaši terasu i balkon"
                backgroundImage="/assets/img/markyza_2.jpg"
                placeholderColor="#5ca437"
            />
            <section className="py-20 cs-container">
                <Breadcrumb items={breadcrumbItems} />

                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <div className="col-span-12 px-6 md:px-16 py-12">
                        <h2 className="mb-8 font-bold text-4xl text-center">
                            Proč si vybrat markýzy ode mě?
                        </h2>
                        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4 text-center">
                            {awningFeatures.map((feature, index) => (
                                <div key={index}>
                                    {feature.icon}
                                    <h4 className="mb-2 font-semibold text-2xl">
                                        {feature.title}
                                    </h4>
                                    <p className="text-muted-foreground text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
