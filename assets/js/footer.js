document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').innerHTML = `
    <div class="footer-content">
        <div class="footer-section about">
            <h1 class="logo-text"><img src="/catalogue_site/assets/ressources/image/fleo-web-sans-fond.png" alt="logo" id="logoFooter"></h1>
            <p>
                Fleo-web offre des services de haute qualité en development. Nous nous efforçons de fournir une expérience client exceptionnelle.
            </p>
            <div class="contact">
                <span><i class="fas fa-phone"></i> &nbsp; +337.83.08.49.92</span>
                <span><i class="fas fa-envelope"></i> &nbsp; dorianMetLesAdresse@NotreEntreprise.com</span>
            </div>
            <div class="socials">
                <a href="#">
                    <img class="icone" src="/catalogue_site/assets/ressources/image/réseau/github.png" alt="github">
                </a>
                <a href="#">
                    <img class="icone" src="/catalogue_site/assets/ressources/image/réseau/facebook.png" alt="facebook">
                </a>
                <a href="https://www.instagram.com/fleo.corp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img class="icone" src="/catalogue_site/assets/ressources/image/réseau/instagram.png" alt="insta">
                </a>
                <a href="#">
                    <img class="icone" src="/catalogue_site/assets/ressources/image/réseau/tiktok.png" alt="tiktok">
                </a>
            </div>
        </div>
        <div class="footer-section links">
            <h2>Liens rapides</h2>
                <ul id="navFooter">
                    <a href="/catalogue_site/Acceuil.html"><li>Accueil</li></a>
                    <a href="/catalogue_site/A_propos.html"><li>À propos</li></a>
                    <a href="/catalogue_site/Nos_services.html"><li>Services</li></a>
                    <a href="/catalogue_site/Catalogue.html"><li>Catalogue</li></a>
                    <a href="/catalogue_site/Contact.html"><li>Contact</li></a>
                </ul>
        </div>
        <div>
            <img src="/catalogue_site/assets/ressources/image/FLEOTHING.gif" alt="fleoGif" id="GIF">
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 Fleo-sport | Conçu par Torres Léo
    </div>
    `;
});