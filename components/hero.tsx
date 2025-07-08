import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section id="home" className="z-10 relative flex flex-col justify-center items-center bg-[url(/assets/img/zaluzie.jpg)] bg-cover bg-no-repeat bg-center w-full min-h-screen text-white animate-bg-zoom-out">
            <div className="z-10 grid grid-cols-12 w-full cs-container">
                <div className="space-y-12 col-span-12 py-12 text-center">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl animate-fade-in">
                        Profesionální montáže stínicí techniky, garážových vrat a markýz
                    </h1>
                    <h2 className="font-bold text-xl md:text-2xl">
                        Kvalita pro Váš domov dle Vašeho gusta.
                    </h2>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                        <Link href={"#sluzby"} className="bg-background hover:bg-foreground px-6 md:px-8 py-3 rounded-4xl font-bold text-black hover:text-white text-lg md:text-xl transition-colors cursor-pointer">
                            Moje služby
                        </Link>
                        <Link href={"/#kontakt"} className="group flex items-center gap-2 bg-foreground hover:bg-background px-6 md:px-8 py-3 rounded-4xl font-bold hover:text-foreground text-lg md:text-xl transition-colors cursor-pointer">
                            Domluvte si nezávazné zaměření <ArrowRight size={20} className="transition-all group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="z-0 absolute inset-0 bg-black/55"></div>
        </section>
    );
}
