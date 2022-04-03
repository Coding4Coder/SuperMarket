

import React, { useEffect, useState } from 'react';
import "../../scss/market.scss";
import PageHeading from '../../Components/PageHeading';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditItem = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [value, setValue] = useState({
        itemname: "",
        price: "",
        quantity: "",
        instock: ""
    });

        const {itemname, price, quantity, instock} = value;

    const inputChangeHandler = (e) => {
        setValue({...value,[e.target.name]:e.target.value});
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let result = await axios.put(`http://localhost:5000/supermarket/${id}`, value);
        setValue(result.data);
        navigate("/items/");

    }

    const loadSuperMarketItem = async () => {
        let result = await axios.get(`http://localhost:5000/supermarket/${id}`);
        setValue(result.data);
    }

    useEffect(() => {
            loadSuperMarketItem();
    },[]);

  return (
    <div className="container-fluid pad">
    <PageHeading pageTitle={"Edit Item - Fresh Super Market"} />

            <div className="main-container text-center">
                <form onSubmit={ onSubmitHandler }>
                    <input 
                     type="text"
                     required
                     placeholder="Item Name"
                     autoComplete="off"
                     name="itemname"
                     value={itemname}
                     onChange={inputChangeHandler}
                    />

                    <input 
                     type="text"
                     required
                     placeholder="Price"
                     autoComplete="off"
                     name="price"
                     value={price}
                     onChange={inputChangeHandler}
                    />

                    <input 
                     type="text"
                     required
                     placeholder="Quantity"
                     autoComplete="off"
                     name="quantity"
                     value={quantity}
                     onChange={inputChangeHandler}
                    />

                    <input 
                     type="text"
                     required
                     placeholder="Instock"
                     autoComplete="off"
                     name="instock"
                     value={instock}
                     onChange={inputChangeHandler}
                    />

                    <button className="btn btn-primary" > Edit </button>

                </form>
            </div>
      
    </div>
  )
}

export default EditItem;
