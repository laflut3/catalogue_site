"use client";

import styles from "@/styles/section/Sign/SectionSignStyle.module.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/../actions/register";

const RegisterForm: React.FC<{ onSwitchToSignIn: () => void }> = ({ onSwitchToSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState<string>();
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (formData: FormData) => {
        const r = await register({
            nom: formData.get("nom"),
            prenom: formData.get("prenom"),
            username: formData.get("username"),
            DateOfBirth: formData.get("nom"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            password: formData.get("password"),

        });
        ref.current?.reset();
        if(r?.error){
            setError(r.error);
            return;
        } else {
            return onSwitchToSignIn;
        }
    };

    return (
        <form className="mt-8 space-y-6" action={handleSubmit}>
            {error && <div className="">{error}</div>}
            <div className="rounded-md shadow-sm space-y-4">
                <div>
                    <label className="sr-only">Nom</label>
                    <input
                        type="text"
                        placeholder="Nom"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name=">Nom"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">Prenom</label>
                    <input
                        type="text"
                        placeholder="Prenom"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="Prenom"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">Username</label>
                    <input
                        type="text"
                        placeholder="username"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="username"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">Date de naissance</label>
                    <input
                        type="date"
                        placeholder="date de naissance"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="DateOfBirth"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">address Email</label>
                    <input
                        type="email"
                        placeholder="addresse Email"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        name="email"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">téléphone</label>
                    <input
                        type="tel"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="téléphone"
                        name="phone"
                    />
                </div>
                <div className="relative">
                    <label className="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Mot de passe"
                        required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-500 focus:outline-none focus:text-gray-700"
                        >
                            {showPassword ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-sm">
                <button
                    type="button"
                    onClick={onSwitchToSignIn}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                    Vous avez déja un compte ?
                </button>
            </div>

            <div>
                <button
                    type="submit"
                    className={`w-full ${styles.customButton}`}
                >
                    Créer un compte
                </button>
            </div>

        </form>
    );
};

export default RegisterForm;
