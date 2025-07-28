import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { Zap, Wrench, ShieldCheck, Smile } from "lucide-react";
import { FeaturesSection, Feature } from "@/components/features";
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
                <Zap
                    size={30}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Rychlá instalace"
                />
            ),
            title: "Rychlá instalace",
            description: "Markýzy nainstaluji bez zbytečných průtahů.",
        },
        {
            icon: (
                <Wrench
                    size={30}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Odborná montáž"
                />
            ),
            title: "Odborná montáž",
            description:
                "Mám zkušenosti s různými typy markýz a způsobů uchycení.",
        },
        {
            icon: (
                <ShieldCheck
                    size={30}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Záruka a servis"
                />
            ),
            title: "Záruka a servis",
            description: "Nabízím záruční i pozáruční servis.",
        },
        {
            icon: (
                <Smile
                    size={30}
                    className="mx-auto mb-4 text-foreground"
                    aria-label="Individuální přístup"
                />
            ),
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
                    title="Profesionální montáž a servis markýz, jak má být"
                    features={awningServiceFeatures}
                    aria-label="Features Section"
                />

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
