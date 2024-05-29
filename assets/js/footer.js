document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').innerHTML = `
    <div class="footer-content">
        <div class="footer-section about">
            <h1 class="logo-text"><img src="/catalogue_site/ressources/fleo-web-sans-fond.png" alt="logo" id="logoFooter"></h1>
            <p>
                Fleo-web offre des services de haute qualité en development. Nous nous efforçons de fournir une expérience client exceptionnelle.
            </p>
            <div class="contact">
                <span><i class="fas fa-phone"></i> &nbsp; +337.83.08.49.92</span>
                <span><i class="fas fa-envelope"></i> &nbsp; dorianMetLesAdresse@NotreEntreprise.com</span>
            </div>
            <div class="socials">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
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
        <div class="footer-section contact-form">
            <h2>Contactez-nous</h2>
            <br>
                <form action="index.html" method="post">
                    <input type="email" name="email" class="text-input contact-input" placeholder="Votre email...">
                        <textarea rows="4" name="message" class="text-input contact-input" placeholder="Votre message..."></textarea>
                        <button type="submit" class="btn btn-big">
                            <i class="fas fa-envelope"></i>
                            Envoyer
                        </button>
                    </input>
                </form>
            </br>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 Fleo-sport | Conçu par Torres Léo
    </div>
    `;
});