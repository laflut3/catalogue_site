"use client";

import React from "react";
import {signOut} from "next-auth/react";
import UserInitials from "../../../../../Lib/UserLib/composant/UserInitials";

interface UserProps {
    name: string;
    email: string;
    firstName: string;
    lastName: string;
    image : string
    imageVerif: boolean
}

const UserPage: React.FC<UserProps> = ({name, email,imageVerif, image, firstName, lastName,}) => {
    return (
        <div className="flex items-center justify-center bg-blue-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4 text-center text-blue-600">User Information</h1>
                <div className="flex flex-col items-center space-y-4">
                    {!imageVerif ?(
                        <UserInitials firstName={firstName} lastName={lastName}/>
                    ) : (
                        <img src={image} alt={`${name}'s profile`} className="rounded-full w-24 h-24 mb-4 shadow-md"/>
                        )
                    }
                    <div className="text-center text-black space-y-2">
                        <p><strong>Nom:</strong> {firstName}</p>
                        <p><strong>Prénom:</strong> {lastName}</p>
                        <p><strong>Username:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                    </div>
                    <button
                        onClick={() => signOut({callbackUrl: '/Accueil'})}
                        className="mt-4 p-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    >
                        Se déconnecter
                    </button>
                </div>
            </div>
        </div>
    )
        ;
}

export default UserPage;