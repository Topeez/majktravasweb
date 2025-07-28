import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PliseSite() {
    return (
        <section className="py-44 cs-container" aria-label="Plisé sítě section">
            {/* Breadcrumb */}
            <Breadcrumb
                aria-label="Breadcrumb navigation"
                items={[
                    { title: "Domů", href: "/" },
                    { title: "Sítě proti hmyzu", href: "/site-proti-hmyzu" },
                    { title: "Plisé sítě" },
                ]}
            />

            {/* Nadpis */}
            <div
                className="mt-20 mb-16 text-center"
                aria-label="Section header"
            >
                <h1 className="font-semibold text-3xl md:text-5xl">
                    Plisé sítě
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg text-center">
                    Stylové skládací sítě, které skládáním připomínají harmoniku
                    nebo plisé rolety.
                </p>
            </div>

            {/* Obrázek a text */}
            <div
                className="flex flex-col items-center gap-12 md:grid md:grid-cols-12"
                aria-label="Image and text section"
            >
                <div
                    className="col-span-12 md:col-span-6 max-w-[400px] aspect-square"
                    aria-label="Product image"
                >
                    <Image
                        src="/assets/img/plisa_sit_2.jpg"
                        alt="Pevné okenní sítě"
                        width={1200}
                        height={1000}
                        draggable={false}
                        className="shadow-lg rounded-2xl size-full object-cover"
                    />
                </div>
                <div className="space-y-6 col-span-12 md:col-span-6">
                    <h2
                        className="font-bold text-2xl md:text-3xl md:text-left text-center"
                        aria-label="Product description"
                    >
                        Popis produktu
                    </h2>
                    <p
                        className="md:text-left text-center"
                        aria-label="Product description text"
                    >
                        Odolná síť instalovaná na rám okna nebo dveří &#45;
                        ideální pro trvalou ochranu před hmyzem.
                    </p>

                    <h3
                        className="mt-6 font-bold text-foreground text-2xl md:text-left text-center"
                        aria-label="Benefits title"
                    >
                        Výhody
                    </h3>
                    <ul
                        className="space-y-1 text-muted-foreground text-lg list-disc list-inside"
                        aria-label="Benefits list"
                    >
                        <li>
                            Kompaktní, elegantní a minimální zasahování do
                            prostoru
                        </li>
                        <li>Snadné ovládání bez složitých mechanismů</li>
                        <li>
                            Skvělá ventilace a světelný průnik, přitom
                            spolehlivá ochrana
                        </li>
                        <li>Údržba: stačí občasné vysátí nebo omytí vodou</li>
                    </ul>

                    <Link
                        href="/#kontakt"
                        className="group flex items-center gap-2 bg-foreground hover:bg-background mx-auto px-6 md:px-8 py-3 border hover:border-foreground border-background rounded-4xl max-w-fit font-bold text-background hover:text-foreground text-lg md:text-xl transition-colors cursor-pointer"
                        aria-label="Contact link"
                    >
                        Poptat se
                        <ArrowRight
                            size={20}
                            className="transition-all group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}
