import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";

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
                <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-12 cs-container">
                    <Breadcrumb items={[
                        { title: "Domů", href: "/" },
                        { title: "Stínicí technika" }
                    ]}
                    />
                    {/* Textový blok */}
                    <div className="space-y-6 md:col-span-12">
                        <h2 className="font-bold text-4xl md:text-5xl text-center">Co je stínicí technika?</h2>
                        <p className="text-lg leading-relaxed">
                            Stínicí technika zahrnuje širokou škálu produktů navržených pro regulaci světla, teploty a soukromí v interiéru i exteriéru. Od žaluzií, rolet, markýz až po pergoly - vše přizpůsobeno vašemu stylu a potřebám.
                        </p>
                        <ul className="space-y-2 pl-5 text-base list-disc">
                            <li>Efektivní ochrana před sluncem a přehříváním</li>
                            <li>Zajištění soukromí a bezpečnosti</li>
                            <li>Energetická úspora díky tepelné izolaci</li>
                            <li>Moderní designové prvky exteriéru i interiéru</li>
                        </ul>
                    </div>


                    {/* Galerie / Obrázek */}
                    <div className="md:col-span-12">
                        <div className="flex flex-col items-center gap-4 md:grid grid-cols-2 w-full">
                            <Link
                                href={"/stinici-technika/venkovni-stineni"}
                                className="group relative flex flex-col justify-center items-center rounded-xl w-full h-full min-h-[400px] overflow-hidden will-change-auto">
                                <div
                                    className="absolute inset-0 bg-[url(/assets/img/IMG_7045.jpeg)] bg-cover bg-no-repeat bg-center group-hover:scale-110 transition-all duration-500 will-change-[scale]"
                                />

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />

                                <div className="z-10 relative p-6 text-white text-center">
                                    <h3 className="font-bold text-3xl">Venkovní stínění</h3>
                                    <p className="mt-3 max-w-md">Stínění pro Vaše venkovní prostory</p>
                                </div>
                            </Link>
                            <Link
                                href={"/stinici-technika/interierove-stineni"}
                                className="group relative flex flex-col justify-center items-center rounded-xl h-full min-h-[400px] overflow-hidden will-change-auto">
                                <div
                                    className="absolute inset-0 bg-[url(/assets/img/1_IMG_7635.jpeg)] bg-cover bg-no-repeat bg-center group-hover:scale-110 transition-all duration-500 will-change-[scale]"
                                />

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />

                                <div className="z-10 relative p-6 text-white text-center">
                                    <h3 className="font-bold text-3xl">Interierové stínění</h3>
                                    <p className="mt-3 max-w-md">Stínění pro Váš interiér</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
