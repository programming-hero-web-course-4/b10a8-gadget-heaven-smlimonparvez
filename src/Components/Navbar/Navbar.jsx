import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cartWishContext } from "../../Context/CartWishProvider";

const Navbar = () => {
  const {cart, wishList} = useContext(cartWishContext);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const link = (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) =>
        `${isActive ? "underline text-blue-300" : isHome ? "text-white" : "text-gray-700"} text-base font-semibold mr-3 hover:underline`
      }
      >
        Home
      </NavLink>

      <NavLink
        to="/statistics"
        className={({ isActive }) =>
        `${isActive ? "underline text-blue-300" : isHome ? "text-white" : "text-gray-700"} text-base font-semibold mr-3 hover:underline`
      }
      >
        Statistics
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
        `${isActive ? "underline text-blue-300" : isHome ? "text-white" : "text-gray-700"} text-base font-semibold mr-3 hover:underline`
      }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
        `${isActive ? "underline text-blue-300" : isHome ? "text-white" : "text-gray-700"} text-base font-semibold mr-3 hover:underline`
      }
      >
        About Us
      </NavLink>
    </div>
  );
  return (
    <div className={`navbar w-11/12 mx-auto px-16 ${isHome ? "bg-purple-500 text-white mt-7 rounded-t-2xl" : "bg-white text-black shadow-md"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ${isHome ? "bg-purple-500 text-white" : "bg-base-100 text-black"}`}
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadeget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <div className="indicator">
          <i className="fa-solid fa-cart-shopping border border-gray-300 rounded-full p-1"></i>
          <span className="indicator-item">{cart.length}</span>
        </div>
        <div className="indicator">
          <i className="fa-solid fa-heart border border-gray-300 rounded-full p-1"></i>
          <span className="indicator-item">{wishList.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
