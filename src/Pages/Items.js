

import React, { useState, useEffect } from 'react';
import "../scss/market.scss";
import PageHeading from '../Components/PageHeading';
import axios from "axios";
import {FaEdit, FaTrashAlt, FaRegEye} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Items = () => {

    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState();
;
    const loadSuperMarketData = async () => {
        await axios.get("http://localhost:5000/supermarket/")
        .then((response) => {
                setItems(response.data.reverse());
        })
        .catch((error) =>{
                //alert(error);
                    document.querySelector(".errorMsg").innerHTML = `<p>Data not loaded, ${error}</p>`;  
        });
    }
    console.log(items);

    useEffect(() => {
        loadSuperMarketData();
        document.title = "Items in the Fresh Super Market";
    }, []);

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/supermarket/${id}`);
        loadSuperMarketData();
    }

    // get total items
    const getTotalItems = items.reduce((initVal, currVal) => {
        return initVal + parseInt(currVal.instock);
    }, 0);

    // search bar
    const onChangeHandler = (e) => {
        setSearchItem(e.target.value);
    }

    const searchHandler = async (e) => {
        e.preventDefault();
        let result = await axios.get(`http://localhost:5000/supermarket?q=${searchItem}`);
        setItems(result.data);
        setSearchItem("");
    }
    //reset search

    const resetHandler = () => {
        loadSuperMarketData();
    }

    // get low stock item
    const getLowStockItems = items.filter((lowStock) => {
            return lowStock.instock < 10;
    }).map(iname => iname.itemname).join(", ");

    const getLowStockItemsLength = items.filter((lowStock) => {
        return lowStock.instock < 10;
        }).length;

  return (
    <div className="container-fluid pad text-center">

    <PageHeading pageTitle={"Available Items in Fresh Super Market"} />
    <div className="errorMsg"></div>
    <div className="row g-0">
        <div className="col-sm-4">
            <NavLink className="btn btn-primary btn-center" to="/item/add/">Add Item</NavLink>
            </div>
        <div className="col-sm-4 text-right">
            <input 
            className="form-control"
            type="text" 
            placeholder="Search Item" 
            autoComplete="off"
            required
            value={searchItem}
            onChange={onChangeHandler}
            />
        </div>
        <div className="col-sm-4 text-left pad-l-r">
          <button className="btn btn-secondary" onClick={ searchHandler }>Search</button>
          <span className="pad-l-r">
          <button className="btn btn-secondary" onClick={ resetHandler }>Reset</button>
          </span>
        </div>
    </div>
        
      

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
                              
                                <FaTrashAlt className="faIcon" onClick={()=>deleteItem(item.id)} />
                               
                            </td>
                        </tr>
                  ))
              }
          </tbody>
        </table>
        
        </div>
        <div className="to-do-list"> <h6>To Do List:</h6>
            <ul>
                <li>How many items are in stock? </li>
                <li>How many items are in low stock? (if items is less than 10) </li>
            </ul>
        </div>
        <div className="row">
             <div className="col-sm-4">
             <span className="text-red">Total items in stock :</span> { getTotalItems }
             </div>
             <div className="col-sm-4">
             <span className="text-red">Items in low stock :</span> 
                <span className="pad-l-r">{ getLowStockItemsLength }</span>
                { getLowStockItems }
             </div>
             <div className="col-sm-4">
           
             </div>
           
        </div>
  </div>
      
    </div>
  )
}

export default Items;
