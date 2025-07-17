import { HeroSection } from "@/components/hero";
import Services from "@/components/services";

import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta-section";
import { Contact } from "@/components/contact";
import { SpacerBig } from "@/components/spacer-big";

export default function Home() {
    return (
        <>
            <HeroSection
                title="Profesionální montáže stínící techniky, garážových vrat a markýz"
                subtitle="Kvalita pro Váš domov dle Vašeho gusta."
                backgroundImage="/assets/img/zaluzie.jpg"
                placeholderColor="#5ca437"
                primaryCta={{
                    label: "Moje služby",
                    href: "#sluzby",
                }}
                secondaryCta={{
                    label: "Domluvte si nezávazné zaměření",
                    href: "/#kontakt",
                    icon: true,
                }}
            />
            <SpacerBig />
            <Services />
            <SpacerBig />
            <Benefits />
            <Testimonials />
            <CTA />
            <Contact />
        </>
    );
}
