// src/pages/Accueil.tsx
import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import PremiereSectionAcceuil from "@/components/section/Acceuil/PremiereSectionAcceuil";
import DeuxiemeSectionAcceuil from "@/components/section/Acceuil/DeuxiemeSectionAcceuil";

const Accueil: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <PremiereSectionAcceuil/>
                <DeuxiemeSectionAcceuil/>
            </main>
            <Footer/>
        </div>
    );
}

export default Accueil;
