import React from "react";
import { PencilRuler, Award, Wrench, Zap } from "lucide-react";

export interface BenefitItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const benefits: BenefitItem[] = [
    {
            icon: React.createElement(PencilRuler, {className: "text-foreground", size: 24} ),
            title: "Individuální přístup",
            description: "Každé řešení navrhuji na míru vašim potřebám a stylu. Spolu najdeme optimální řešení pro Váš domov."
        },
        {
            icon: React.createElement(Award, { className: "text-foreground", size: 24} ),
            title: "Ověřená kvalita",
            description: "Pracuji výhradně s prověřenými značkami a komponenty, které zaručují životnost a spolehlivost."
        },
        {
            icon: React.createElement(Wrench, { className: "text-foreground", size: 24} ),
            title: "Profesionální servis",
            description: "Profesionální montáž i následný servis – vše pro vaši maximální spokojenost a komfort."
        },
        {
            icon: React.createElement(Zap, { className: "text-foreground", size: 24} ),
            title: "Rychlé termíny",
            description: "Reaguji pružně na nové zakázky i opravy. Jsem schopen zajistit montáž/servis do 4 týdnů od objednání."
        }
]