import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { FeaturesSection, Feature } from "@/components/features";
import { ZigZagLayout, ZigZagItem } from "@/components/zig-zag-layout";
import { Zap, ShieldCheck, Wrench, Clock } from "lucide-react";

const gateFeatures: Feature[] = [
    {
        icon: <Zap size={30} className="mx-auto mb-4 text-foreground" />,
        title: "Rychlá montáž",
        description: "Namontuji vrata během jediného dne.",
    },
    {
        icon: (
            <ShieldCheck size={30} className="mx-auto mb-4 text-foreground" />
        ),
        title: "Bezpečnost",
        description: "Moderní systémy pro maximální zabezpečení.",
    },
    {
        icon: <Wrench size={30} className="mx-auto mb-4 text-foreground" />,
        title: "Profesionální servis",
        description: "Zajišťuji záruční i pozáruční servis.",
    },
    {
        icon: <Clock size={30} className="mx-auto mb-4 text-foreground" />,
        title: "Dlouhá životnost",
        description: "Kvalitní materiály",
    },
];

// Data pro ZigZag sekci
const gateTypes: ZigZagItem[] = [
    {
        title: "Sekční vrata",
        description:
            "Sekční vrata jsou ideální pro garáže s většími rozměry. Jsou snadno montovatelná a nabízejí výbornou izolaci.",
        imageSrc: "/assets/img/garaz.jpeg",
        features: [
            "Otevírání pod strop šetří místo",
            "Výborná tepelná a zvuková izolace",
            "Vhodná pro dálkové ovládání",
            "Elegantní moderní vzhled",
            "Zvýšená bezpečnost",
        ],
        buttonLink: "#kontakt",
    },
    {
        title: "Dvoukřídlá vrata",
        description:
            "Klasické řešení v moderním kabátě. Vhodné tam, kde není možné instalovat sekční vrata.",
        imageSrc: "/assets/img/dvoukridla_vrata.jpg",
        features: [
            "Jednoduchá konstrukce a snadná údržba",
            "Nezávislá na výšce stropu - ideální pro klenby nebo nízké stropy",
            "Možnost otevírat pouze jedno křídlo pro pěší průchod",
            "Dlouhá životnost i při náročném provozu",
            "Rustikální nebo tradiční vzhled - vhodné pro starší objekty",
        ],
        buttonLink: "#kontakt",
    },
    {
        title: "Rolovací vrata",
        description:
            "Úsporné řešení pro garáže s minimálním prostorem. Vrata se navíjejí do boxu nad stavebním otvorem, podobně jako roleta.",
        imageSrc: "/assets/img/rolovaci-vrata.jpeg",
        features: [
            "Maximální úspora místa pod stropem (lze využít pro úložné prostory)",
            "Montáž možná před, do i za otvor",
            "Snadné ovládání",
            "Hliníkové lamely s dlouhou životností a odolností proti korozi",
            "Integrovaná ochrana proti zvednutí",
        ],
        buttonLink: "#kontakt",
    },
];

export default function GarazovaVrata() {
    return (
        <>
            <HeroSection
                title="Bezpečnost a spolehlivost – garážová vrata na míru vašemu domu"
                backgroundImage="/assets/img/garaz.jpeg"
                placeholderColor="#5ca437"
            />

            <section className="py-16 md:py-24 cs-container">
                <Breadcrumb
                    items={[
                        { title: "Domů", href: "/" },
                        { title: "Garážová vrata" },
                    ]}
                    aria-label="Breadcrumb"
                />

                <div className="col-span-12 px-6 md:px-16 py-12">
                    <FeaturesSection
                        title={
                            <h2
                                className="font-bold text-3xl md:text-5xl text-center"
                                aria-label="Section Title"
                            >
                                <span className="text-foreground">Vrata</span>,
                                která{" "}
                                <span className="text-foreground">splní</span>{" "}
                                vaše{" "}
                                <span className="text-foreground">
                                    očekávání
                                </span>
                            </h2>
                        }
                        features={gateFeatures}
                    />
                </div>

                <h2 className="mb-20 font-bold text-4xl text-center">
                    Typy{" "}
                    <span className="text-foreground">garážových vrat</span>
                </h2>

                {/* Zde je tvoje nová komponenta */}
                <ZigZagLayout items={gateTypes} />
            </section>
            <Contact aria-label="Kontakt" />
        </>
    );
}
