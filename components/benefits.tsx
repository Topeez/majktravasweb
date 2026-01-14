import { benefits } from "@/data/benefits";
import Image from "next/image";

export function Benefits() {
    return (
        <section
            id="omne"
            className="bg-gray-50 py-16 md:py-24"
            aria-label="Benefits Section"
        >
            <div className="cs-container">
                <div className="flex lg:flex-row flex-col items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <p className="font-bold text-muted-foreground text-base md:text-left text-center uppercase tracking-widest">
                            o mně
                        </p>
                        <h2
                            className="font-bold text-3xl md:text-5xl md:text-left text-center"
                            aria-label="Why Choose Me"
                        >
                            Proč si vybrat právě mě
                        </h2>
                        <p className="mt-4 max-w-xl text-muted-foreground md:text-xl md:text-left text-center">
                            S více než
                            <span className="font-bold text-foreground">
                                {" "}
                                8 lety
                            </span>{" "}
                            zkušeností v oboru vám nabízím řešení, které splní
                            vaše očekávání a přinese do vašeho domova pohodlí a
                            bezpečí.
                        </p>

                        <div className="space-y-8 mt-10">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start cursor-default"
                                >
                                    <div className="flex flex-shrink-0 justify-center items-center bg-primary/10 group-hover:bg-foreground rounded-full w-14 h-14 transition-colors group-hover:animate-tilt">
                                        <benefit.icon
                                            size={24}
                                            className="text-foreground group-hover:text-background transition-colors"
                                        />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="font-bold group-hover:text-foreground text-xl transition-colors">
                                            {benefit.title}
                                        </h3>
                                        <p className="mt-2 text-muted-foreground">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center w-full lg:w-1/2">
                        <div
                            className="relative shadow-lg rounded-xl w-full h-96 md:h-[500px] overflow-hidden"
                            aria-label="Installation Image"
                        >
                            <Image
                                src="/assets/img/montaz.png"
                                fill
                                className="object-cover"
                                alt="Montáž stínicí techniky"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
