import React from 'react';
import './App.css'; // Assurez-vous d'inclure les styles globaux de votre application
import Footer from './Footer'; // Assurez-vous que le chemin est correct
import Carrousel from './Carrousel'; // Importez le composant Carrousel

const App = () => {
    return (
        <div className="App">
            {/* Votre contenu principal ici */}
            <Carrousel />  {/* Utilisation du composant Carrousel */}
            <Footer />
        </div>
    );
}

export default App;
