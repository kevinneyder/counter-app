import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrimeraApp";
import CounterApp from './CounterApp'

import "./index.css"


// const saludo = <h1>Holaaa Mundoooo</h1>;
const divRoot = document.querySelector('#root'); 
// ReactDOM.render(saludo, divRoot);

ReactDOM.render(<CounterApp value = {1234} />, divRoot);