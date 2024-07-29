import React from 'react';
import styles from '@/styles/général/NavBarStyle.module.css';

const NavBar = () => {
    return (
        <nav className="font-Russo flex space-x-10 justify-between items-center text-center p-6">
            <p>FLEO-WEB</p>
            <div className="space-x-4">
                <a href="/Accueil">Home</a>
                <a href="/Catalogue">Catalogue</a>
                <a href="/FAQ">FAQ</a>
                <a href="/Contact" className={`${styles.color} p-2`}>Nous contacter</a>
            </div>
        </nav>
    )
}

export default NavBar;
