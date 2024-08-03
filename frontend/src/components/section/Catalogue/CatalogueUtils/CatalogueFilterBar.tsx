"use client"

import React from 'react';

const CatalogueFilterBar = () => {
    return (
        <div className="flex justify-center mb-8">
            <nav className="bg-blue-800 text-white rounded-full overflow-hidden flex" style={{ backgroundColor: "#0C388D" }}>
                <a href="#" className="px-6 py-2 hover:bg-blue-700 border-r border-white">E-commerce</a>
                <a href="#" className="px-6 py-2 hover:bg-blue-700 border-r border-white">Vitrine</a>
                <a href="#" className="px-6 py-2 hover:bg-blue-700">Portofolio</a>
            </nav>
        </div>
    );
};

export default CatalogueFilterBar;
