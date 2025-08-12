import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RolovaciSite() {
    return (
        <section
            className="py-44 cs-container"
            aria-label="Sítě na střešní okna section"
        >
            {/* Breadcrumb */}
            <Breadcrumb
                aria-label="Breadcrumb navigation"
                items={[
                    { title: "Domů", href: "/" },
                    { title: "Sítě proti hmyzu", href: "/site-proti-hmyzu" },
                    { title: "Sítě na střešní okna" },
                ]}
            />

            {/* Nadpis */}
            <div
                className="mt-20 mb-16 text-center"
                aria-label="Section header"
            >
                <h1 className="font-bold text-3xl md:text-5xl">
                    Sítě na střešní okna
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg">
                    Elegantní síťová varianta, která se při nevyužívání stáhne
                    do kazety &#45; téměř neviditelná.
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
                        src="/assets/img/rolovaci_sit.jpeg"
                        alt="Pevné okenní sítě"
                        width={1200}
                        height={1000}
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
                        Rolovací sítě proti hmyzu fungují na principu navíjení
                        do boxu, podobně jako rolety. Jsou vhodné pro okna i
                        dveře, kde se často větrá. Umožňují snadné vysunutí nebo
                        skrytí sítě podle potřeby a nezabírají místo uvnitř
                        místnosti.
                    </p>

                    <h3 className="mt-6 font-bold text-foreground text-2xl md:text-left text-center">
                        Výhody
                    </h3>
                    <ul className="space-y-1 text-muted-foreground text-lg list-disc list-inside">
                        <li>
                            Při zatažení mizí z dohledu a nezabírají prostor
                        </li>
                        <li>Umožňují neomezený výhled a přirozené světlo</li>
                        <li>
                            Průchod vzduchu a přirozené větrání bez hmyzích
                            obtíží
                        </li>
                        <li>Krytí síťoviny zvyšuje životnost</li>
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
