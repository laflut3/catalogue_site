// src/pages/Accueil.tsx
import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";


const Accueil: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                {/* Autres composants ou contenu */}
            </main>
            <Footer/>
        </div>
    );
}

export default Accueil;
