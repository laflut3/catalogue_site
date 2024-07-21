import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../src/styles/BurgerMenu.module.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);

    return (
        <div className={styles.burger}>
            <div id="mySidenav" className={`${styles.sidenav} ${isOpen ? styles.active : ''}`}>
                <a id="closeBtn" href="#" className={styles.close} onClick={closeNav}>×</a>
                <ul>
                    <li><Link href="#"><a>home</a></Link></li>
                    <li><Link href="#"><a>A propos</a></Link></li>
                    <li><Link href="#"><a>Nos services</a></Link></li>
                    <li><Link href="#"><a>Catalogue</a></Link></li>
                    <li><Link href="#"><a>Contact</a></Link></li>
                </ul>
            </div>
            <a href="#" id="openBtn" onClick={openNav}>
                <span className={styles.burgerIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </div>
    );
};

export default BurgerMenu;
