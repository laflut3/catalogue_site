"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ClientOnlyRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.performance) {
            const entries = performance.getEntriesByType("navigation");
            if (entries.length > 0 && entries[0].type === "reload") {
                router.push('/');
            }
        }
    }, [router]);

    return null;
};

export default ClientOnlyRedirect;
