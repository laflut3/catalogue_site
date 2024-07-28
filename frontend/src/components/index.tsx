import React from 'react';
import styles from '../styles/Acceuil.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                {/* créer nav bar */}
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Bienvenue sur Fleo-web</h1>
                {/* Autres composants ou contenu */}
            </main>
        </div>
    );
};

export default Home;
