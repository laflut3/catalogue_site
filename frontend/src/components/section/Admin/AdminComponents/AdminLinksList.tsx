"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLinksBox from '@/components/section/Admin/AdminComponents/AdminUtils/AdminLinksBox';

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const AdminLinksList = () => {
    const [links, setLinks] = useState<ILink[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterType, setFilterType] = useState<string | null>(null);

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

    useEffect(() => {
        fetchLinks();
    }, []);

    const handleDelete = () => {
        fetchLinks();
    };

    const handleModify = (updatedLink: ILink) => {
        setLinks((prevLinks) =>
            prevLinks.map((link) => (link._id === updatedLink._id ? updatedLink : link))
        );
    };

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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-4">
                {filteredLinks.map((link) => (
                    <AdminLinksBox key={link._id} link={link} onDelete={handleDelete} onModify={handleModify} />
                ))}
            </div>
        </div>
    );
};

export default AdminLinksList;
