import React from 'react';
import ReactDOM from "react-dom/client";
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-accessible-accordion/dist/fancy-example.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// old method  
// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
