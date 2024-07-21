import React from 'react';

import Footer from '../components/footer';
import Carrousel from '../components/carroussel'; // Importez le composant Carrousel

const _app = () => {
    return (
        <div className="App">
            {/* Votre contenu principal ici */}
            <Carrousel />  {/* Utilisation du composant Carrousel */}
            <Footer />
        </div>
    );
}

export default _app;
