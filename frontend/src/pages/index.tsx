import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h1 className="text-4xl">Bienvenue sur le site FLEO</h1>
            <Link href="/animation">
                <a className="text-2xl text-blue-500 underline">Commencer l'expérience</a>
            </Link>
        </div>
    );
}

export default Home;
