"use client"

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Testimonial: React.FC = () => {
    const [commentaire, setCommentaire] = useState('');
    const [sujet, setSujet] = useState('');
    const [note, setNote] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { data: session } = useSession();
    const router = useRouter(); // Assurez-vous que useRouter est en dehors de toute condition

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
                User: { _id: session.user.id, username, image },
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
        <section className="testimonial">
            <h1>Commentaire</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="note" className="form-label">Note</label>
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
                <label htmlFor="sujet" className="form-label">Sujet</label>
                <input
                    id="sujet"
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
                <label htmlFor="commentaire" className="form-label">Commentaire</label>
                <input
                    id="commentaire"
                    value={commentaire}
                    onChange={(e) => setCommentaire(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Envoyer
                </button>
                {message && <p className="text-green-500 mt-2">{message}</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </section>
    );
};

export default Testimonial;
