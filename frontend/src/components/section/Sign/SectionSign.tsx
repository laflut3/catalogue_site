"use client";

import React, {useEffect, useState} from "react";
import styles from "@/styles/section/Sign/SectionSignStyle.module.css";
import LoginForm from "@/components/section/Sign/Formulaire/LoginForm";
import RegisterForm from "@/components/section/Sign/Formulaire/RegisterForm";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

const SectionSign: React.FC = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/');
        }
    }, [status, router]);

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.formContainer} ${isCreatingAccount ? styles.rightPanelActive : ''}`}>
                <div className={`${styles.signInContainer}`}>
                    <LoginForm onSwitchToCreate={() => setIsCreatingAccount(true)} />
                </div>
                <div className={styles.signUpContainer}>
                    <RegisterForm onSwitchToSignIn={() => setIsCreatingAccount(false)} />
                </div>
                <div className={`${styles.overlayContainer}`}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <h1>Bienvenue sur FLEO-WEB</h1>
                            <p>Pour rester connecter marqué enregistrer vos informations personnelles</p>
                            <button className={styles.ghostButton} onClick={() => setIsCreatingAccount(false)}>Connectez vous</button>
                        </div>
                        <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                            <h1>FLEO-WEB</h1>
                            <p>Entrez vos informations personnelles et commencer votre journée avec nous</p>
                            <button className={styles.ghostButton} onClick={() => setIsCreatingAccount(true)}>Créer un compte</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSign;
