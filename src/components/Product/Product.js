import React, { useEffect, useState } from 'react';
import Products from './Products';
import './Product.css'
import axios from 'axios';

const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="container">
            <div className='body'>
                {
                    product.map(product => <Products product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Product;