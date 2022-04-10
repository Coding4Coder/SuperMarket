import React, { useEffect, useState } from "react";
import PageHeading from "../Components/PageHeading";
import "../scss/market.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";

const LetsDoIT = () => {

    const[product, setProduct] = useState([]);
    const[allValue, setAllValue] = useState([]);

    const loadProductsData = async () => {
       
           await fetch("https://fakestoreapi.com/products/")
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                setProduct(data);
            })
            .catch((error) => {
                    alert(error);
            })
         
    };
    console.log("products list:", product);

    useEffect(()=> {
        loadProductsData();
        loadMultiApiData();
    },[]);

// Muliple API Call
const loadMultiApiData = async () => {
    try{

       let result = await Promise.allSettled(
           [
               fetch("https://jsonplaceholder.typicode.com/posts")
               .then((response)=>{
                   return response.json()
               }),
               fetch("https://jsonplaceholder.typicode.com/users")
               .then((response)=>{
                return response.json()
              }),
              
           ]);
          console.log(result);
         // setAllValue(result);
    }
    catch(err){
        console.log(err);
    }
}



  //
  const disContent =
    "<p>I am a nice and <span class='txtTitle'>super duper</span> hit text paragraph, that need to show in an aweosme way, so let's handle me carefully..</p>";

  const btnInnerTxt = () => {
    document.getElementById("showContent").innerText = disContent;
  };
  const btnInnerHTML = () => {
    document.getElementById("showContent").innerHTML = disContent;
  };


  // Array
let fruits = ["Mango", "Apple", "Banana", "Kiwi", "Water Melon"];

//map
 const myMapFunc = fruits.map((fruit, index) => {
     return (
        <table>
            <tr>
                <td>{index+1}</td>
                <td>{fruit}</td>
            </tr>
        </table>
     )
 });

 // splice
//  let mySpliceFruit = fruits.splice(1, 2, "Grapes", "Papaya");
//  console.log(fruits);
//  console.log(mySpliceFruit);
let fruits2 = ["Mango", "Apple", "Banana", "Kiwi", "Water Melon"];
let mySliceFruit = fruits2.slice(2, 4);
console.log(fruits2);
console.log(mySliceFruit);

// filter

let num = ["20", "30", "40", "50", "60"];
let myFilterNum = num.filter((number)=>{
    return number < 40;
});
console.log(myFilterNum);


