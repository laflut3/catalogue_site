import React, { useState } from "react";
import styles from "@/styles/section/Sign/SectionSignStyle.module.css";
import RegisterForm from "@/components/section/Sign/Formulaire/RegisterForm";
import CreateForm from "@/components/section/Sign/Formulaire/CreateForm";

const SectionSign: React.FC = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.formContainer} ${isCreatingAccount ? styles.rightPanelActive : ''}`}>
                <div className={`${styles.signInContainer}`}>
                    <RegisterForm onSwitchToCreate={() => setIsCreatingAccount(true)} />
                </div>
                <div className={styles.signUpContainer}>
                    <CreateForm onSwitchToSignIn={() => setIsCreatingAccount(false)} />
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
