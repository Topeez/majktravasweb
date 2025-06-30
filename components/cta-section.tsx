import Link from "next/link";

export function CTA() {
    return (
        <section className="bg-foreground py-16">
            <div className="text-center cs-container">
                <h2 className="font-bold text-white text-3xl md:text-5xl">
                    Máte zájem o mé služby?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-100 text-xl">
                    Ozvěte se ještě dnes a získejte nezávaznou konzultaci a cenovou nabídku na míru
                </p>
                <div className="mt-10">
                    <Link href="#kontakt" className="inline-block bg-white hover:bg-transparent shadow-lg px-8 py-4 border-2 border-background rounded-full font-bold text-black hover:text-white text-lg transition">
                        Kontaktujte mě
                    </Link>
                </div>
            </div>
        </section>
    )
}