import React, { useState, ChangeEvent, FormEvent } from "react";

const SectionContact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await res.json();

        if (result.success) {
            setStatus('Email sent successfully!');
        } else {
            setStatus('Failed to send email.');
        }

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="py-16 bg-blue-900 text-white text-center font-Russo">
            <div className="w-4/5 mx-auto max-w-6xl">
                <h2 className="text-4xl mb-5">Contact</h2>
                <p className="text-lg mb-10 text-gray-300">
                    Fleo-WEB une entreprise en fonction de vos besoin
                </p>

                <div className="bg-white text-gray-900 rounded-lg p-5 max-w-2xl mx-auto mb-10">
                    <h2 className="text-4xl mb-5">Contact Us</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="block text-lg" htmlFor="name">Name</label>
                            <input
                                className="w-full p-3 text-lg rounded-lg border border-gray-300"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg" htmlFor="email">Email</label>
                            <input
                                className="w-full p-3 text-lg rounded-lg border border-gray-300"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-lg" htmlFor="message">Message</label>
                            <textarea
                                className="w-full p-3 text-lg rounded-lg border border-gray-300"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="px-6 py-3 text-lg text-white bg-blue-600 rounded-lg" type="submit">Send Message</button>
                    </form>
                    {status && <p className="mt-4 text-lg">{status}</p>}
                </div>
                <div className="bg-white text-gray-900 rounded-lg p-5 max-w-2xl mx-auto font-light">
                    <div className="flex justify-between">
                        <div className="text-left">
                            <h4 className="text-xl mb-2">Téléphone</h4>
                            <p>+33783084992</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl mb-2">Situation</h4>
                            <p>Montpellier, France</p>
                        </div>
                        <div className="text-left">
                            <h4 className="text-xl mb-2">Heure d'ouverture</h4>
                            <p>lun-ven: 8:00am - 6:00pm</p>
                            <p>samedi: 8:00am - 13:00pm</p>
                            <p>dimanche: fermé</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionContact;
