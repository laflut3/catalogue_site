"use client";

import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import SectionUserInfo from "@/components/section/User/SectionUserInfo";

const Catalogue: React.FC = () => {

    return (
        <div>
            <NavBar />
            <main>
                <SectionUserInfo/>
            </main>
            <Footer/>
        </div>
    );
}

export default Catalogue;
