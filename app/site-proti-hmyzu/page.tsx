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

                <h2 className="my-12 font-semibold text-3xl md:text-5xl text-center leading-[1.2]">
                    Typy sítí proti hmyzu
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {nets.map((data, index) => (
                        <Card
                            key={index}
                            link={data.link}
                            className="flex-1 min-w-[400px] max-w-[400px]"
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
