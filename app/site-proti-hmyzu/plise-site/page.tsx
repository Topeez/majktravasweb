import { DetailProduktu } from "@/components/site-proti-hmyzu-layout";

export default function PliseSite() {
    return (
        <DetailProduktu
            title="Plisé sítě"
            description="Stylové skládací sítě, které skládáním připomínají harmoniku nebo plisé rolety."
            imageSrc="/assets/img/plisa_sit_2.jpg"
            imageAlt="Pevné okenní sítě"
            productDescription="Odolná síť instalovaná na rám okna nebo dveří - ideální pro trvalou ochranu před hmyzem."
            features={[
                "Kompaktní, elegantní a minimální zasahování do prostoru",
                "Snadné ovládání bez složitých mechanismů",
                "Skvělá ventilace a světelný průnik, přitom spolehlivá ochrana",
                "Údržba: stačí občasné vysátí nebo omytí vodou",
            ]}
        />
    );
}
