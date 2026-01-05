export interface Net {
  title: string
  description?: string
  image: string
  link: string
}

export const nets: Net[] = [
  {
    title: "Pevné okenní sítě",
    description: "Základní a nejspolehlivější ochrana pro běžná okna, která nevyžadují častý přístup ven.",
    image: "/assets/img/pevna_sit_okno.jpeg",
    link: "/site-proti-hmyzu/pevne-okenni-site",
  },
  {
    title: "Sítě na střešní okna",
    description: "Rolovací systém navržený speciálně pro šikmá okna, který nebrání jejich otevírání a zavírání.",
    image: "/assets/img/rolovaci_sit.jpeg",
    link: "/site-proti-hmyzu/site-na-stresni-okna",
  },
  {
    title: "Síťové dveře",
    description: "Otevírací sítě na pantech, ideální pro frekventované vstupy na balkon či terasu.",
    image: "/assets/img/sitove_dvere.jpeg",
    link: "/site-proti-hmyzu/sitove-dvere",
  },
  {
    title: "Posuvné sítě",
    description: "Elegantní řešení pro velké prosklené plochy a francouzská okna, které šetří místo v interiéru.",
    image: "/assets/img/posuvne_site.jpg",
    link: "/site-proti-hmyzu/posuvne-site",
  },
  {
    title: "Plisé sítě",
    description: "Designová skládaná síťovina s nízkým prahem, perfektní pro moderní HS portály a velké vstupy.",
    image: "/assets/img/plisa_sit_3.jpg",
    link: "/site-proti-hmyzu/plise-site",
  },
];
