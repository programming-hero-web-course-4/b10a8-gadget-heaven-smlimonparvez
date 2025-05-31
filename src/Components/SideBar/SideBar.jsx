import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SideBar = () => {
  const [sideLinks, setSideLinks] = useState([]);
  const { category = "allproducts" } = useParams();

  useEffect(() => {
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setSideLinks(data);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-5 p-5 bg-white rounded-xl shadow-lg h-96">
        {/* sidebar links */}
        <Link
              to="/products/allproducts"
              className={`${
                category === "allproducts" ? "bg-purple-500 text-white" : ""
              } w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
            >
              All Products
            </Link>
        {sideLinks.map((link) => (
              <Link
                to={`/products/${link.category}`}
                key={link.product_id}
                className={`${
                  category === link.category ? "bg-purple-500 text-white" : ""
                } w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                {link.category}
              </Link>
            ))}
        <Link
              to="/products/accessories"
              className={`${
                category === "accessories" ? "bg-purple-500 text-white" : ""
              } w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
            >
              Accessories
            </Link>
      </div>
    </div>
  );
};

export default SideBar;
