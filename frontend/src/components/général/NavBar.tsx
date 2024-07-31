"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/général/NavBarStyle.module.css';

// Définir une interface pour les propriétés des liens
interface LinkProps {
    link: string;
    name: string;
}

// Composant pour les liens de navigation
const NavLink = ({ link, name }: LinkProps) => (
    <Link href={link}>{name}</Link>
);

// Composant pour le dernier lien de navigation
const LastNavLink = ({ link, name }: LinkProps) => (
    <Link href={link} className={`${styles.color} p-3`}>{name}</Link>
);

const NavBar = () => {
    // État pour suivre si l'utilisateur est connecté
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userProfileImage = "https://via.placeholder.com/40"; // URL de l'image de profil

    // Définir les liens de navigation
    const links: LinkProps[] = [
        { link: "/Accueil", name: "Accueil" },
        { link: "/Catalogue", name: "Catalogue" },
        { link: "/FAQ", name: "FAQ" },
        { link: "/Contact", name: "Nous contacter" }
    ];

    return (
        <header>
            <nav className="font-Russo flex space-x-10 justify-between items-center text-center p-6">
                <p>FLEO-WEB</p>
                <div className="flex space-x-4 items-center">
                    {links.map((linkProps, index) => (
                        <NavLink key={index} {...linkProps} />
                    ))}
                    {isLoggedIn ? (
                        <div className="flex items-center space-x-4">
                            <LastNavLink link="/Contact" name="Nous contacter" />
                            <img src={userProfileImage} alt="Profile" className="rounded-full w-10 h-10" />
                        </div>
                    ) : (
                        <LastNavLink link="/Sign" name="Se connecter" />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
