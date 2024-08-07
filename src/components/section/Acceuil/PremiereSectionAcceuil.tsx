"use client";

import React from "react";
import Image from "next/image";
import logo from "@/../public/assets/images/fleo-web-reversed.png";
import styles from '@/styles/section/Acceuil/PremiereSectionAcceuilStyle.module.css';

const PremiereSectionAcceuil: React.FC = () => {
    return (
        <section className={`min-h-screen flex items-center justify-center ${styles.back}`}>
            <div className="container mx-auto flex justify-between items-center text-center p-8">
                <div className="text-left">
                    <h1 className="text-4xl font-bold mb-4">Bienvenue chez <span className="block font-Russo text-5xl">FLEO-WEB</span></h1>
                    <p className="text-lg mb-4">Votre partenaire de confiance pour des solutions web innovantes !</p>
                    <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Que se passe-t-il ensuite ?</button>
                </div>
                <div>
                    <Image src={logo} alt="logo" className={`${styles.logo} h-32 w-32`} />
                </div>
            </div>
        </section>
    );
}

export default PremiereSectionAcceuil;
