// src/pages/Accueil.tsx
import React from 'react';
import NavBar from "@/components/général/navBar";

import style from "@/styles/Acceuil.module.css"
const Accueil: React.FC = () => {
    return (
        <div>
            <header className={`${style.header}`}>
                <NavBar />
            </header>
            <main>
                {/* Autres composants ou contenu */}
            </main>
        </div>
    );
}

export default Accueil;
