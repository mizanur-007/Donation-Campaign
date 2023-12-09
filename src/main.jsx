import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import DonationDetails from './DonationDetails/DonationDetails';
import Donations from './Donations/Donations';
import Statistics from './Statistics/Statistics';
import ErrorPage from './ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        loader: ()=>fetch("/donations.json"),
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        loader: ()=>fetch("/donations.json"),
        element:<DonationDetails></DonationDetails>
      },
      {
        path: "/donations",
        element:<Donations></Donations>
      },
      {
        path: "/statistics",
        loader: ()=>fetch("/donations.json"),
        element:<Statistics></Statistics>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
