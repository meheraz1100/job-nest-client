import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Router.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
    <AuthProviders>
        <RouterProvider router={router} />
        <ToastContainer />
    </AuthProviders>
    </React.StrictMode>
  </div>
)