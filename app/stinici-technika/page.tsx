import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StiniciTechnika() {
    return (

        <>
            <section id="home" className="z-10 relative flex flex-col justify-center items-center bg-[url(/assets/img/zaluzie.jpg)] bg-cover w-full min-h-screen text-white">
                <div className="z-10 grid grid-cols-12 w-full cs-container">
                    <div className="space-y-12 col-span-12 py-12 text-center">
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl">
                            Stínící technika
                        </h1>
                        <h2 className="font-bold text-xl md:text-2xl">
                            Kvalita pro Váš domov dle Vašeho gusta.
                        </h2>
                    </div>
                </div>
                <div className="z-0 absolute inset-0 bg-black/55"></div>
            </section>
            <section id="stinici-technika" className="bg-white py-20 text-black">
                <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-12 cs-container">

                    {/* Textový blok */}
                    <div className="space-y-6 md:col-span-6">
                        <h2 className="font-bold text-4xl md:text-5xl">Co je stínicí technika?</h2>
                        <p className="text-lg leading-relaxed">
                            Stínicí technika zahrnuje širokou škálu produktů navržených pro regulaci světla, teploty a soukromí v interiéru i exteriéru. Od žaluzií, rolet, markýz až po pergoly - vše přizpůsobeno vašemu stylu a potřebám.
                        </p>
                        <ul className="space-y-2 pl-5 text-base list-disc">
                            <li>Efektivní ochrana před sluncem a přehříváním</li>
                            <li>Zajištění soukromí a bezpečnosti</li>
                            <li>Energetická úspora díky tepelné izolaci</li>
                            <li>Moderní designové prvky exteriéru i interiéru</li>
                        </ul>
                        <Button className="bg-foreground hover:bg-background mt-4 px-6 py-4 rounded-3xl font-bold text-white hover:text-foreground text-lg">
                            Prohlédnout produkty
                        </Button>
                    </div>

                    {/* Galerie / Obrázek */}
                    <div className="md:col-span-6">
                        <div className="gap-4 grid grid-cols-2">
                            <div className="flex justify-center items-center h-48">
                                <Image
                                    src={"/assets/img/1_IMG_7635.jpeg"}
                                    width={500}
                                    height={300}
                                    className="rounded-2xl w-full h-48 object-cover"
                                    alt="Stínicí technika"
                                />
                            </div>
                            <div className="flex justify-center items-center h-48">
                                <Image
                                    src={"/assets/img/1_IMG_7635.jpeg"}
                                    width={500}
                                    height={300}
                                    className="rounded-2xl w-full h-48 object-cover"
                                    alt="Stínicí technika"
                                />
                            </div>
                            <div className="flex justify-center items-center h-48">
                                <Image
                                    src={"/assets/img/1_IMG_7635.jpeg"}
                                    width={500}
                                    height={300}
                                    className="rounded-2xl w-full h-48 object-cover"
                                    alt="Stínicí technika"
                                />
                            </div>
                            <div className="flex justify-center items-center h-48">
                                <Image
                                    src={"/assets/img/1_IMG_7635.jpeg"}
                                    width={500}
                                    height={300}
                                    className="rounded-2xl w-full h-48 object-cover"
                                    alt="Stínicí technika"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
