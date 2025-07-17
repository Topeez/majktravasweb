import { Breadcrumb } from "@/components/breadcrumb";
import { HeroSection } from "@/components/hero";

export default function InterieroveStineni() {
    const breadcrumbItems = [
        { title: "Domů", href: "/" },
        { title: "Stínicí technika", href: "/stinici-technika" },
        { title: "Interiérové stínění" },
    ];
    return (
        <>
            <HeroSection
                title="Styl a soukromí &#45; interiérové stínění, které ladí s vaším domovem"
                backgroundImage="/assets/img/IMG_7601.jpeg"
                placeholderColor="#5ca437"
            />
            <section className="py-20">
                <div className="flex flex-col gap-12 md:grid md:grid-cols-12 w-full cs-container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </section>
        </>
    );
}
