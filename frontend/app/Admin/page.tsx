"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'
import AdminForm from '@/components/section/Admin/SectionAdminLinks';
import { useSession } from "next-auth/react";

const AdminPage: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/Sign');
        } else if (status === "authenticated" && !session?.user?.isAdmin) {
            router.push('/User');
        }
        setLoading(false); // Ensure loading state is updated
    }, [status, session, router]);

    if (loading) {
        return <div>Loading...</div>; // Add a loading state to avoid rendering before checks are complete
    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold pt-8 mb-2">Admin</h1>
                <span className="bg-blue-300 h-2 w-32 block mb-16"
                      style={{backgroundColor: "#99B7DE", height: "10px", width: "300px"}}></span>
            </div>
            <AdminForm/>
        </main>
    );
};

export default AdminPage;
