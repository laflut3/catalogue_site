"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLinksForm from "./AdminComponents/AdminLinksForm";
import AdminLinksList from "./AdminComponents/AdminLinksList";

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const AdminForm: React.FC = () => {
    const [links, setLinks] = useState<ILink[]>([]);
    const [loading, setLoading] = useState(true);

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

    const handleAdd = (newLink: ILink) => {
        setLinks((prevLinks) => [...prevLinks, newLink]);
    };

    if (loading) {
        return (
            <section className="min-h-screen pt-8 font-Russo">
                <l-helix size="100" speed="2.5" color="black"></l-helix>
            </section>
        );
    }

    return (
        <section className="min-h-screen mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
            <AdminLinksForm onAdd={handleAdd} />
            <AdminLinksList links={links} onDelete={handleDelete} onModify={handleModify} />
        </section>
    );
};

export default AdminForm;
