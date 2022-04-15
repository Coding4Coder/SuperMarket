

import React, { useState } from 'react';
import PageHeading from '../PageHeading';
import ToDos from './ToDos';

import { MyContainer } from './StyledComponent';

const Counter = () => {
        const[counter, setCounter] = useState(0);
        const [todo, setTodo] = useState(["todo1", "todo 2", "todo3"]) 

        const counterClick = () => {
            setCounter(counter +1 )
        }
           
  return (
      <MyContainer>
   
        <PageHeading pageTitle={"Pure Component"} />
       
       
                <ToDos todos={todo} />

                { counter }
                <p>
                    <button className="btn btn-primary" onClick={ counterClick }> + </button>
                </p>
  
           
      
  
    </MyContainer>
  )
}

export default Counter;
