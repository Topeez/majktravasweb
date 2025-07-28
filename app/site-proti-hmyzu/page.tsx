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
                aria-label="hero section"
            />
            <section className="py-20 cs-container" aria-label="main content">
                <Breadcrumb
                    items={breadcrumbItems}
                    aria-label="breadcrumb navigation"
                />

                <h2
                    className="my-12 font-semibold text-3xl md:text-5xl text-center leading-[1.2]"
                    aria-label="section title"
                >
                    Typy sítí proti hmyzu
                </h2>

                <div
                    className="flex flex-wrap justify-center gap-8"
                    aria-label="card container"
                >
                    {nets.map((data, index) => (
                        <Card
                            key={index}
                            link={data.link}
                            className="flex-1 min-w-[300px] max-w-[400px]"
                            title={data.title}
                            image={data.image}
                            aria-label={data.title}
                        />
                    ))}
                </div>
            </section>
            <Contact aria-label="contact section" />
        </>
    );
}
