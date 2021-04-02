import React, { useEffect, useState } from 'react';
import Products from './Products';
import './Product.css'
import axios from 'axios';

const Product = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://still-temple-31623.herokuapp.com/product`)
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