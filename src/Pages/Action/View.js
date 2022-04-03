import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading';

const View = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const loadSuperMarketItem = async () => {
        let result = await axios.get(`http://localhost:5000/supermarket/${id}`);
        setItem(result.data);
    }

    useEffect(() => {
        loadSuperMarketItem();
    }, []);

    const btnGoBack = () => {
        navigate("/items/")
    }
  return (
    <div className="container-fluid pad">
    <PageHeading pageTitle={"View - Fresh Super Market"} />

            <div className="main-container text-center">
               {
                   <>
                    <div><strong>Item Name :</strong> {item.itemname}</div>
                    <div><strong>Price :</strong> {item.price}</div>
                    <div><strong>Quantity :</strong> {item.quantity}</div>
                    <div><strong>In Stock :</strong> {item.instock}</div> <br />
                    <button className="btn btn-success" onClick={ btnGoBack }>Go Back</button>
                   </>
               }
            </div>
      
    </div>
  )
}

export default View;
