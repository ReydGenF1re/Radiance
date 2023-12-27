import React from 'react';
import './normalize.css'
import './index.css';
import ReactDOM from 'react-dom/client';
import MainApp from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <MainApp />
    // </React.StrictMode>
)
