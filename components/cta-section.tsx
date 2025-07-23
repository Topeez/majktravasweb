import Link from "next/link";

export function CTA() {
    return (
        <section className="relative bg-foreground py-8 sm:py-12 lg:py-16 overflow-hidden">
            <div className="z-30 relative px-4 sm:px-6 lg:px-8 text-center cs-container">
                <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Máte zájem o mé služby?
                </h2>
                <p className="mx-auto mt-3 sm:mt-4 px-4 sm:px-0 max-w-2xl text-gray-100 text-base sm:text-lg md:text-xl">
                    Ozvěte se ještě dnes a získejte nezávaznou konzultaci a
                    cenovou nabídku na míru
                </p>
                <div className="mt-6 sm:mt-8 lg:mt-10">
                    <Link
                        href="#kontakt"
                        className="inline-block bg-white hover:bg-transparent px-6 sm:px-8 py-3 sm:py-4 border-2 border-background rounded-full font-bold text-popover-foreground hover:text-white text-base sm:text-lg transition"
                    >
                        Kontaktujte mě
                    </Link>
                </div>
            </div>
            <div className="top-1/2 left-0 z-10 absolute flex flex-col justify-evenly items-start opacity-10 h-full -translate-y-1/2">
                {[...Array(4)].map((_, i) => {
                    const widths = [
                        "w-[120px]",
                        "w-[110px]",
                        "w-[100px]",
                        "w-[90px]",
                    ];
                    const translateXs = [
                        "translate-x-0",
                        "-translate-x-[10px]",
                        "-translate-x-[20px]",
                        "-translate-x-[30px]",
                    ];

                    return (
                        <div
                            key={i}
                            className={`relative bg-gradient-to-l from-transparent via-45% via-background to-background ${widths[i]} ${translateXs[i]} lg:w-[400px] h-8 sm:h-10 lg:h-12 lg:translate-x-0`}
                        >
                            <div className="top-0 right-0 absolute border-b-[40px] border-b-transparent sm:border-b-[48px] lg:border-b-[64px] border-l-[40px] border-l-foreground sm:border-l-[48px] lg:border-l-[64px] border-solid rotate-180"></div>
                        </div>
                    );
                })}
            </div>

            <div className="top-1/2 right-0 z-10 absolute flex flex-col justify-evenly items-center opacity-10 h-full -translate-y-1/2">
                {[...Array(4)].map((_, i) => {
                    const widths = [
                        "w-[120px]",
                        "w-[110px]",
                        "w-[100px]",
                        "w-[90px]",
                    ];
                    const translateXs = [
                        "translate-x-0",
                        "translate-x-[10px]",
                        "translate-x-[20px]",
                        "translate-x-[30px]",
                    ];

                    return (
                        <div
                            key={i}
                            className={`relative bg-gradient-to-r from-transparent via-45% via-background to-background ${widths[i]} ${translateXs[i]} lg:w-[400px] h-8 sm:h-10 lg:h-12 lg:translate-x-0`}
                        >
                            <div className="top-0 left-0 absolute border-b-[40px] border-b-transparent sm:border-b-[48px] lg:border-b-[64px] border-l-[40px] border-l-foreground sm:border-l-[48px] lg:border-l-[64px] border-solid -rotate-90"></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
