export interface Service {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const services: Service[] = [
    {
        title: "Stínicí technika",
        description: "Interierové žaluzie, plisé rolety, látkové clony, předokenní systémy i přístřešky pro vozidla.",
        image: "/assets/img/IMG_7723.jpeg",
        link:"/stinici-technika"
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