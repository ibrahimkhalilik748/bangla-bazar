import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import CheckBox from './CheckBox';

const Checkout = () => {

    const [product, setProduct] = useContext(userContext);


    // // const {name, price} = props.products;
    // const {_id} = useParams();
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch(`https://still-temple-31623.herokuapp.com/product?id=${product._id}`)
    //     .then(response => response.json())
    //     .then(data => setProduct(data.product))
    // }, [])
    return (
        <div className="container">
            <h1>Checkout</h1>
            <h2>name : {product.name} </h2>
            {/* <CheckBox product={products}></CheckBox> */}
        </div>
    );
};

export default Checkout;