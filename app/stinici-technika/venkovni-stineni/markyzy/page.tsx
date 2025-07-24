import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Zap, Wrench, ShieldCheck, Smile } from "lucide-react";
import { FeaturesSection, Feature } from "@/components/features";
// import { Gallery, GalleryImage } from "@/components/galerie";

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

    const awningServiceFeatures: Feature[] = [
        {
            icon: <Zap size={30} className="mx-auto mb-4 text-foreground" />,
            title: "Rychlá instalace",
            description: "Markýzy nainstaluji bez zbytečných průtahů.",
        },
        {
            icon: <Wrench size={30} className="mx-auto mb-4 text-foreground" />,
            title: "Odborná montáž",
            description:
                "Mám zkušenosti s různými typy markýz a způsobů uchycení.",
        },
        {
            icon: (
                <ShieldCheck
                    size={30}
                    className="mx-auto mb-4 text-foreground"
                />
            ),
            title: "Záruka a servis",
            description: "Nabízím záruční i pozáruční servis.",
        },
        {
            icon: <Smile size={30} className="mx-auto mb-4 text-foreground" />,
            title: "Individuální přístup",
            description: "Přizpůsobím se vašim požadavkům a prostoru.",
        },
    ];

    // const galleryImages: GalleryImage[] = [
    //     {
    //         src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    //         alt: "Moderní markýza na terase",
    //         title: "Moderní markýza",
    //         description: "Elegantní řešení pro zastínění terasy",
    //     },
    //     {
    //         src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    //         alt: "Barevná markýza",
    //         title: "Barevné provedení",
    //         description: "Široký výběr barev a vzorů",
    //     },
    //     {
    //         src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
    //         alt: "Velká markýza",
    //         title: "Pro větší prostory",
    //         description: "Ideální pro rozsáhlé terasy",
    //     },
    //     {
    //         src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop",
    //         alt: "Automatická markýza",
    //         title: "Automatické ovládání",
    //         description: "Moderní systém s dálkovým ovládáním",
    //     },
    //     {
    //         src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600&h=400&fit=crop",
    //         alt: "Stylová markýza",
    //         title: "Stylový design",
    //         description: "Dokonale ladí s architekturou",
    //     },
    //     {
    //         src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    //         alt: "Odolná markýza",
    //         title: "Odolné materiály",
    //         description: "Dlouhá životnost a snadná údržba",
    //     },
    // ];

    return (
        <>
            <HeroSection
                title="Stín, kde ho potřebujete &#45; markýzy pro vaši terasu i balkon"
                backgroundImage="/assets/img/markyza_2.jpg"
                placeholderColor="#5ca437"
            />
            <section className="space-y-20 py-20 cs-container">
                <Breadcrumb items={breadcrumbItems} />

                <FeaturesSection
                    title="Proč si zákazníci volí právě moje markýzy?"
                    features={awningServiceFeatures}
                />

                {/* <Gallery
                    title="Galerie"
                    images={galleryImages}
                    columns={3}
                    showTitles={true}
                    enableLightbox={true}
                    aspectRatio="auto"
                /> */}
            </section>
            <Contact />
        </>
    );
}
