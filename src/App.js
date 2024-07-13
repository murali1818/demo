import React from 'react';
import './App.css';

const products = [
  { name: 'Product 1', logo: './images/image.png' },
  { name: 'Product 2', logo: './images/image.png' },
  { name: 'Product 3', logo: './images/image.png' },
  { name: 'Product 4', logo: './images/image.png' },
  { name: 'Product 5', logo: './images/image.png' },
  { name: 'Product 6', logo: './images/image.png' },
  { name: 'Product 7', logo: './images/image.png' },
  { name: 'Product 8', logo: './images/image.png' },
  { name: 'Product 9', logo: './images/image.png' },
  { name: 'Product 10', logo: './images/image.png' },

];

function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src="./images/image.png"alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
