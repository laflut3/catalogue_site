import React from 'react';

import AnimationPages from '../components/animation'; // Importez le composant Carrousel
import Carroussel from '../components/carroussel'; // Importez le composant Carrousel

const _app = () => {
    return (
        <div className="App">
            {/* Votre contenu principal ici */}
            <AnimationPages />  {/* Utilisation du composant Carrousel */}
        </div>
    );
}

export default _app;
