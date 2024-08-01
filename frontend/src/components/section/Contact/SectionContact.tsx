import React, {useState, ChangeEvent, FormEvent} from 'react';
import { dotWave } from 'ldrs'
import ExDivThreeForme from "../../../../Lib/threeLib/ExempleDivThreeForme"

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    dotWave.register()

    const [formData, setFormData] = useState<FormData>({name: '', email: '', message: ''});
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('Sending');
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();
        if (data.success) {
            setStatus('Message envoyé !');
            setFormData({name: '', email: '', message: ''});
        } else {
            setStatus('Probléme lors de l\'envoie du mail');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md z-10">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Send
                    </button>
                </form>
                {status === 'Sending' ? (
                    <div className="mt-4 text-center">
                        <l-dot-wave size="47" speed="1" color="black"></l-dot-wave>
                    </div>
                ) : (
                    <p className="mt-4 text-center">{status}</p>
                )}
            </div>
            <ExDivThreeForme/>
        </section>
    );
}
