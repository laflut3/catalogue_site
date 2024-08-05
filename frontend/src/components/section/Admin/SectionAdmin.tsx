"use client";

import React from 'react';
import AdminLinksForm from "./AdminComponents/AminLinksForm";
import AdminLinksList from "./AdminComponents/AdminLinksList";

const AdminForm: React.FC = () => {
    return (
        <section className="min-h-screen mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Admin</h1>
            <AdminLinksForm />
            <AdminLinksList/>
        </section>
    );
};

export default AdminForm;
