"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const TestimonialForm: React.FC = () => {
    const router = useRouter();

    const [commentaire, setCommentaire] = useState('');
    const [sujet, setSujet] = useState('');
    const [note, setNote] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const {data: session} = useSession();

    useEffect(() => {
        if (session) {
            setUsername(session.user?.name || '');
            setImage(session.user?.image || '');
        }
    }, [session]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!commentaire || !sujet || !note) {
            setError('Commentaire, sujet, et note sont requis');
            return;
        }

        if (!session) {
            router.push('/Sign'); // Utilisez router ici après avoir vérifié session
            return;
        }

        try {
            const response = await axios.post('/api/comment', {
                User: {_id: session.user.id, username, image},
                objet: sujet,
                message: commentaire,
                note
            });
            if (response.status === 201) {
                setMessage('Témoignage inséré avec succès');
                setCommentaire('');
                setSujet('');
                setNote('');
            }
        } catch (error) {
            setError('Échec de l\'insertion du témoignage');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto my-8 space-y-4">
            <div>
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
                <select
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                >
                    <option value="">Sélectionnez une note</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">Sujet</label>
                <input
                    id="sujet"
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="commentaire" className="block text-sm font-medium text-gray-700">Commentaire</label>
                <textarea
                    id="commentaire"
                    value={commentaire}
                    onChange={(e) => setCommentaire(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
            >
                Envoyer
            </button>
            {message && <p className="text-green-500 mt-2">{message}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    )
}
export default TestimonialForm;