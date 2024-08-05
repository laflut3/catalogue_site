"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface ILink {
    _id: string;
    url: string;
    type: string;
}

const AdminLinksBox: React.FC<{ link: ILink; onDelete: () => void; onModify: (updatedLink: ILink) => void }> = ({ link, onDelete, onModify }) => {
    const [url, setUrl] = useState(link.url);
    const [type, setType] = useState(link.type);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setUrl(link.url);
        setType(link.type);
    }, [link]);

    const handleDelete = async () => {
        setMessage('');
        setError('');

        try {
            const response = await axios.delete('/api/links', { data: { id: link._id } });
            if (response.status === 200) {
                setMessage('Link deleted successfully');
                onDelete();
            } else {
                setError('Failed to delete link');
            }
        } catch (error) {
            setError('Failed to delete link');
        }
    };

    const handleModify = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!url || !type) {
            setError("URL and type are required");
            return;
        }

        try {
            const response = await axios.put('/api/links', { id: link._id, url, type });
            if (response.status === 200) {
                setMessage('Link updated successfully');
                onModify({ _id: link._id, url, type });
                setIsEditing(false);
            } else {
                setError('Failed to update link');
            }
        } catch (error) {
            setError('Failed to update link');
        }
    };

    return (
        <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
            <div className="flex justify-between items-center w-full">
                <div>
                    <p>URL: {url}</p>
                    <p>Type: {type}</p>
                </div>
                <div className="flex space-x-2">
                    <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                    </button>
                    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                    </button>
                </div>
            </div>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}

            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl mb-4">Edit Link</h2>
                        <form onSubmit={handleModify} className="space-y-4">
                            <div>
                                <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
                                <input
                                    type="text"
                                    id="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="mt-1 block w-full p-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                <input
                                    type="text"
                                    id="type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="mt-1 block w-full p-2 border rounded-md"
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminLinksBox;
