import { NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({isActive}) =>
            isActive ? "text-base font-semibold text-blue-500 underline hover:bg-transparent" : "hover:text-blue-600 hover:underline hover:bg-transparent text-gray-700 text-base font-semibold" 
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({isActive}) =>
            isActive ? "text-base font-semibold text-blue-500 underline hover:bg-transparent" : "hover:text-blue-600 hover:underline text-gray-700 hover:bg-transparent  text-base font-semibold" 
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({isActive}) =>
            isActive ? "text-base font-semibold text-blue-500 underline hover:bg-transparent" : "hover:text-blue-600 hover:underline text-gray-700 hover:bg-transparent  text-base font-semibold" 
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({isActive}) =>
            isActive ? "text-base font-semibold text-blue-500 underline hover:bg-transparent" : "hover:text-blue-600 hover:underline text-gray-700 hover:bg-transparent  text-base font-semibold" 
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar w-4/5 mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <i className="fa-solid fa-cart-shopping border border-gray-300 rounded-full p-1 bg-white"></i>
        <i className="fa-solid fa-heart border border-gray-300 rounded-full p-1 bg-white"></i>
      </div>
    </div>
  );
};

export default Navbar;
