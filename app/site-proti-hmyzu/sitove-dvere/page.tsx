import { DetailProduktu } from "@/components/site-proti-hmyzu-layout";

export default function SitoveDvere() {
    return (
        <DetailProduktu
            title="Síťové dveře"
            description="Samostatné dveřní panely se sítí &#45; buď pevné nebo zasouvací."
            imageSrc="/assets/img/sitove_dvere.jpeg"
            imageAlt="Pevné okenní sítě"
            productDescription="Síťové dveře proti hmyzu jsou ideálním řešením pro vstupy na terasu, balkon nebo do zahrady. Instalují se přímo do dveřního rámu a díky pantům se otevírají jako klasické dveře. Jsou pevné, odolné a vhodné pro časté používání."
            features={[
                "Vstupní vrstva proti hmyzu při otevřeném dveřním průchodu",
                "Jednoduché použití, ergonomická konstrukce",
                "Neomezují světlo ani výhled",
                "Pomáhají větrat bez kompromisů",
            ]}
        />
    );
}
