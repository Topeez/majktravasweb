import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Card } from "@/components/site-proti-hmyzu/card";
import { nets } from "@/data/nets";

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
                placeholderColor="#5ca437"
            />
            <section className="py-20 cs-container">
                <Breadcrumb items={breadcrumbItems} />

                <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
                    {nets.map((data, index) => (
                        <Card
                            key={index}
                            link={data.link}
                            className="col-span-4"
                            title={data.title}
                            image={data.image}
                        />
                    ))}
                </div>
            </section>
            <Contact />
        </>
    );
}
