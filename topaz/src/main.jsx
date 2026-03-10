import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

import { BrowserRouter } from "react-router-dom";


registerSW()

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
