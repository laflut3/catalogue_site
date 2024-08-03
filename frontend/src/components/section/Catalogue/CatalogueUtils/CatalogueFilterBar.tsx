"use client"

import React from 'react';

interface CatalogueFilterBarProps {
    onFilterChange: (type: string) => void;
}

const CatalogueFilterBar: React.FC<CatalogueFilterBarProps> = ({ onFilterChange }) => {

    const handleEcommerce = () => {
        onFilterChange("E-commerce");
    };

    const handleVitrine = () => {
        onFilterChange("Vitrine");
    };

    const handlePortefolio = () => {
        onFilterChange("Portfolio");
    };

    return (
        <div className={` flex justify-center text-center p-10 pt-0`}>
            <div className="bg-blue-800 text-white rounded-full overflow-hidden flex justify-center"
                 style={{backgroundColor: "#0C388D"}}>
                <button className="px-6 py-2 hover:bg-blue-700 border-r border-white" onClick={handleEcommerce}>E-commerce</button>
                <button className="px-6 py-2 hover:bg-blue-700 border-r border-white" onClick={handleVitrine}>Vitrine</button>
                <button className="px-6 py-2 hover:bg-blue-700" onClick={handlePortefolio}>Portfolio</button>
            </div>
        </div>
    );
};

export default CatalogueFilterBar;
