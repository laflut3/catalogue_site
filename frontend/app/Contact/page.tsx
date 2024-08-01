"use client";

import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import PremiereSectionContact from "@/components/section/Contact/PremiereSectionContact";

const Catalogue: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <PremiereSectionContact/>
            </main>
            <Footer/>
        </div>
    );
}

export default Catalogue;
