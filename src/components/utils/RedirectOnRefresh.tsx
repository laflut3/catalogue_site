"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ClientOnlyRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        // Vérifier que nous sommes dans un environnement client (navigateur)
        if (typeof window !== 'undefined') {
            // Vérifier si l'API de performance est disponible
            if (window.performance) {
                // Obtenir les entrées de navigation
                const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];

                // Vérifier s'il y a des entrées de navigation et si le type est "reload"
                if (entries.length > 0 && entries[0].type === "reload") {
                    // Rediriger vers la racine
                    router.replace('/');
                }
            }
        }
    }, [router]);

    return null;
};

export default ClientOnlyRedirect;
