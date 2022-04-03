

import React, { useState } from 'react';
import "../../scss/market.scss";
import PageHeading from '../../Components/PageHeading';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {

    const navigate = useNavigate();

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
        let result = await axios.post("http://localhost:5000/supermarket/", value);
        setValue(result.data);
        navigate("/items/");

    }

  return (
    <div className="container-fluid pad">
    <PageHeading pageTitle={"Add Item - Fresh Super Market"} />

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

                    <button className="btn btn-primary" > Add </button>

                </form>
            </div>
      
    </div>
  )
}

export default AddItem;
