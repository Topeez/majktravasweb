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
                        <h2
                            className="font-bold text-3xl md:text-5xl md:text-left text-center"
                            aria-label="Why Choose Me"
                        >
                            Proč si vybrat právě mě
                        </h2>
                        <p className="mt-4 max-w-xl text-gray-600 md:text-xl md:text-left text-center">
                            S více než 8 lety zkušeností v oboru vám nabízím
                            řešení, které splní vaše očekávání a přinese do
                            vašeho domova pohodlí a bezpečí.
                        </p>

                        <div
                            className="space-y-8 mt-10"
                            aria-label="Benefits List"
                        >
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start"
                                    aria-label={`Benefit ${index + 1}`}
                                >
                                    <div
                                        className="flex flex-shrink-0 justify-center items-center bg-primary/10 rounded-full w-14 h-14"
                                        aria-hidden="true"
                                    >
                                        {benefit.icon}
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="font-bold text-xl">
                                            {benefit.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
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
