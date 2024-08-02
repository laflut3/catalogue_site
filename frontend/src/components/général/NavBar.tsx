"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import UserInitials from "../../../Lib/UserLib/composant/UserInitials";
import styles from '@/styles/général/NavBarStyle.module.css';

// Définir une interface pour les propriétés des liens
interface LinkProps {
    link: string;
    name: string;
}

// Composant pour les liens de navigation
const NavLink = ({ link, name, className }: LinkProps & { className?: string }) => (
    <Link href={link} className={`block px-4 py-2 lg:inline-block ${className}`}>{name}</Link>
);

// Composant pour le dernier lien de navigation
const LastNavLink = ({ link, name, className }: LinkProps & { className?: string }) => (
    <Link href={link} className={`${styles.color} p-3 block lg:inline-block ${className}`}>{name}</Link>
);

const NavBar = () => {
    const { data: session, status } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (menuOpen) {
            setAnimationClass('nav-link-enter');
        } else {
            setAnimationClass('nav-link-exit');
        }
    }, [menuOpen]);

    // Définir les liens de navigation
    const links: LinkProps[] = [
        { link: "/Accueil", name: "Accueil" },
        { link: "/Catalogue", name: "Catalogue" },
        { link: "/FAQ", name: "FAQ" },
    ];

    return (
        <header className="relative z-50">
            <nav className="font-Russo flex flex-wrap items-center justify-between p-6 relative">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <p className="text-xl">FLEO-WEB</p>
                    <button
                        className="lg:hidden block px-2 py-1 text-gray-700 border border-gray-700 rounded"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                {/* Background blur effect */}
                {menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300 ease-in-out z-40" onClick={() => setMenuOpen(false)}></div>}

                <div className={`fixed top-0 left-0 w-full lg:flex lg:items-center lg:w-auto transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'} lg:translate-y-0 lg:relative lg:top-0 lg:left-0 z-50 bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg lg:rounded-none shadow-lg lg:shadow-none`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
                        {links.map((linkProps, index) => (
                            <NavLink key={index} {...linkProps} className={animationClass} />
                        ))}
                        {status === "authenticated" ? (
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
                                <LastNavLink link="/Contact" name="Nous contacter" className={animationClass} />
                                <Link href="/User" className={`cursor-pointer block px-4 py-2 lg:inline-block ${animationClass}`}>
                                    {session?.user?.image ? (
                                        <img src={session.user.image} alt="Profile" className="rounded-full w-10 h-10" />
                                    ) : (
                                        <UserInitials firstName={session?.user?.firstName || 'U'} lastName={session?.user?.lastName || 'N'} />
                                    )}
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
                                <NavLink link="/Contact" name="Nous contacter" className={animationClass} />
                                <LastNavLink link="/Sign" name="Se connecter" className={animationClass} />
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
