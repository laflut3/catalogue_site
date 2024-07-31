import React from 'react';
import NavBar from "@/components/général/NavBar";
import Footer from "@/components/général/Footer";
import SectionSign from "@/components/section/Sign/SectionSign";

const Page: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <SectionSign/>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;