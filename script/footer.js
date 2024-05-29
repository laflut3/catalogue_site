document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('footer').innerHTML = `
    <div class="footer-content">
        <div class="footer-section about">
            <h1 class="logo-text"><span>Votre</span>Logo</h1>
            <p>
                Votre entreprise est un leader dans son domaine, offrant des produits et services de haute qualité. Nous nous efforçons de fournir une expérience client exceptionnelle.
            </p>
            <div class="contact">
                <span><i class="fas fa-phone"></i> &nbsp; 123-456-789</span>
                <span><i class="fas fa-envelope"></i> &nbsp; info@votreentreprise.com</span>
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
            <br>
                <ul>
                    <a href="#"><li>Accueil</li></a>
                    <a href="#"><li>À propos</li></a>
                    <a href="#"><li>Services</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </br>
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
        &copy; 2024 VotreEntreprise | Conçu par VotreNom
    </div>
    `;
});