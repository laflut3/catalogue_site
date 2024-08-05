"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CatalogueCard from './CatalogueUtils/CatalogueCard';
import CatalogueFilterBar from './CatalogueUtils/CatalogueFilterBar';
import TitleComponent from "@/components/utils/TitleComponent";

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const SectionCatalogue: React.FC = () => {
    const [links, setLinks] = useState<ILink[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState<string | null>(null);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await axios.get(`/api/links`);
                setLinks(response.data);
            } catch (error) {
                console.error('Failed to fetch links:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLinks();
    }, []);

    const handleFilterChange = (type: string) => {
        setFilterType(type);
    };

    const handleRemoveFilter = () => {
        setFilterType(null);
    };

    if (loading) {
        return (
            <section className="min-h-screen pt-8 font-Russo">
                {/* Assurez-vous que ce composant est bien chargé côté client */}
                <l-helix size="100" speed="2.5" color="black"></l-helix>
            </section>
        );
    }

    const filteredLinks = filterType ? links.filter(link => link.type === filterType) : links;

    return (
        <section className="min-h-screen pt-8 font-Russo">
            <TitleComponent title={"Nos Réalisation"}/>
            <CatalogueFilterBar onFilterChange={handleFilterChange} />
            {filterType && (
                <div className="flex justify-center mt-4">
                    <div className="flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                        <span>{filterType}</span>
                        <button
                            className="ml-2 text-gray-500 hover:text-gray-700"
                            onClick={handleRemoveFilter}
                        >
                            &#x2715;
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-4">
                {filteredLinks.map((link) => (
                    <CatalogueCard key={link._id} link={link} />
                ))}
            </div>
        </section>
    );
};

export default SectionCatalogue;
