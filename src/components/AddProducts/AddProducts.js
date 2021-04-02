import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css'

const AddProducts = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] =useState(null);

    const onSubmit = data => {
        const eventData = {
            name : data.name,
            wight: data.wight,
            price: data.price,
            imageURL : imageURL,
        }
        const URL = `https://still-temple-31623.herokuapp.com/addProducts`
        console.log(eventData)
        fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res =>console.log('server site res', res))
    }

    const imageUpdate = event => {
        console.log(event.target.files[0]);
        const imgData = new FormData()
        imgData.set('key', '1732cb5f4a948a0cd44c06ddd8d68f02');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                setImageURL(response.data.data.delete_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container mt-5">
            <form className="form pl-4" onSubmit={handleSubmit(onSubmit)}><br />

                <input name="name" placeholder="Enter Name" ref={register} />

                <input name="wight" placeholder="Enter Wight" ref={register} />
                <br />
                <input name="price" placeholder="Enter Price" ref={register} />

                <input name="image" type="file" onChange={imageUpdate} />
                <br />
                <input type="submit" /><br /><br />
            </form>
        </div>
    );
};

export default AddProducts;