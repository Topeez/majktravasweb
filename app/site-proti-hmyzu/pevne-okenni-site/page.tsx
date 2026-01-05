import { DetailProduktu } from "@/components/site-proti-hmyzu-layout";

export default function PevneOkenniSite() {
    return (
        <DetailProduktu
            title="Pevné okenní sítě"
            description="Jednoduché a účinné řešení ochrany před hmyzem pro všechna typická okna. Bez vrtání do rámu a s možností demontáže během zimy."
            imageSrc="/assets/img/pevna_sit_okno.jpeg"
            imageAlt="Pevné okenní sítě"
            productDescription="Odolná síť instalovaná na rám okna nebo dveří - ideální pro trvalou ochranu před hmyzem."
            features={[
                "Nízká nutnost údržby, dlouhá životnost - bezúdržbový provoz",
                "Vysoká odolnost vůči počasí i UV záření",
                "Nezhoršují viditelnost ani ventilaci",
            ]}
        />
    );
}
