"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CatalogueCard from './CatalogueUtils/CatalogueCard';
import CatalogueFilterBar from './CatalogueUtils/CatalogueFilterBar';

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const SectionCatalogue: React.FC = () => {
    const [links, setLinks] = useState<ILink[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/links`);
                setLinks(response.data);
            } catch (error) {
                console.error('Failed to fetch links:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLinks();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <section className="min-h-screen pt-8 font-Russo">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold mb-4 pt-8 pb-1">Nos réalisations</h1>
                <span className="bg-blue-300 h-2 w-32 block mb-8" style={{ backgroundColor: "#99B7DE", height: "10px", width: "300px" }}></span>
            </div>
            <CatalogueFilterBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                {links.map((link) => (
                    <CatalogueCard key={link._id} link={link} />
                ))}
            </div>
        </section>
    );
};

export default SectionCatalogue;
