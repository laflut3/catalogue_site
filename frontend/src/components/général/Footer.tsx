import React from 'react';
import styles from '@/styles/général/Footer.module.css';
import Image from 'next/image';
import polygonImage from '@/../public/assets/images/Polygon.png';
import logo from '@/../public/assets/images/fleo-web-reversed.png';

const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer} w-full flex items-center size-18`}>
            <Image src={polygonImage} alt="Polygon" className={styles.image}/>
            <div className={`absolute flex space-x-4 left-16 text-center justify-center items-center ${styles.logoDiv}`}>
                <Image src={logo} alt="logo" className={`size-16 ${styles.logo}`}/>
                <p className="font-Caveat text-white text-2xl">FLEO-WEB</p>
            </div>
        </footer>
    )
}

export default Footer;
