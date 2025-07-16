import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";

export default function GarazovaVrata() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Garážové vrata" },
    ];

    return (
        <>
            <HeroSection
                title="Bezpečnost a spolehlivost – garážová vrata na míru vašemu domu"
                subtitle="Komfortní ovládání, tichý chod a perfektní vzhled."
                backgroundImage="/assets/img/garaz.jpeg"
            />

            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </section>
            <Contact />
        </>
    );
}
