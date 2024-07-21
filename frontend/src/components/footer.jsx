import React from 'react';
import './Footer.css'; // Assurez-vous d'inclure les styles appropriés

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">
                        <img src="/catalogue_site/assets/ressources/image/fleo-web-sans-fond.png" alt="logo" id="logoFooter" />
                    </h1>
                    <p>
                        Fleo-web offre des services de haute qualité en développement. Nous nous efforçons de fournir une expérience client exceptionnelle.
                    </p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> &nbsp; +337.83.08.49.92</span>
                        <span><i className="fas fa-envelope"></i> &nbsp; dorianMetLesAdresse@NotreEntreprise.com</span>
                    </div>
                    <div className="socials">
                        <a href="#">
                            <img className="icone" src="/catalogue_site/assets/ressources/image/réseau/github.png" alt="github" />
                        </a>
                        <a href="#">
                            <img className="icone" src="/catalogue_site/assets/ressources/image/réseau/facebook.png" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/fleo.corp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <img className="icone" src="/catalogue_site/assets/ressources/image/réseau/instagram.png" alt="insta" />
                        </a>
                        <a href="#">
                            <img className="icone" src="/catalogue_site/assets/ressources/image/réseau/tiktok.png" alt="tiktok" />
                        </a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Liens rapides</h2>
                    <ul id="navFooter">
                        <li><a href="/catalogue_site/src/Acceuil.html">Accueil</a></li>
                        <li><a href="/catalogue_site/src/A_propos.html">À propos</a></li>
                        <li><a href="/catalogue_site/src/Nos_services.html">Services</a></li>
                        <li><a href="/catalogue_site/src/Catalogue.html">Catalogue</a></li>
                        <li><a href="/catalogue_site/src/Contact.html">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <img src="/catalogue_site/assets/ressources/image/FLEOTHING.gif" alt="fleoGif" id="GIF" />
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Fleo-sport | Conçu par Torres Léo
            </div>
        </footer>
    );
}

export default Footer;
