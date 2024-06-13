import React, { useState, useEffect } from 'react';

const DomainSearchComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 455;

    return (
        <section className="bg-blue-300 p-4 mt-[15vh]">
            <p className="text-center text-2xl text-black p-4">
                Vous recherchez quelque chose de spécifique ?
            </p>
            <div className="flex flex-col items-center">
                <form
                    action=""
                    method="get"
                    target="_blank"
                    className={`flex ${isMobile ? 'flex-col' : 'items-center'} w-full max-w-4xl`}
                >
                    <div className={`flex items-center w-full ${isMobile ? 'flex-col' : 'justify-between'}`}>
                        <svg
                            className="w-6 h-6 text-gray-600 mr-2"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="currentColor"
                            />
                        </svg>
                        <input
                            className={`p-2 border border-gray-300 rounded-md ${isMobile ? 'w-full mb-2' : 'flex-grow'}`}
                            type="text"
                            name="query"
                            required
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            placeholder="Rechercher un domaine"
                        />
                    </div>
                    {!isMobile && (
                        <button
                            className="bg-gray-800 text-white py-2 px-4 rounded-md ml-2 hover:bg-[#99B6DE] transition duration-300"
                            type="submit"
                        >
                            Rechercher
                        </button>
                    )}
                </form>
                {isMobile && (
                    <button
                        className="bg-gray-800 text-white py-2 px-4 rounded-md mt-2 hover:bg-[#99B6DE] transition duration-300 w-full"
                        type="submit"
                    >
                        Rechercher
                    </button>
                )}
                <p className="mt-4">
                    <a
                        className="text-gray-800 underline"
                        href="https://domains.squarespace.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        En savoir plus sur nos pages
                    </a>
                </p>
            </div>
        </section>
    );
};

export default DomainSearchComponent;
