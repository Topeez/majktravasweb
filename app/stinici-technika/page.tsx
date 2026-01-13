import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { HeroSection } from "@/components/hero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function StiniciTechnika() {
    const list = [
        {
            id: 1,
            text: "Efektivní ochrana před sluncem",
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

    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Stínicí technika" },
    ];

    return (
        <>
            <HeroSection
                title="Komfort, světlo a soukromí pod kontrolou &#45; stínící technika pro moderní domov"
                backgroundImage="/assets/img/zaluzie2.jpg"
                placeholderColor="#5ca437"
                aria-label="Stínící technika pro moderní domov"
            />
            <section
                id="stinici-technika"
                className="bg-white py-20 text-popover-foreground"
            >
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb
                        items={breadcrumbItems}
                        aria-label="breadcrumb"
                    />

                    <div className="space-y-6 md:col-span-12">
                        <h2
                            className="font-bold text-4xl md:text-5xl text-center"
                            aria-label="Co je stínicí technika?"
                        >
                            Co je to{" "}
                            <span className="text-foreground">
                                stínicí technika?
                            </span>
                        </h2>
                        <p className="text-xl leading-relaxed">
                            Stínicí technika zahrnuje širokou škálu produktů
                            navržených pro regulaci světla, teploty a soukromí v
                            interiéru i exteriéru. Od žaluzií, rolet, markýz až
                            po pergoly - vše přizpůsobeno vašemu stylu a
                            potřebám.
                        </p>

                        {/* Timeline-style benefits section */}
                        <div
                            className="relative py-12"
                            aria-label="Benefits of shading technology"
                        >
                            {/* Vertical line */}
                            <div className="hidden md:block top-0 left-1/2 absolute bg-gray-200 w-0.5 h-5/6 -translate-x-1/2 transform"></div>

                            {/* Mobile line */}
                            <div className="md:hidden top-0 left-4 absolute bg-gray-200 w-0.5 h-5/6"></div>

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
                                        className={`bg-background rounded-xl shadow-lg p-8 relative flex items-center min-h-36 overflow-hidden
                                        ${
                                            index % 2 === 0
                                                ? "md:mr-[55%] justify-start text-left"
                                                : "md:ml-[55%] justify-end text-right"
                                        }`}
                                        aria-label={item.text}
                                    >
                                        <p className="z-10 relative max-w-xs font-semibold text-xl">
                                            {item.text}
                                        </p>

                                        {/* Large number indicator */}
                                        <span
                                            className={`absolute font-black text-[180px] leading-none text-transparent opacity-35 
                                            text-outline-2 z-0
                                            ${
                                                index % 2 === 0
                                                    ? "-right-8 -bottom-12"
                                                    : "-left-8 -bottom-12"
                                            }`}
                                        >
                                            {"0" + item.id}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-12">
                        <div className="place-items-center col-span-2 p-10 font-bold text-4xl text-center">
                            Tak co, které stínění bude pro Vás to{" "}
                            <span className="text-foreground">pravé?</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 md:grid grid-cols-2 auto-rows-[350px] w-full">
                            <Link
                                href={"/stinici-technika/venkovni-stineni"}
                                className="group relative bg-gray-900 shadow-sm hover:shadow-xl rounded-2xl w-full h-[350px] overflow-hidden transition-all hover:-translate-y-1 will-change-auto"
                                aria-label="Venkovní stínění"
                            >
                                <Image
                                    src={"/assets/img/venek_zaluzie_prizn.jpeg"}
                                    alt={"Venkovní stínění"}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                                <div className="z-10 absolute inset-0 flex flex-col justify-end p-6 md:p-8 h-full">
                                    <div className="transition-transform translate-y-2 group-hover:translate-y-0 duration-300 transform">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-background text-3xl">
                                                Venkovní stínění
                                            </h3>
                                            <div className="bg-white/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm p-2 rounded-full transition-all translate-x-4 group-hover:translate-x-0 duration-300">
                                                <ArrowRight className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <p className="opacity-80 group-hover:opacity-100 mt-3 max-w-md text-gray-200 line-clamp-2 leading-relaxed transition-opacity duration-300 delay-75">
                                            Stínění pro Vaše venkovní prostory
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href={"/stinici-technika/interierove-stineni"}
                                className="group relative bg-gray-900 shadow-sm hover:shadow-xl rounded-2xl w-full h-[350px] overflow-hidden transition-all hover:-translate-y-1 will-change-auto"
                                aria-label="Interierové stínění"
                            >
                                <Image
                                    src={"/assets/img/IMG_7820.jpeg"}
                                    alt={"Interierové stínění"}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                                <div className="z-10 absolute inset-0 flex flex-col justify-end p-6 md:p-8 h-full">
                                    <div className="transition-transform translate-y-2 group-hover:translate-y-0 duration-300 transform">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-background text-3xl">
                                                Interiérové stínění
                                            </h3>
                                            <div className="bg-white/20 opacity-0 group-hover:opacity-100 backdrop-blur-sm p-2 rounded-full transition-all translate-x-4 group-hover:translate-x-0 duration-300">
                                                <ArrowRight className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <p className="opacity-80 group-hover:opacity-100 mt-3 max-w-md text-gray-200 line-clamp-2 leading-relaxed transition-opacity duration-300 delay-75">
                                            Designové a funkční stínění pro váš
                                            interiér.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
