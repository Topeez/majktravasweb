import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";

export default function SiteProtiHmyzu() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Sítě proti hmyzu" },
    ];

    return (
        <>
            <HeroSection
                title="Větrejte bez obav &#45; sítě proti hmyzu vás ochrání ve dne i v noci"
                backgroundImage="/assets/img/hmyz_sit.jpg"
            />
            <section className="py-20 cs-container">
                <Breadcrumb items={breadcrumbItems} />
            </section>
            <Contact />
        </>
    );
}
