import React from "react";
import styles from '@/styles/section/Catalogue/SectionCatalogueStyle.module.css';

const SectionCatalogue: React.FC = () => {
    return (
        <section className={`min-h-screen pt-8 font-Russo`}>
            <div className={`flex flex-col items-center justify-center`}>
                <h1 className="text-6xl font-bold mb-4 pt-8 pb-1">Nos réalisations</h1>
                <span className="bg-blue-300 h-2 w-32 block mb-8" style={{ backgroundColor: "#99B7DE", height: "10px", width: "300px" }}></span>
            </div>
            <div className="flex justify-center mb-8">
                <nav className="bg-blue-800 text-white rounded-full overflow-hidden flex" style={{ backgroundColor: "#0C388D" }}>
                    <a href="#" className="px-6 py-2 hover:bg-blue-700 border-r border-white">E-commerce</a>
                    <a href="#" className="px-6 py-2 hover:bg-blue-700 border-r border-white">Vitrine</a>
                    <a href="#" className="px-6 py-2 hover:bg-blue-700">Portofolio</a>
                </nav>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">visiter <i className="fas fa-external-link-alt"></i></button>
                </div>
                <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">visiter <i className="fas fa-external-link-alt"></i></button>
                </div>
                <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">visiter <i className="fas fa-external-link-alt"></i></button>
                </div>
                <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">visiter <i className="fas fa-external-link-alt"></i></button>
                </div>
                <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">visiter <i className="fas fa-external-link-alt"></i></button>
                </div>
                <div className="bg-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">visiter <i className="fas fa-external-link-alt"></i></button>
                </div>
            </div>
        </section>
    );
}

export default SectionCatalogue;
