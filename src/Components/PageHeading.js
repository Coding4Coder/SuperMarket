

import React from 'react';

const PageHeading = (props) => {
  return (
    <h1 className="display-4 text-center pad-b">
      {props.pageTitle}
    </h1>
  )
}

export default PageHeading;
