"use client";

import React, {useState} from 'react';
import Link from 'next/link';
import styles from '@/styles/général/NavBarStyle.module.css';
import {useSession} from "next-auth/react";
import UserInitials from "../../../Lib/UserLib/composant/UserInitials";

// Définir une interface pour les propriétés des liens
interface LinkProps {
    link: string;
    name: string;
}

// Composant pour les liens de navigation
const NavLink = ({link, name}: LinkProps) => (
    <Link href={link}>{name}</Link>
);

// Composant pour le dernier lien de navigation
const LastNavLink = ({link, name}: LinkProps) => (
    <Link href={link} className={`${styles.color} p-3`}>{name}</Link>
);

const NavBar = () => {
    // État pour suivre si l'utilisateur est connecté
    const {data: session, status} = useSession();
    const userProfileImage = "https://via.placeholder.com/40"; // URL de l'image de profil

    // Définir les liens de navigation
    const links: LinkProps[] = [
        {link: "/Accueil", name: "Accueil"},
        {link: "/Catalogue", name: "Catalogue"},
        {link: "/FAQ", name: "FAQ"},
    ];

    return (
        <header>
            <nav className="font-Russo flex space-x-10 justify-between items-center text-center p-6">
                <p>FLEO-WEB</p>
                <div className="flex space-x-4 items-center">
                    {links.map((linkProps, index) => (
                        <NavLink key={index} {...linkProps} />
                    ))}
                    {status === "authenticated" ? (
                        <Link href="/User" className={`cursor-pointer`}>
                            <div className="flex items-center space-x-4">
                                <LastNavLink link="/Contact" name="Nous contacter"/>
                                {session?.user?.image ? (
                                    <img src={session.user.image} alt="Profile" className="rounded-full w-10 h-10"/>
                                ) : (
                                    <UserInitials firstName={session?.user?.firstName || 'U'}
                                                  lastName={session?.user?.lastName || 'N'}/>
                                )}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <NavLink link="/Contact" name="Nous contacter"/>
                            <LastNavLink link="/Sign" name="Se connecter"/>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
