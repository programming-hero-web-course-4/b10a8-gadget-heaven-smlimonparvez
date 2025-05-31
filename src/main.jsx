import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Products from "./Components/Products/Products";
import Productdetails from "./Components/Productdetails/Productdetails";
import Dashbord from "./Components/Dashboard/Dashbord";
import AboutUs from "./Components/AboutUs/AboutUs";
import Cart from "./Components/Cart/Cart";
import CartWishProvider from "./Context/CartWishProvider";
import WishList from "./Components/wishList/WishList";

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
        loader: () => fetch("/products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashbord />,
        // children: [
        //   {
        //     path: "cart",
        //     element: <Cart />,
        //   },
        //   {
        //     path: "wishlist",
        //     element: <WishList />,
        //   },
        // ],
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartWishProvider>
      <RouterProvider router={router} />
    </CartWishProvider>
  </StrictMode>
);
