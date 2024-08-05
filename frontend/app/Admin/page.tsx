"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'
import AdminForm from '@/components/section/Admin/SectionAdminLinks';
import { useSession } from "next-auth/react";
import TitleComponent from "@/components/utils/TitleComponent";

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
            <TitleComponent title={"Admin"}/>
            <AdminForm/>
        </main>
    );
};

export default AdminPage;
