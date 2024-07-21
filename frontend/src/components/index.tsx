import React from 'react';
import Navbar from './navBar';
import BurgerMenu from './navBurger';
import styles from '../styles/Acceuil.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <Navbar />
                <BurgerMenu />
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Bienvenue sur Fleo-web</h1>
                {/* Autres composants ou contenu */}
            </main>
        </div>
    );
};

export default Home;
