import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "StartLine - Développement de produits digitaux sur mesure",
    description: "StartLine est une agence de développement de produits digitaux sur mesure. Nous créons des produits digitaux sur mesure pour les entreprises.",
};

export default function Home() {
    return (
        <HomeMain />
    );
}
