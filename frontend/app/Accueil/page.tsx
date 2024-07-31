import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import PremiereSectionAcceuil from "@/components/section/Acceuil/PremiereSectionAcceuil";
import DeuxiemeSectionAcceuil from "@/components/section/Acceuil/DeuxiemeSectionAcceuil";
import TroisiemeSectionAcceuil from "@/components/section/Acceuil/TroisiemeSectionAcceuil";

const Page: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <PremiereSectionAcceuil />
                <DeuxiemeSectionAcceuil />
                <TroisiemeSectionAcceuil />
            </main>
            <Footer />
        </div>
    );
}

export default Page;
