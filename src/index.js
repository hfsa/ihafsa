// import React from 'react';
// import ReactDOM from 'react-dom';
// //import './index.css';
// import App from './App';
// import "./styles.css";
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   //<React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");

// pay attention to this. the first param for ReadtDom.render
// is our initial file/app/component name, and second param
// is the root element/div from index.html file
ReactDOM.render(<App />, rootElement);
