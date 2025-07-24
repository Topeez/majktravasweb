import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import Image from "next/image";
import { Zap, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FeaturesSection, Feature } from "@/components/features";

const types = [
    {
        title: "Sekční vrata",
        img: "/assets/img/garaz.jpeg",
        desc: "Moderní řešení pro efektivní využití prostoru.",
        benefits: [
            <>
                <strong>Otevírání pod strop &#45;</strong> šetří místo uvnitř i
                před garáží
            </>,
            <>
                <strong>Výborná tepelná a zvuková izolace</strong>
            </>,
            <>
                <strong>Vhodná pro dálkové ovládání</strong> a automatizaci
            </>,
            <>
                <strong>Tichý a plynulý chod</strong>
            </>,
            <>
                <strong>Elegantní moderní vzhled</strong> a různé povrchové
                úpravy
            </>,
            <>
                <strong>Zvýšená bezpečnost díky</strong> pokročilým{" "}
                <strong> zámkovým</strong> systémům
            </>,
        ],
    },
    {
        title: "Dvoukřídlá vrata",
        img: "/assets/img/dvoukridla_vrata.jpg",
        desc: "Tradiční styl spojený s jednoduchostí a spolehlivostí.",
        benefits: [
            <>
                <strong>Jednoduchá konstrukce a snadná údržba</strong>
            </>,
            <>
                <strong>Nezávislá na výšce stropu &#45; </strong>ideální pro
                klenby nebo nízké stropy
            </>,
            <>
                <strong>
                    Možnost otevírat pouze jedno křídlo pro pěší průchod
                </strong>
            </>,
            <>
                <strong>Vhodná pro ruční otevírání &#45; </strong>ideální bez
                elektriky
            </>,
            <>
                <strong>Dlouhá životnost </strong>i při náročném provozu
            </>,
            <>
                <strong>Rustikální nebo tradiční vzhled &#45; </strong>vhodné
                pro starší objekty
            </>,
        ],
    },
];

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
        description: "Kvalitní materiály a precizní zpracování.",
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

            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="col-span-12 py-12">
                        <h2 className="mb-8 font-bold text-4xl text-center">
                            Typy garážových vrat
                        </h2>
                        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
                            {types.map((type, index) => (
                                <div
                                    key={index}
                                    className="space-y-4 bg-background shadow p-6 rounded-xl"
                                >
                                    <Image
                                        width={1200}
                                        height={800}
                                        src={type.img}
                                        alt={type.title}
                                        className="rounded-lg h-64 object-cover"
                                    />
                                    <h3 className="font-semibold text-2xl text-center">
                                        {type.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg">
                                        {type.desc}
                                    </p>

                                    <h4 className="my-4 font-bold text-foreground text-xl md:text-2xl">
                                        Výhody
                                    </h4>

                                    <ul className="mt-4 text-muted-foreground text-lg text-left list-disc list-inside">
                                        {type.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-12 px-6 md:px-16 py-12">
                        <FeaturesSection
                            title="Vrata, která splní vaše očekávání &#45; a ještě víc!"
                            features={gateFeatures}
                        />
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
