import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
