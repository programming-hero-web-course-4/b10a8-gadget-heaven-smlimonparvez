import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Products from './Components/Products/Products';
import Productdetails from './Components/Productdetails/Productdetails';
import Dashbord from './Components/Dashboard/Dashbord';
import AboutUs from './Components/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/products/:category/:product_title",
        element: <Productdetails />,
        loader: () => fetch("/public/products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashbord />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
