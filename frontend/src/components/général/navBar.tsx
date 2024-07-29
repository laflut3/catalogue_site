import React from 'react';
import '@/styles/général/NavBarStyle.module.css';

const NavBar = () => {
    return (
        <nav className="font-Russo flex space-x-10">
            <p>FLEO-WEB</p>
            <div>
                <a href="/Accueil">home</a>
                <a href="/Catalogue">Catalogue</a>
                <a href="/FAQ">FAQ</a>
                <a href="/Contact">Nous contacter</a>
            </div>
        </nav>
    )
}

export default NavBar;
