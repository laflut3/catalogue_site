// src/pages/Accueil.tsx
import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import PremiereSectionAcceuil from "@/components/section/Acceuil/premiereSectionAcceuil";


const Accueil: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <PremiereSectionAcceuil/>
            </main>
            <Footer/>
        </div>
    );
}

export default Accueil;
