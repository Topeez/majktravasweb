import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PosuvneSite() {
    return (
        <section className="py-44 cs-container">
            {/* Breadcrumb */}
            <Breadcrumb
                aria-label="Breadcrumb navigation"
                items={[
                    { title: "Domů", href: "/" },
                    { title: "Sítě proti hmyzu", href: "/site-proti-hmyzu" },
                    { title: "Posuvné sítě" },
                ]}
            />

            {/* Nadpis */}
            <div className="mt-20 mb-16 text-center">
                <h1 className="font-bold text-3xl md:text-5xl">Posuvné sítě</h1>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg">
                    Skládací nebo posuvné panely, vhodné zejména u velkých
                    prosklených dveří a teras.
                </p>
            </div>

            {/* Obrázek a text */}
            <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-12">
                <div className="col-span-12 md:col-span-6 max-w-[400px] aspect-square">
                    <Image
                        src="/assets/img/posuvne_site.jpg"
                        alt="Pevné okenní sítě"
                        width={1200}
                        height={1000}
                        draggable={false}
                        className="shadow-lg rounded-2xl size-full object-cover"
                    />
                </div>
                <div className="space-y-6 col-span-12 md:col-span-6">
                    <h2 className="font-bold text-2xl md:text-3xl md:text-left text-center">
                        Popis produktu
                    </h2>
                    <p className="md:text-left text-center">
                        Posuvné sítě proti hmyzu se skládají z rámu s napnutou
                        sítí, který se pohybuje v kolejnici. Jsou ideálním
                        řešením pro velké prosklené plochy, posuvné dveře a
                        terasové vstupy. Zajišťují pohodlné otevírání do strany,
                        odolnost vůči počasí a snadnou manipulaci.
                    </p>

                    <h3 className="mt-6 font-bold text-foreground text-2xl md:text-left text-center">
                        Výhody
                    </h3>
                    <ul className="space-y-1 text-muted-foreground text-lg list-disc list-inside">
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
                        aria-label="Poptat se"
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
