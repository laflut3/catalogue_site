import React from 'react';
import './App.css'; // Assurez-vous d'inclure les styles globaux de votre application
import Footer from '/frontend/src/components/footer'; // Assurez-vous que le chemin est correct
import Carrousel from '/frontend/src/components/carroussel'; // Importez le composant Carrousel

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
