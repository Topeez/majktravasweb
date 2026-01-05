import { DetailProduktu } from "@/components/site-proti-hmyzu-layout";

export default function PosuvneSite() {
    return (
        <DetailProduktu
            title="Posuvné sítě"
            description="Skládací nebo posuvné panely, vhodné zejména u velkých prosklených dveří a teras."
            imageSrc="/assets/img/posuvne_site.jpg"
            productDescription="Posuvné sítě proti hmyzu se skládají z rámu s napnutou sítí, který se pohybuje v kolejnici. Jsou ideálním řešením pro velké prosklené plochy, posuvné dveře a terasové vstupy. Zajišťují pohodlné otevírání do strany, odolnost vůči počasí a snadnou manipulaci."
            features={[
                "Kompaktní, elegantní a minimální zasahování do prostoru",
                "Snadné ovládání bez složitých mechanismů",
                "Skvělá ventilace a světelný průnik, přitom spolehlivá ochrana",
                "Údržba: stačí občasné vysátí nebo omytí vodou",
            ]}
        />
    );
}
