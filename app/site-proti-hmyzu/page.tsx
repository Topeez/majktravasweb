import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { nets } from "@/data/nets";
import { BentoGrid } from "@/components/bento-grid";

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

            <section className="bg-background py-16 md:py-24">
                <div className="mx-auto px-4 cs-container">
                    <Breadcrumb
                        items={breadcrumbItems}
                        aria-label="breadcrumb navigation"
                        className="mb-12"
                    />

                    <div className="mb-12 md:text-left text-center">
                        <h2 className="mb-4 font-bold text-3xl md:text-4xl">
                            Typy{" "}
                            <span className="text-foreground">
                                sítí proti hmyzu
                            </span>
                        </h2>
                        <p className="max-w-2xl text-muted-foreground text-lg">
                            Vyberte si to pravé řešení pro vaše okna a dveře.
                            Nabízím širokou škálu typů od pevných až po
                            plisované sítě.
                        </p>
                    </div>

                    <BentoGrid items={nets} />
                </div>
            </section>

            <Contact />
        </>
    );
}
