import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'

// Create a root container for the React app.
// ReactDOM.createRoot initializes a React root
// using the HTML element with id 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter> 
)

