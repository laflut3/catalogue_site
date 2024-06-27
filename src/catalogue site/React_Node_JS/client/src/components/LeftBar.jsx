import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { FaShoppingCart } from 'react-icons/fa';


function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [haveProduct, setHaveProduct] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getProducts().then(response => {
      setDetails(response.data);
      setHaveProduct(response.data.length > 0);
    })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);


  return (
    <>
      <button
        className="fixed top-0 right-0 m-4 z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ?  'Fermer' : (<FaShoppingCart className='text-3xl text-black' />)}
      </button>
      <div
        className={`w-[250px] h-[100vh] bg-blue-200 p-[20px] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ position: 'fixed', top: 0, right: 0 }}
      >
        <h1 className="text-2xl font-bold">Panier</h1>
        <div>{haveProduct ? (
          <ul>
            <p className='text-sm font-normal mb-4 mt-4'>Vous avez {details.length} produits qui vous attendent !</p>
            {details.map((product) => (
              <li className='flex items-center justify-between w-full' key={product.id}>
                <h2>{product.name}</h2>
                <p className='text-sm font-normal'>{product.price} {product.moneyType}</p>
              </li>
            ))}
          </ul>
          ) : (
            'Votre panier est vide'
          )}
        </div> 
      </div>
    </>
  );
}

export default LeftBar;

// https://react-icons.github.io/react-icons/