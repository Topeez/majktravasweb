import { Breadcrumb } from "@/components/breadcrumb";

export default function VenkovniStineni() {
    return (
        <div>
            <Breadcrumb items={[
                { title: "Domů", href: "/" },
                { title: "Stínicí technika", href: "/stinici-technika" },
                { title: "Venkovní stínění" }
            ]}
            />
            <h2>venkovni stineni</h2>
        </div>
    )
}