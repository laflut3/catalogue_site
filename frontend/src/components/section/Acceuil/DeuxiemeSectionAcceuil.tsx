import React from "react";
import Image from "next/image";
import web from "@/../public/assets/images/world-wide-web.png";
import card1 from "@/../public/assets/images/leoCard.png"; // Chemin vers la première carte
import card2 from "@/../public/assets/images/florianCard.png"; // Chemin vers la deuxième carte
import styles from '@/styles/section/Acceuil/DeuxiemeSectionAcceuilStyle.module.css';

const DeuxiemeSectionAcceuil: React.FC = () => {
    return (
        <section className={`font-Russo relative min-h-screen flex flex-col items-center justify-center ${styles.back}`}>
            <div className="absolute flex items-center justify-center">
                <Image src={web} alt="web" className="size-1/8 opacity-30" />
            </div>
            <h1 className="text-white text-6xl font-bold mb-4 z-10">QUI SOMMES NOUS ?</h1>
            <div className="flex justify-between items-center w-full px-10 z-10">
                <Image src={card1} alt="Léo Torres" className="w-1/4 h-auto border-2" />
                <Image src={card2} alt="Florian Filloux" className="w-1/4 h-auto border-2" />
            </div>
            <p className="text-white text-center text-lg mt-8 max-w-3xl z-10">
                Chez FLEO-WEB, nous sommes spécialisés dans la vente de templates élégantes et la prestation de services de développement web sur mesure. Notre mission est de vous fournir des outils et des services de haute qualité pour transformer votre présence en ligne et maximiser votre impact digital.
            </p>
        </section>
    );
}

export default DeuxiemeSectionAcceuil;
