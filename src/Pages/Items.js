

import React from 'react';
import "../scss/market.scss";
import PageHeading from '../Components/PageHeading';

const Items = () => {
  return (
    <div className="container-fluid pad">
    <PageHeading pageTitle={"Available Items in Fresh Super Market"} />

  <div className="main-container text-center">
  <div className="table-responsive">
        <table class="table align-middle table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">In Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        </div>
  </div>
      
    </div>
  )
}

export default Items;
