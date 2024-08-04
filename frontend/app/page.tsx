import React from 'react';
import PremiereSectionAcceuil from "@/components/section/Acceuil/PremiereSectionAcceuil";
import DeuxiemeSectionAcceuil from "@/components/section/Acceuil/DeuxiemeSectionAcceuil";
import TroisiemeSectionAcceuil from "@/components/section/Acceuil/TroisiemeSectionAcceuil";
import Animation from "@/components/section/Acceuil/Animation";
import styles from '@/styles/Index.module.css';

const Page: React.FC = () => {
    return (
        <main className={styles.mainContainer}>
            <Animation />
            <div id="content" className={styles.hiddenContent}>
                <PremiereSectionAcceuil />
                <DeuxiemeSectionAcceuil />
                <TroisiemeSectionAcceuil />
            </div>
        </main>
    );
}

export default Page;
