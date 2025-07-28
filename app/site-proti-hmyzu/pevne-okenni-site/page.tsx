import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PevneOkenniSite() {
    return (
        <section className="py-44 cs-container">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { title: "Domů", href: "/" },
                    { title: "Sítě proti hmyzu", href: "/site-proti-hmyzu" },
                    { title: "Pevné okenní sítě" },
                ]}
            />

            {/* Nadpis */}
            <div className="mt-20 mb-16 text-center">
                <h1 className="font-semibold text-3xl md:text-5xl">
                    Pevné okenní sítě
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg text-center">
                    Jednoduché a účinné řešení ochrany před hmyzem pro všechna
                    typická okna. Bez vrtání do rámu a s možností demontáže
                    během zimy.
                </p>
            </div>

            {/* Obrázek a text */}
            <div className="items-center gap-12 grid md:grid-cols-12">
                <div className="col-span-12 md:col-span-6 aspect-square">
                    <Image
                        src="/assets/img/IMG_7628.jpeg"
                        alt="Pevné okenní sítě"
                        width={800}
                        height={800}
                        className="shadow-lg rounded-2xl size-full object-cover"
                    />
                </div>
                <div className="space-y-6 col-span-12 md:col-span-6">
                    <h2 className="font-bold text-2xl md:text-3xl md:text-left text-center">
                        Popis produktu
                    </h2>
                    <p className="md:text-left text-center">
                        Odolná síť instalovaná na rám okna nebo dveří &#45;
                        ideální pro trvalou ochranu před hmyzem.
                    </p>

                    <h3 className="mt-6 font-bold text-foreground text-2xl md:text-left text-center">
                        Výhody
                    </h3>
                    <ul className="space-y-1 text-muted-foreground text-lg list-disc list-inside">
                        <li>
                            Nízká nutnost údržby, dlouhá životnost &#45;
                            bezúdržbový provoz
                        </li>
                        <li>Vysoká odolnost vůči počasí i UV záření</li>
                        <li>Nezhoršují viditelnost ani ventilaci</li>
                    </ul>

                    <Link
                        href="/#kontakt"
                        className="group flex items-center gap-2 bg-foreground hover:bg-background mx-auto px-6 md:px-8 py-3 border hover:border-foreground border-background rounded-4xl max-w-fit font-bold text-background hover:text-foreground text-lg md:text-xl transition-colors cursor-pointer"
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
