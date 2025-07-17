import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";

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

    return (
        <>
            <HeroSection
                title="Stín, kde ho potřebujete &#45; markýzy pro vaši terasu i balkon"
                backgroundImage="/assets/img/markyza_2.jpg"
            />
            <section className="py-20 cs-container">
                <Breadcrumb items={breadcrumbItems} />
            </section>
            <Contact />
        </>
    );
}
