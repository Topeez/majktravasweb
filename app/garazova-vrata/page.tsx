import { Breadcrumb } from "@/components/breadcrumb";
import { Contact } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import Image from "next/image";
import { Zap, ShieldCheck, Wrench, Clock } from "lucide-react";

const types = [
    {
        title: "Sekční vrata",
        img: "/assets/img/garaz.jpeg",
        desc: "Sekční vrata jsou vhodná pro menší garáže a mohou být otevírána nahoru nebo do stran. Jsou lehčí a méně náročná na údržbu.",
    },
    {
        title: "Křídlová vrata",
        img: "/assets/img/kridlova.png",
        desc: "Křídlová vrata jsou vhodná pro větší garáže a mohou být otevírána nahoru nebo do stran. Jsou lehčí a méně náročná na údržbu.",
    },
];

const features = [
    {
        icon: <Zap size={30} className="mx-auto mb-4 text-foreground" />,
        title: "Rychlá montáž",
        description: "Namontujeme vrata během jediného dne.",
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
        description: "Zajišťujeme záruční i pozáruční servis.",
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
                            {types.map(({ title, img, desc }) => (
                                <div
                                    key={title}
                                    className="bg-background shadow p-6 rounded-xl text-center"
                                >
                                    <Image
                                        width={1200}
                                        height={800}
                                        src={img}
                                        alt={title}
                                        className="mb-4 rounded-lg h-64 object-cover"
                                    />
                                    <h3 className="mb-2 font-semibold text-xl">
                                        {title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-12 px-6 md:px-16 py-12">
                        <h2 className="mb-8 font-bold text-4xl text-center">
                            Proč právě vrata ode mě?
                        </h2>
                        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4 text-center">
                            {features.map((feature, index) => (
                                <div key={index}>
                                    {feature.icon}
                                    <h4 className="mb-2 font-semibold text-2xl">
                                        {feature.title}
                                    </h4>
                                    <p className="text-muted-foreground text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
}
