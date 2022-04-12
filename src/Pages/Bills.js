

import React from 'react';
import PageHeading from '../Components/PageHeading';
import "../scss/market.scss";

const Bills = () => {

    const billDetails = [
        {
          id: 1,
          billtype: "Internet",
          billmonth: "Jan",
          price: 1200,
          brand: "Act"
        },
        {
            id: 2,
            billtype: "Travel",
            billmonth: "Feb",
            price: 5000,
            brand: "SRS"
          },
          {
            id: 3,
            billtype: "Food",
            billmonth: "Jan",
            price: 8000,
            brand: "Grocerry"
          }
    ];


        const billtypes = billDetails.filter((btype) => {
            return btype.price < 7000;
        }).map(itemname => itemname.billtype).join(",");

        const janMonthExp = billDetails.filter((exp) => {
            return exp.billmonth == "Jan";
        })
        .reduce((intVal, currVal) => {
            return intVal + currVal.price
        },0);

    //     const getLowStockItems = items.filter((lowStock) => {
    //         return lowStock.instock < 10;
    // }).map(iname => iname.itemname).join(", ");


  return (
    <div className="container-fluid pad text-center">
    <PageHeading pageTitle={"Bill Details"} />
      <div className="main-container text-center"> 

      
       
        {
         billDetails.length == 0 ? <div>No record Found</div> :

            billDetails.map((bill, index) => {
                return (
                   <div className="row bdr-btm" key={index}>
                       <div className="col-sm-1">{ index+1} </div>
                       <div className="col-sm-3">{ bill.billtype }</div>
                       <div className="col-sm-3">{ bill.billmonth }</div>
                       <div className="col-sm-2">{ bill.price }</div>
                       <div className="col-sm-3">{ bill.brand }</div>
                   </div>
                )
            })
        }
        <div> Bill type if less than 7000: { billtypes }</div>
        <div> Jan Month Expense: { janMonthExp }</div>

      </div>
    </div>
  )
}

export default Bills;
