import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form} from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaSearch } from 'react-icons/fa';
import { useCart } from '../Components/CartContext';
import productsData from '../products.json';
import './Css/Womens.css';

/* Här är min komponent för womens.jsx. Här visar jag produkterna för män.
Jag använder useState för att hålla koll på söktermen.
jag hämtar produkterna från min backend och visar dem i en lista.
Jag använder också useCart för att visa produkterna och för att lägga till produkter i favoriter. */

const Womens = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { favorites, toggleFavorite } = useCart(); // Använd favorites och toggleFavorite från context

//hämta produkter från products.json här
useEffect(() => {
  setProducts(productsData);
}, []); 

  const isProductFavorite = (productId) => {
    return favorites.some(fav => fav.id === productId);
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  // Uppdatera till att använda event-objektet och extrahera värdet
  };

  const womensProducts = products.filter(product => 
    product.category === "womens" && 
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className='womens'>
      <h2 className='header'>Women's Products</h2>
      <Form className="Formsearch" onSubmit={(e) => e.preventDefault()}>
      <Form.Control
       type="search"
       placeholder="Search for products.."
       className="searchbars"
       aria-label="Search"
       onChange={handleSearchChange}  // Använd den uppdaterade hanteraren
       />
        <FaSearch className="searchIcon"/>
      </Form>
      <div className='products'>
        {womensProducts.map(product => (
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
            <li className='heart' onClick={() => toggleFavorite(product)}>
              {isProductFavorite(product.id) ? <FaHeart className='hearticon'/> : <FaRegHeart />}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Womens;

