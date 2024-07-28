import React from 'react';
import "../styles/globals.css"

import AnimationPages from './index'; // Importez le composant Carrousel

const _app = () => {
    return (
        <div className="App">
            {/* Votre contenu principal ici */}
            <AnimationPages />  {/* Utilisation du composant Carrousel */}
        </div>
    );
}

export default _app;
