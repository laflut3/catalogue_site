"use client";

import React, {FormEvent, useState} from "react";
import styles from "@/styles/section/Sign/SectionSignStyle.module.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm: React.FC<{ onSwitchToCreate: () => void }> = ({ onSwitchToCreate }) => {
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        if (res?.error) {
            setError(res.error as string);
        }
        if (res?.ok) {
            return router.push("/");
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && <div className="text-black">{error}</div>}
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="addresse Email"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Mot de passe"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-500 focus:outline-none focus:text-gray-700"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Mot de passe oublié ?
                    </a>
                </div>
            </div>

            <div className={`flex justify-between space-x-4`}>
                <button
                    type="submit"
                    className={`w-full ${styles.customButton}`}
                >
                    Connectez vous
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
