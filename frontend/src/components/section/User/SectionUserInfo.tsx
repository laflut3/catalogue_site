"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {
    const { data: session } = useSession();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (session?.user) {
            axios.get("/api/user").then((response) => {
                setUser(response.data.user);
            }).catch((error) => {
                console.error("Error fetching user data:", error);
            });
        }
    }, [session]);

    if (!session) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4">User Information</h1>
                {user ? (
                    <div>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                ) : (
                    <div>Loading user information...</div>
                )}
            </div>
        </div>
    );
};

export default UserPage;
