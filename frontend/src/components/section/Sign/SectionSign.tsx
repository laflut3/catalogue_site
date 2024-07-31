import React, { useState } from "react";
import styles from "@/styles/section/Sign/SectionSignStyle.module.css";
import RegisterForm from "@/components/section/Sign/Formulaire/RegisterForm";
import CreateForm from "@/components/section/Sign/Formulaire/CreateForm";

const SectionSign: React.FC = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    return (
        <div className={styles.container}>
            <div className={`${styles.formContainer} ${isCreatingAccount ? styles.rightPanelActive : ''}`}>
                <div className={`${styles.signInContainer}`}>
                    <RegisterForm onSwitchToCreate={() => setIsCreatingAccount(true)} />
                </div>
                <div className={styles.signUpContainer}>
                    <CreateForm onSwitchToSignIn={() => setIsCreatingAccount(false)} />
                </div>
                <div className={`font-Russo ${styles.overlayContainer}`}>
                    <div className={styles.overlay}>
                        <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={styles.ghostButton} onClick={() => setIsCreatingAccount(false)}>Sign In</button>
                        </div>
                        <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                            <h1>FLEO-WEB</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className={styles.ghostButton} onClick={() => setIsCreatingAccount(true)}>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSign;
