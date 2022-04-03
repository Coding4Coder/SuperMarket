

import React, { useState, useEffect } from 'react';
import "../scss/market.scss";
import PageHeading from '../Components/PageHeading';
import axios from "axios";
import {FaEdit, FaTrashAlt, FaRegEye} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Items = () => {

    const [items, setItems] = useState([]);

    const loadSuperMarketData = async () => {
        await axios.get("http://localhost:5000/supermarket/")
        .then((response) => {
                setItems(response.data.reverse());
        })
    }
    console.log(items);

    useEffect(() => {
        loadSuperMarketData();
        document.title = "Items in the Fresh Super Market";
    }, []);

  return (
    <div className="container-fluid pad text-center">

    <PageHeading pageTitle={"Available Items in Fresh Super Market"} />
        <NavLink className="btn btn-primary btn-center" to="/item/add/">Add Item</NavLink>

  <div className="main-container text-center">
  <div className="table-responsive">
        <table className="table align-middle table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity in KG</th>
              <th scope="col">In Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              {
                  items.map((item, index) => (
                        <tr key={index}>
                            <td>{ index+1 }</td>
                            <td>{ item.itemname }</td>
                            <td>{ item.price }</td>
                            <td>{ item.quantity }</td>
                            <td>{ item.instock }</td>
                            <td>
                               <NavLink to={`/item/view/${item.id}`}>
                                  <FaRegEye className="faIcon" />
                                </NavLink>
                                <NavLink to={`/item/edit/${item.id}`} >
                                  <FaEdit className="faIcon" />
                                </NavLink>
                                <FaTrashAlt className="faIcon" />
                            </td>

                        </tr>

                  ))
              }
            
          </tbody>
        </table>
        </div>
  </div>
      
    </div>
  )
}

export default Items;
