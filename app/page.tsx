
import { Hero } from "@/components/hero";
import Services from "@/components/services";

import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta-section";
import { Contact } from "@/components/contact";
import { SpacerBig } from "@/components/spacer-big";

export default function Home() {
    return (
        <>
            <Hero />
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

