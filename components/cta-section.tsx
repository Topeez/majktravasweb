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
            <div className="top-1/2 left-0 z-10 absolute flex flex-col justify-evenly items-center opacity-10 h-full -translate-y-1/2">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="relative bg-gradient-to-l from-transparent via-45% via-background to-background w-[200px] sm:w-[300px] lg:w-[400px] h-10 sm:h-12 lg:h-16"
                    >
                        <div className="top-0 right-0 absolute border-b-[40px] border-b-transparent sm:border-b-[48px] lg:border-b-[64px] border-l-[40px] border-l-foreground sm:border-l-[48px] lg:border-l-[64px] border-solid rotate-180"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
