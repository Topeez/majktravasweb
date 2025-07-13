import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { HeroSection } from "@/components/hero";

export default function StiniciTechnika() {
    const list = [
        {
            id: 1,
            text: "Efektivní ochrana před sluncem a přehříváním",
        },
        {
            id: 2,
            text: "Zajištění soukromí a bezpečnosti",
        },
        {
            id: 3,
            text: "Energetická úspora díky tepelné izolaci",
        },
        {
            id: 4,
            text: "Moderní designové prvky exteriéru i interiéru",
        },
    ];

    return (
        <>
            <HeroSection
                title="Komfort, světlo a soukromí pod kontrolou – stínící technika pro moderní domov"
                subtitle="Od interiérových rolet po venkovní žaluzie – vyberte si řešení na míru."
                backgroundImage="/assets/img/zaluzie2.jpg"
            />
            <section
                id="stinici-technika"
                className="bg-white py-20 text-black"
            >
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb
                        items={[
                            { title: "Domů", href: "/" },
                            { title: "Stínicí technika" },
                        ]}
                    />

                    <div className="space-y-6 md:col-span-12">
                        <h2 className="font-bold text-4xl md:text-5xl text-center">
                            Co je stínicí technika?
                        </h2>
                        <p className="text-xl leading-relaxed">
                            Stínicí technika zahrnuje širokou škálu produktů
                            navržených pro regulaci světla, teploty a soukromí v
                            interiéru i exteriéru. Od žaluzií, rolet, markýz až
                            po pergoly - vše přizpůsobeno vašemu stylu a
                            potřebám.
                        </p>

                        {/* Timeline-style benefits section */}
                        <div className="relative py-12">
                            {/* Vertical line */}
                            <div className="hidden md:block top-0 left-1/2 absolute bg-gray-200 w-0.5 h-full -translate-x-1/2 transform"></div>

                            {/* Mobile line */}
                            <div className="md:hidden top-0 left-4 absolute bg-gray-200 w-0.5 h-full"></div>

                            {list.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative mb-16 last:mb-0"
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden md:block top-8 left-1/2 z-10 absolute bg-foreground shadow-lg -ml-3 border-4 border-background rounded-full w-6 h-6"></div>

                                    {/* Mobile dot */}
                                    <div className="md:hidden top-8 left-4 z-10 absolute bg-foreground shadow-lg -ml-3 border-4 border-background rounded-full w-6 h-6"></div>

                                    {/* Benefit card */}
                                    <div
                                        className={`bg-background rounded-xl shadow-lg p-12 relative overflow-hidden
                                        ${index % 2 === 0 ? "md:mr-[55%]" : "md:ml-[55%]"}`}
                                    >
                                        <p className="z-10 relative font-semibold text-xl">
                                            {item.text}
                                        </p>

                                        {/* Large number indicator */}
                                        <span
                                            className={`absolute font-black text-[180px] leading-none text-transparent opacity-35 
                                            text-outline-2 z-0
                                            ${index % 2 === 0 ? "-right-8 -bottom-12" : "-left-8 -bottom-12"}`}
                                        >
                                            {"0" + item.id}
                                        </span>
                                    </div>

                                    {/* Connector line */}
                                    {index < list.length - 1 && (
                                        <div className="hidden md:block top-full left-1/2 absolute bg-gray-200 w-0.5 h-16"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-12">
                        <div className="flex flex-col items-center gap-4 md:grid grid-cols-2 w-full">
                            <div className="place-items-center col-span-2 p-10 font-bold text-4xl text-center">
                                Tak co, které stínění bude pro Vás to pravé?
                            </div>
                            <Link
                                href={"/stinici-technika/venkovni-stineni"}
                                className="group relative flex flex-col justify-center items-center rounded-xl w-full h-full min-h-[400px] overflow-hidden will-change-auto"
                            >
                                <div className="absolute inset-0 bg-[url(/assets/img/IMG_7045.jpeg)] bg-cover bg-no-repeat bg-center group-hover:scale-110 transition-all duration-500 will-change-[scale]" />

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />

                                <div className="z-10 relative p-6 text-white text-center">
                                    <h3 className="font-bold text-3xl">
                                        Venkovní stínění
                                    </h3>
                                    <p className="mt-3 max-w-md">
                                        Stínění pro Vaše venkovní prostory
                                    </p>
                                </div>
                            </Link>
                            <Link
                                href={"/stinici-technika/interierove-stineni"}
                                className="group relative flex flex-col justify-center items-center rounded-xl w-full h-full min-h-[400px] overflow-hidden will-change-auto"
                            >
                                <div className="absolute inset-0 bg-[url(/assets/img/1_IMG_7635.jpeg)] bg-cover bg-no-repeat bg-center group-hover:scale-110 transition-all duration-500 will-change-[scale]" />

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />

                                <div className="z-10 relative p-6 text-white text-center">
                                    <h3 className="font-bold text-3xl">
                                        Interierové stínění
                                    </h3>
                                    <p className="mt-3 max-w-md">
                                        Stínění pro Váš interiér
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
