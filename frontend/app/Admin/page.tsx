"use client";

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation'; // Utiliser 'next/navigation' au lieu de 'next/router'
import NavBar from '@/components/général/NavBar';
import Footer from '@/components/général/Footer';
import AdminForm from '@/components/section/Admin/AdminLinksForm';
import {useSession} from "next-auth/react";
import {session} from "next-auth/core/routes";

const AdminPage: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const {data: session, status} = useSession();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/Sign');
        }
    }, [status, router]);

    useEffect(() => {
        if (!session?.user?.isAdmin){
            router.push('/User');
        }
    }, [router]);

    return (
        <main>
            <AdminForm/>
        </main>
    );
};

export default AdminPage;
