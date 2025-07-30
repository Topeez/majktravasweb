import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Sun, Sparkles, ShieldCheck, Expand } from "lucide-react";
import { FeaturesSection, Feature } from "@/components/features";
import Image from "next/image";
// import { Gallery, GalleryImage } from "@/components/galerie";

export default function Markyzy() {
    const breadcrumbItems = [
        { title: "Domů", href: "/", ariaLabel: "Domů" },
        {
            title: "Stínicí technika",
            href: "/stinici-technika",
            ariaLabel: "Stínicí technika",
        },
        {
            title: "Venkovní stínění",
            href: "/stinici-technika/venkovni-stineni",
            ariaLabel: "Venkovní stínění",
        },
        { title: "Markýzy", ariaLabel: "Markýzy" },
    ];

    const awningServiceFeatures: Feature[] = [
        {
            icon: (
                <Sun
                    size={40}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Ochrana před sluncem"
                />
            ),
            title: "Ochrana před sluncem",
            description:
                "Zabraňují přímému slunečnímu záření na terasách a balkonech",
        },
        {
            icon: (
                <Sparkles
                    size={40}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Estetický prvek"
                />
            ),
            title: "Estetický prvek",
            description: "Zkrášlují vzhled domu nebo balkonu",
        },
        {
            icon: (
                <ShieldCheck
                    size={40}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Dlouhá životnost"
                />
            ),
            title: "Dlouhá životnost",
            description: "Použité materiály zaručují odolnost a trvanlivost",
        },
        {
            icon: (
                <Expand
                    size={40}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Možnost velkých rozměrů"
                />
            ),
            title: "Možnost velkých rozměrů",
            description: "Zakryjí i velmi prostorné plochy",
        },
    ];

    // const galleryImages: GalleryImage[] = [
    //     {
    //         src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    //         alt: "Moderní markýza na terase",
    //         title: "Moderní markýza",
    //         description: "Elegantní řešení pro zastínění terasy",
    //     },
    //     // More images...
    // ];

    return (
        <>
            <HeroSection
                title="Stín, kde ho potřebujete &#45; markýzy pro vaši terasu i balkon"
                backgroundImage="/assets/img/markyza_2.jpg"
                placeholderColor="#5ca437"
                aria-label="Hero Section"
            />
            <section
                className="space-y-20 py-20 cs-container"
                aria-label="Main Content"
            >
                <Breadcrumb items={breadcrumbItems} aria-label="Breadcrumb" />

                <FeaturesSection
                    title="Markýzy a jejich výhody"
                    subtitle="Vyhánějí vás vedra a slunce z terasy? Chcete jednoduché řešení pro svůj balkon? Pak jsou pro vás markýzy ideálním řešením."
                    features={awningServiceFeatures}
                    aria-label="Features Section"
                />

                <div className="relative mx-auto rounded-2xl h-[600px] aspect-square overflow-hidden">
                    <div className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-black/50 to-transparent p-5 text-center">
                        <h5 className="font-bold text-background text-3xl">
                            Kazetová markýza
                        </h5>
                    </div>
                    <Image
                        src="/assets/img/markyza_kazetova.png"
                        width={1920}
                        height={1080}
                        alt="Kazetová markýza na terase"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* <Gallery
                    title="Galerie"
                    images={galleryImages}
                    columns={3}
                    showTitles={true}
                    enableLightbox={true}
                    aspectRatio="auto"
                    aria-label="Gallery Section"
                /> */}
            </section>
            <Contact aria-label="Contact Section" />
        </>
    );
}
