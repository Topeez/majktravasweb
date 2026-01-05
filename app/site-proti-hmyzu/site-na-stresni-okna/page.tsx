import { DetailProduktu } from "@/components/site-proti-hmyzu-layout";

export default function RolovaciSite() {
    return (
        <DetailProduktu
            title="Sítě na střešní okna"
            description="Elegantní síťová varianta, která se při nevyužívání stáhne do kazety - téměř neviditelná."
            imageSrc="/assets/img/rolovaci_sit.jpeg"
            imageAlt="Pevné okenní sítě"
            productDescription="Sítě na střešní okna"
            features={[
                "Při zatažení mizí z dohledu a nezabírají prostor",
                "Umožňují neomezený výhled a přirozené světlo",
                "Průchod vzduchu a přirozené větrání bez hmyzích obtíží",
                "Krytí síťoviny zvyšuje životnost",
            ]}
        />
    );
}
