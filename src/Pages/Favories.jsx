import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext';

/* Favorites-komponenten visar användarens favoriter.
Jag använder useCart för att hämta favorites direkt från context.
Om det inte finns några favoriter visas ett meddelande. */

const Favorites = () => {
  const { favorites } = useCart(); // Använd useCart för att hämta favorites direkt

  if (favorites.length === 0) {
    return <p className='message'>No favorites added yet</p>;
  }

  return (
    <div className='favorites'>
      <h2 className='header'>Your favorites</h2>
      <div className='products'>
        {favorites.map(product => ( 
          <ul className='productsUL' key={product.id}>
            <li>
              <h3>{product.name}</h3>
            </li>
            <li>
              <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} />
              </Link>
            </li>
            <li className='Price'>Price: ${product.price}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
