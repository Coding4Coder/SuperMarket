

import React, {memo} from 'react';


const ToDos = ({todos}) => {
    console.log("I am re-rendering");
  return (
    <>
      <p>I am child component</p>
        {
            todos.map((todo, index) =>
            <p key={index}> {todo} </p>
            )
        }

    </>
  )
}

export default memo(ToDos);