let fruits3 = ["Mango", "Apple", "Banana", "Kiwi", "Water Melon"];
let frt = fruits3.filter((myfrt) =>{
    return myfrt.includes("Apple");
})
console.log(fruits3.includes("Mango"));


  return (
    <div className="container-fluid pad">
      <PageHeading pageTitle={"Let's Do It.. Interview Questions"} />
      <div className="flx-containe text-center">
      <nav class="nav justify-content-center">
        <NavLink className="nav-link" to="/interview-questions/child-child/">Passing Data Child to Parent</NavLink> |
        <NavLink className="nav-link" to="/interview-questions/parent-child/">Parent to Child</NavLink> |
        <NavLink className="nav-link" to="/">Link</NavLink> |
        <NavLink className="nav-link" to="/">Disabled</NavLink>
        </nav>
      </div>
      <div className="main-container">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Difference between innerText, innerHTML and value?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              innerText return HTML element (entire code) as a string and
              display HTML element on the screen (as HTML code),
              <br /> while innerHTML return only text content of the HTML
              element.
              <div className="flx-container">
                <button
                  onClick={btnInnerTxt}
                  className="btn btn-secondary mar-r">
                  InnterText
                </button>
                <button onClick={btnInnerHTML} className="btn btn-secondary">
                  InnterHTML
                </button>
                <div className="break" />
                <div className="showContent" id="showContent"></div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                      Some Array Methods ...
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
             
                <p>Map Methos:</p>
               <div id="dvMap">{myMapFunc}</div>

              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  List of various HTTP requests
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                  <p className="stand-out">The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE. These methods correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other methods, too, but they are utilized less frequently.<br /><br />
                  Also, the HTTP methods can be classified by the idempotent and safe properties.<br /><br />

                    The safe methods are the HTTP methods that do not modify resources. For instance, using GET or HEAD on a resource URL, should NEVER change the resource.<br /><br />

                    An idempotent HTTP method is an HTTP method that can be called many times without different outcomes. It would not matter if the method is called only once, or ten times over. The result should be the same.
                    </p>
                 <table className="table align-middle table-striped table-hover">
                    <thead>
                        <tr>
                        <th>HTTP Method</th>
                        <th>Idempotent</th>
                        <th>Safe</th>
                        </tr>
                        </thead>
                        <tbody valign="top">
                        <tr>
                            <td>OPTIONS</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>GET</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>HEAD</td>
                            <td>yes</td>
                            <td>yes</td>
                        </tr>
                        <tr>
                            <td>PUT</td>
                            <td>yes</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>POST</td>
                            <td>no</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>DELETE</td>
                            <td>yes</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>PATCH</td>
                            <td>no</td>
                            <td>no</td>
                        </tr>
                        </tbody>
                        </table>

              </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  Difference Between PUT and PATCH Request
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p> PUT and PATCH requests are HTTP verbs and both relate to updating the resources at a location.</p>
                    <p><strong>PUT HTTP Request:</strong> PUT is a method of modifying resources where the client sends data that updates the entire resource. PUT is similar to POST in that it can create resources, but it does so when there is a defined URL wherein PUT replaces the entire resource if it exists or creates new if it does not exist. <br/><br/>
                    PUT is a method of modifying resource where the client sends data that updates the entire resource .   <br/><br/>
                    For example, When you want to update the Candidate name and email, you have to send all the parameters of the Candidate including those not to be updated( like, last name and avatar too) in the request body, otherwise, it will simply replace the entire resource with the name and email.  <br/><br/>
                         &#123;<br/>
                            id: 8,<br/>
                            email: "lindsay.ferguson@reqres.in", // field to be updated<br/>
                            first_name: "Lindsay", //field to be updated<br/>
                            last_name: "Ferguson",<br/>
                            avatar: "https://reqres.in/img/faces/8-image.jpg"<br/>
                            &#125;
                       
                    </p>
                    <p>
                   <strong> PATCH HTTP Request:</strong> Unlike PUT Request, PATCH does partial update e.g. Fields that need to be updated by the client, only that field is updated without modifying the other field.<br/><br/>

                        So in the previous example, we have to send only the name and email field in the request body.<br/><br/>

                        &#123;<br/>
                        "first_name":"Geeky",    // field that to be updated<br/>
                        "email":"hello@geeky.com",     // field that to be updated<br/>
                        &#125;
                                            </p>
              </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>Promise and Fetch API (API-url : https://fakestoreapi.com/products/)</AccordionItemButton>
              </AccordionItemHeading>
          <AccordionItemPanel>
          <div className="row my-row">
                      <div className="col-sm-1">Index</div>
                      <div className="col-sm-4">Title</div>
                      <div className="col-sm-1">Category</div>
                      <div className="col-sm-6">Description</div>
                  </div>
              {
                  product.map((item, index) =>
                  <div className="row my-row">
                      <div className="col-sm-1">{index+1}</div>
                      <div className="col-sm-4">{item.title}</div>
                      <div className="col-sm-1">{item.category}</div>
                      <div className="col-sm-6">{item.description}</div>
                  </div>
                  )
              }
          </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton>HoC - What is Higher-order Component in Reactjs?</AccordionItemButton>
              </AccordionItemHeading>
          <AccordionItemPanel>
              <p>A higher-order component take an another component as parameter and return new component;</p><br/><br/>
              <p>A higher-order component is a function that takes a component as parameter,and returns a new component</p><br/><br/>
         <p> A higher-order function is one which either a) takes a function as an argument or b) returns a function. <br/><br/> map(), filter(), reduce() are some Higher Order Function<br/><br/>
        If a function doesn’t do either of those things, it is a first-order function.</p>
          </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton> Multiple API calls simultaneously....  Promise.all() and Promise.allSettled()</AccordionItemButton>
              </AccordionItemHeading>
          <AccordionItemPanel>
             <p>
            <strong> Promise.all() -</strong> if one promise is not fullfil or resolve the whole promises or other APIS will not call and give the reject error.<br/><br/>
            Promise.all is rejected if at least one of the elements are rejected. For example, we pass 2 promises that resolve and one promise that rejects immediately, then Promise.all will reject immediately.
             </p>
             <p>
             <strong>Promise.allSettled() - </strong> 
             will never reject, it will resolve once all Promises in the array have either rejected or resolved.<br/><br/> And will never reject, it will resolve once all Promises in the array have either rejected or resolved.
             </p>
          
          </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
              <AccordionItemHeading>
                  <AccordionItemButton> Arry Const, Object.freeze, or Object.seal in JavaScript</AccordionItemButton>
              </AccordionItemHeading>
          <AccordionItemPanel>
          <p>Data structures which are assigned to const can be mutated(Changable):<br/><br/>
              const object = &#123;<br/>
                    prop1: 1,<br/>
                    prop2: 2 <br/>
                    &#125;<br/>

                    object.prop1 = 5;   // object is still mutable!<br/>
                    object.prop3 = 3;   // object is still mutable!<br/>

                    console.log(object);  // object is mutated</p>
          <p>In this example we declare a variable using the const keyword and assign an object to it. Although we can't reassign to this variable called object, we can mutate the object itself. If we change existing properties or add new properties this will this have effect. <br/><br/>To disable any changes to the object we need <strong>Object.freeze()</strong>.<br/><br/>
                object1 =  &#123;<br/>
                    prop1: 1,<br/>
                    prop2: 2<br/>
                    &#125;<br/>
                    object2 = Object.freeze(object1);<br/>
                    console.log(object1 === object2); // both objects are refer to the same instance<br/>
                    object2.prop3 = 3; // no new property can be added, won't work<br/>
                    delete object2.prop1; // no property can be deleted, won't work<br/>
                    console.log(object2); // object unchanged<br/>
          </p>
          <p><strong>Objects with references aren't fully frozen</strong><br/><br/>
          const object = &#123;<br/>
            prop1: 1,<br/>
                        <pre style={{paddingLeft:30}}>nestedObj: &#123;<br/>
                        nestedProp1: 1,<br/>
                        nestedProp2: 2,<br/>
                        &#125;<br/>
                     </pre>
                &#125;<br/><br/>

                const frozen = Object.freeze(object);<br/><br/>

                frozen.prop1 = 5; // won't have any effect<br/>
                frozen.nestedObj.nestedProp1 = 5; //will update because the nestedObject isn't frozen<br/><br/>

                console.log(frozen);
          </p>
          <p><strong>Difference between Object.freeze() Method and Object.seal() Method</strong><br/><br/>
          If an object is frozen using the Object.freeze() method then its properties become immutable and no changes can be made in them whereas if an object is sealed using the Object.seal() method then the changes can be made `in the existing properties of the object.<br/><br/>
          Sealing an object does not allow new properties to be added.
          </p>
          </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

      </div>
    </div>
  );
};

export default LetsDoIT;
