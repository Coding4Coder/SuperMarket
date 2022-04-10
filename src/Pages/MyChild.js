

import React from 'react';

const MyChild = (props) => {
  return (
    <div>
      <button className="btn btn-warning" onClick={props.countMe}> Click to counter </button>
    </div>
  )
}

export default MyChild;
