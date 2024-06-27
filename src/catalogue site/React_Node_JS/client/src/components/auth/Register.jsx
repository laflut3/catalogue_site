import React, { useState } from 'react';
import PropTypes from 'prop-types'

function Register(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegister = () => {
    console.log("Tentative d'enregistrement avec", { username, password, email, password2 });
    // mettre la logique ici
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-100 w-[400px]">
      <div className="bg-blue-300 p-6 rounded-md shadow-md w-[400px]">
        <h2 className="text-center text-2xl text-black mb-4">S'inscrire</h2>
        <form action="" method="post" className="w-full" onSubmit={handleRegister}>
          <label className="block mb-1" htmlFor="username">Nom d'utilisateur</label>
          <input
            id="username"
            className="p-2 border border-gray-300 rounded-md w-full mb-4"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="block mb-1" htmlFor="email">Votre email</label>
          <input
            id="email"
            className="p-2 border border-gray-300 rounded-md w-full mb-4"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mb-1" htmlFor="password">Mot de passe</label>
          <input
            id="password"
            className="p-2 border border-gray-300 rounded-md w-full mb-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="block mb-1" htmlFor="password2">Confirmer le mot de passe</label>
          <input
            id="password2"
            className="p-2 border border-gray-300 rounded-md w-full mb-4"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-[#99B6DE] transition duration-300 w-full"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default Register;