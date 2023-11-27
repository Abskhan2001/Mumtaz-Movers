import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Service from './pages/Services/Service';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import { Helmet } from 'react-helmet';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:"service",
        element:<Service/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      }

    ]
  }
])

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet>
      <title>Mumtaz Movers</title>
      <meta name="description"
      content="Mumtaz Movers Your Relocation Experts in the UAE"
      />
       <meta name="keywords" content="Moving, Mumtaz movers, Mumtaz movers packers, Moving in UAE, Moving UAE, Local Moving in UAE, Moving Services, Packing & Unpacking Services, Packing, Unpacking, Packing in UAE, Unpacking in UAE,   "/>
    </Helmet>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);

reportWebVitals();
