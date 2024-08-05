"use client";

import React, { useState } from 'react';
import axios from 'axios';

const AdminLinksForm = () => {
    const [url, setUrl] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!url || !type) {
            setError('Both URL and type are required');
            return;
        }

        try {
            const response = await axios.post('/api/links', { url, type });
            if (response.status === 201) {
                setMessage('Link inserted successfully');
                setUrl('');
                setType('');
            }
        } catch (error) {
            setError('Failed to insert link');
        }
    };

    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-extrabold mb-8 text-center text-gray-800">Add a Link</h1>
            {message && <p className="mb-4 text-center text-green-500">{message}</p>}
            {error && <p className="mb-4 text-center text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
                    <input
                        id="url"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Vitrine">Vitrine</option>
                        <option value="Portfolio">Portfolio</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    ajouter
                </button>
            </form>
        </div>
    );
}

export default AdminLinksForm;
