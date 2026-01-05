export interface Service {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const services: Service[] = [
    {
        title: "Stínicí technika",
        description: "Interierové žaluzie, plisé rolety, látkové clony i předokenní systémy.",
        image: "/assets/img/IMG_7723.jpeg",
        link:"/stinici-technika"
    },
    {
        title: "Pergoly a přístřešky",
        description: "Bioklimatické pergoly pro vaši terasu a designové přístřešky pro ochranu vašeho vozu.",
        image: "/assets/img/bio-pergola.jpg",
        link: "/pergoly-a-pristresky"
    },
    {
        title: "Garážová vrata",
        description: "Sekční, rolovací vrata s moderním ovládáním.",
        image: "/assets/img/garaz.jpeg",
        link:"/garazova-vrata"
    },
    {
        title: "Markýzy",
        description: "Kazetové markýzy, které ochrání terasu či balkon před sluncem i deštěm.",
        image: "/assets/img/markyza.jpg",
        link:"/stinici-technika/venkovni-stineni/markyzy"
    },
    {
        title: "Sítě proti hmyzu",
        description: "Pevné, rolovací a posuvné sítě pro okna i dveře.",
        image: "/assets/img/IMG_7628.jpeg",
        link:"/site-proti-hmyzu"
    }
];