import React from 'react';
import Image from 'next/image';
import styles from '/frontend/src/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSectionAbout}>
                    <h1 className={styles.logoText}>
                        <Image src="/assets/ressources/image/fleo-web-sans-fond.png" alt="logo" width={150} height={50} />
                    </h1>
                    <p>
                        Fleo-web offre des services de haute qualité en développement. Nous nous efforçons de fournir une expérience client exceptionnelle.
                    </p>
                    <div className={styles.contact}>
                        <span><i className="fas fa-phone"></i> &nbsp; +337.83.08.49.92</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; dorianMetLesAdresse@NotreEntreprise.com</span>
                    </div>
                    <div className={styles.socials}>
                        <a href="#">
                            <Image src="/assets/ressources/image/réseau/github.png" alt="github" width={24} height={24} />
                        </a>
                        <a href="#">
                            <Image src="/assets/ressources/image/réseau/facebook.png" alt="facebook" width={24} height={24} />
                        </a>
                        <a href="https://www.instagram.com/fleo.corp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <Image src="/assets/ressources/image/réseau/instagram.png" alt="insta" width={24} height={24} />
                        </a>
                        <a href="#">
                            <Image src="/assets/ressources/image/réseau/tiktok.png" alt="tiktok" width={24} height={24} />
                        </a>
                    </div>
                </div>
                <div className={styles.footerSectionLinks}>
                    <h2>Liens rapides</h2>
                    <ul className={styles.navFooter}>
                        <li><a href="/Acceuil">Accueil</a></li>
                        <li><a href="/A_propos">À propos</a></li>
                        <li><a href="/Nos_services">Services</a></li>
                        <li><a href="/Catalogue">Catalogue</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <Image src="/assets/ressources/image/FLEOTHING.gif" alt="fleoGif" width={200} height={200} />
                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; 2024 Fleo-sport | Conçu par Torres Léo
            </div>
        </footer>
    );
}

export default Footer;
