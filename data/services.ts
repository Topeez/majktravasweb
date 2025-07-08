export interface Service {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const services: Service[] = [
    {
        title: "Stínicí technika",
        description: "Vnitřní a venkovní žaluzie, rolety, screenové clony i předokenní systémy pro regulaci světla a tepla.",
        image: "/assets/img/1_IMG_7635.jpeg",
        link:"/stinici-technika"
    },
    {
        title: "Garážová vrata",
        description: "Sekční, rolovací či výklopná vrata s tichým chodem a moderním ovládáním.",
        image: "/assets/img/garaz.jpeg",
        link:"/garazova-vrata"
    },
    {
        title: "Markýzy",
        description: "Kazetové i otevřené markýzy, které ochrání terasu či balkon před sluncem i deštěm.",
        image: "/assets/img/markyza.jpg",
        link:"/markyzy"
    },
    {
        title: "Sítě proti hmyzu",
        description: "Pevné, rolovací a posuvné sítě pro okna i dveře, díky nimž si užijete čerstvý vzduch bez dotěrného hmyzu.",
        image: "/assets/img/IMG_7628.jpeg",
        link:"/site-proti-hmyzu"
    }
];