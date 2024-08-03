import React, { useState } from 'react';
import axios from 'axios';

const AdminForm: React.FC = () => {
    const [url, setUrl] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('/api/links/insert', { url, type });
            if (response.status === 201) {
                setMessage('Link inserted successfully');
                setUrl('');
                setType('');
            }
        } catch (error) {
            setMessage('Failed to insert link');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Admin - Add New Link</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">URL</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Type</label>
                    <label htmlFor="mots">Sélectionnez un mot :</label>
                    <select value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
                        <option value="E-commerce">E-commerce</option>
                        <option value="Vitrine">Vitrine</option>
                        <option value="Portfolio">Portfolio</option>
                    </select>
                    <input/>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    ajouté site
                </button>
            </form>
        </div>
    );
};

export default AdminForm;
