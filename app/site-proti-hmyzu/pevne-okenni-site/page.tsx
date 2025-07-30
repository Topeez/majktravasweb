import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PevneOkenniSite() {
    return (
        <section
            className="py-44 cs-container"
            aria-label="Pevné okenní sítě section"
        >
            {/* Breadcrumb */}
            <Breadcrumb
                aria-label="Breadcrumb navigation"
                items={[
                    { title: "Domů", href: "/" },
                    { title: "Sítě proti hmyzu", href: "/site-proti-hmyzu" },
                    { title: "Pevné okenní sítě" },
                ]}
            />

            {/* Nadpis */}
            <div
                className="mt-20 mb-16 text-center"
                aria-label="Section header"
            >
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
            <div
                className="flex flex-col items-center gap-12 md:grid md:grid-cols-12"
                aria-label="Image and text section"
            >
                <div
                    className="col-span-12 md:col-span-6 max-w-[400px] aspect-square"
                    aria-label="Product image"
                >
                    <Image
                        src="/assets/img/pevna_sit.png"
                        alt="Pevné okenní sítě"
                        width={800}
                        height={800}
                        draggable={false}
                        className="shadow-lg rounded-2xl size-full object-cover"
                    />
                </div>
                <div
                    className="space-y-6 col-span-12 md:col-span-6"
                    aria-label="Product description"
                >
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
                    <ul
                        className="space-y-1 text-muted-foreground text-lg list-disc list-inside"
                        aria-label="Product benefits list"
                    >
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
                        aria-label="Contact us link"
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
