import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../src/styles/Navbar.module.css';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const currentLocation = window.location.href;
        const menuItem = document.querySelectorAll('nav a');
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

        items.forEach(item => {
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

        return () => {
            items.forEach(item => item.removeEventListener('click', handleIndicator));
            window.removeEventListener('resize', handleIndicator);
        };
    }, []);

    return (
        <nav className={styles.navSimple}>
            <Link href="#">
                <a className="nav-item" data-active-color="orange" data-target="Home">Home</a>
            </Link>
            <Link href="#">
                <a className="nav-item" data-active-color="green" data-target="About">A propos</a>
            </Link>
            <Link href="#">
                <a className="nav-item" data-active-color="blue" data-target="Testimonials">Nos services</a>
            </Link>
            <Link href="#">
                <a className="nav-item" data-active-color="red" data-target="Blog">Catalogue</a>
            </Link>
            <Link href="#">
                <a className="nav-item" data-active-color="rebeccapurple" data-target="Contact">Contact</a>
            </Link>
            <span className="nav-indicator"></span>
        </nav>
    );
};

export default Navbar;
