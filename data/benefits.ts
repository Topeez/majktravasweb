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
            description: "Každé řešení navrhuji na míru vašim potřebám a stylu domu. Vždy najdeme optimální řešení pro vaši situaci."
        },
        {
            icon: React.createElement(Award, { className: "text-foreground", size: 24} ),
            title: "Ověřená kvalita",
            description: "Pracuji výhradně s prověřenými značkami a komponenty, které zaručují dlouhou životnost a spolehlivost."
        },
        {
            icon: React.createElement(Wrench, { className: "text-foreground", size: 24} ),
            title: "Profesionální servis",
            description: "Nabízím odbornou montáž a servis, abyste se mohli spolehnout na dokonalou funkčnost všech produktů."
        },
        {
            icon: React.createElement(Zap, { className: "text-foreground", size: 24} ),
            title: "Rychlé termíny",
            description: "Reaguji pružně na nové projekty i opravy. Většinou jsem schopen zajistit montáž do 14 dnů od objednání."
        }
]