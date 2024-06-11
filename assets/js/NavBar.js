const navBurger = `
        <div class="burger">
            <div id="mySidenav" class="sidenav">
                <a id="closeBtn" href="#" class="close">×</a>
                <ul>
                    <li><a href="/catalogue_site/Acceuil.html">home</a></li>
                    <li><a href="/catalogue_site/A_propos.html">A propos</a></li>
                    <li><a href="/catalogue_site/Nos_services.html">Nos services</a></li>
                    <li><a href="/catalogue_site/Catalogue.html">Catalogue</a></li>
                    <li><a href="/catalogue_site/Contact.html">Contact</a></li>
                </ul>
            </div>
            <a href="#" id="openBtn">
                <span class="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </div>
    `;

let navbar = `
        <nav class = navSimple>
            <a href="/catalogue_site/Acceuil.html" class="nav-item is-active" data-active-color="orange" data-target="Home">Home</a>
            <a href="/catalogue_site/A_propos.html" class="nav-item" data-active-color="green" data-target="About">A propos</a>
            <a href="/catalogue_site/Nos_services.html" class="nav-item" data-active-color="blue" data-target="Testimonials">Nos service</a>
            <a href="/catalogue_site/Catalogue.html" class="nav-item" data-active-color="red" data-target="Blog">Catalogue</a>
            <a href="/catalogue_site/Contact.html" class="nav-item" data-active-color="rebeccapurple" data-target="Contact">Contact</a>
            <span class="nav-indicator"></span>
        </nav>
    `;

const header = document.getElementById("header");
header.innerHTML += navbar;
header.innerHTML += navBurger

document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('nav a');
    const menuLength = menuItem.length;
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    function handleIndicator(el) {
        items.forEach(item => {
            item.classList.remove('is-active');
            item.removeAttribute('style');
        });

        const elementColor = el.dataset.activeColor;

        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.backgroundColor = elementColor;
        indicator.style.left = `${el.offsetLeft}px`;

        el.classList.add('is-active');
        el.style.color = elementColor;
    }

    items.forEach((item, index) => {
        item.addEventListener('click', e => {
            handleIndicator(e.target);
        });
        if (item.href === currentLocation) {
            item.classList.add('is-active');
            handleIndicator(item);
        }
    });

    window.addEventListener('resize', () => {
        const activeItem = document.querySelector('.nav-item.is-active');
        if (activeItem) {
            handleIndicator(activeItem);
        }
    });

    const burger = document.querySelector('.burger');
    const sidenav = document.querySelector('.sidenav');
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;

    function openNav() {
        sidenav.classList.add("active");
    }

    function closeNav() {
        sidenav.classList.remove("active");
    }
});




