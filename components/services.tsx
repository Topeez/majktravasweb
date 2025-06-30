import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
export default function Services() {

    return (
        <section id='sluzby' className="bg-white py-16 md:py-24">
            <div className="cs-container">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-bold text-3xl md:text-5xl">Co pro vás mohu udělat</h2>
                    <p className="mt-4 text-gray-600 text-xl">
                        Kompletní řešení od prvotního zaměření přes odbornou instalaci až po spolehlivý servis
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
                    {/* Service Cards */}
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-center items-center rounded-xl h-full min-h-[400px] overflow-hidden will-change-auto"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-no-repeat bg-center group-hover:scale-110 transition-all duration-500 will-change-[scale]"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />

                            <div className="z-10 relative p-6 text-white text-center">
                                <h3 className="font-bold text-3xl">{service.title}</h3>
                                <p className="mt-3 max-w-md">{service.description}</p>
                                <div className="flex justify-center items-center mt-4 font-bold">
                                    <Link
                                        href={service.link}
                                        className="flex items-center text-white hover:text-foreground transition-all duration-300"
                                    >
                                        Zjistit více
                                        <ArrowRight className="ml-2 group-hover:ml-4 group-hover:w-4 transition-all duration-300" size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
