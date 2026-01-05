import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import Image from "next/image";
import {
    Zap,
    ShieldCheck,
    Wrench,
    Clock,
    Check,
    ArrowRight,
} from "lucide-react";
import { FeaturesSection, Feature } from "@/components/features";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const gateFeatures: Feature[] = [
    {
        icon: (
            <Zap
                size={30}
                className="mx-auto mb-4 text-foreground"
                aria-label="Rychlá montáž"
            />
        ),
        title: "Rychlá montáž",
        description: "Namontuji vrata během jediného dne.",
    },
    {
        icon: (
            <ShieldCheck
                size={30}
                className="mx-auto mb-4 text-foreground"
                aria-label="Bezpečnost"
            />
        ),
        title: "Bezpečnost",
        description: "Moderní systémy pro maximální zabezpečení.",
    },
    {
        icon: (
            <Wrench
                size={30}
                className="mx-auto mb-4 text-foreground"
                aria-label="Profesionální servis"
            />
        ),
        title: "Profesionální servis",
        description: "Zajišťuji záruční i pozáruční servis.",
    },
    {
        icon: (
            <Clock
                size={30}
                className="mx-auto mb-4 text-foreground"
                aria-label="Dlouhá životnost"
            />
        ),
        title: "Dlouhá životnost",
        description: "Kvalitní materiály",
    },
];

export default function GarazovaVrata() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Garážová vrata" },
    ];

    return (
        <>
            <HeroSection
                title="Bezpečnost a spolehlivost &#45; garážová vrata na míru vašemu domu"
                backgroundImage="/assets/img/garaz.jpeg"
                placeholderColor="#5ca437"
            />

            <section className="py-20 cs-container">
                <Breadcrumb items={breadcrumbItems} aria-label="Breadcrumb" />
                <div className="col-span-12 px-6 md:px-16 py-12">
                    <FeaturesSection
                        title="Vrata, která splní vaše očekávání"
                        features={gateFeatures}
                        aria-label="Garážová vrata"
                    />
                </div>
                <h2 className="mb-20 font-bold text-4xl text-center">
                    Typy garážových vrat
                </h2>
                <div className="items-center gap-12 grid md:grid-cols-2 mb-32 scroll-mt-24">
                    <div>
                        <h2 className="mb-6 font-bold text-foreground text-3xl md:text-4xl md:text-left text-center">
                            Sekční vrata
                        </h2>
                        <p className="mb-6 text-muted-foreground text-lg md:text-left text-center leading-relaxed">
                            Sekční vrata jsou ideální pro garáže s většími
                            rozměry. Jsou snadno montovatelná a nabízejí
                            výbornou izolaci.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Otevírání pod strop šetří místo",
                                "Výborná tepelná a zvuková izolace",
                                "Vhodná pro dálkové ovládání",
                                "Elegantní moderní vzhled",
                                "Zvýšená bezpečnost",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <div className="bg-foreground mt-1 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-primary/90">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            className="bg-foreground hover:bg-background mt-4 py-3 border border-foreground rounded-lg w-full md:w-1/2 font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                        >
                            <Link href="/pergoly-a-pristresky/#kontakt">
                                Mám zájem o sekční vrata{" "}
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="group relative shadow-2xl rounded-2xl h-[400px] md:h-[500px] overflow-hidden">
                        <Image
                            src="/assets/img/garaz.jpeg"
                            alt="Moderní bioklimatická pergola"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                    </div>
                </div>
                <div className="items-center gap-12 grid md:grid-cols-2 scroll-mt-24">
                    <div className="group relative shadow-2xl rounded-2xl h-[400px] md:h-[500px] overflow-hidden">
                        <div className="group relative shadow-2xl rounded-2xl h-[400px] md:h-[500px] overflow-hidden"></div>
                        <Image
                            src="/assets/img/dvoukridla_vrata.jpg"
                            alt="Moderní bioklimatická pergola"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 m-4 border-2 border-white/10 rounded-2xl pointer-events-none" />
                    </div>
                    <div>
                        <h2 className="mb-6 font-bold text-foreground text-3xl md:text-4xl md:text-left text-center">
                            Sekční vrata
                        </h2>
                        <p className="mb-6 text-muted-foreground text-lg md:text-left text-center leading-relaxed">
                            Sekční vrata jsou ideální pro garáže s většími
                            rozměry. Jsou snadno montovatelná a nabízejí
                            výbornou izolaci.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Jednoduchá konstrukce a snadná údržba",
                                "Nezávislá na výšce stropu - ideální pro klenby nebo nízké stropy",
                                "Možnost otevírat pouze jedno křídlo pro pěší průchod",
                                "Dlouhá životnost i při náročném provozu",
                                "Rustikální nebo tradiční vzhled - vhodné pro starší objekty",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <div className="bg-foreground mt-1 p-1 rounded-full">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-primary/90">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            asChild
                            className="bg-foreground hover:bg-background mt-4 py-3 border border-foreground rounded-lg w-full md:w-1/2 font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                        >
                            <Link href="/pergoly-a-pristresky/#kontakt">
                                Mám zájem o sekční vrata{" "}
                                <ArrowRight className="ml-2 size-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
                {/* Rolovaci a posuvna vrata */}
            </section>
            <Contact aria-label="Kontakt" />
        </>
    );
}
