import { useState, useEffect} from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { category = "allproducts" } = useParams();

  useEffect(() => {
    fetch("/public/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filterProducts =
    category === "allproducts"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="bg-gradient-to-b from-transparent to-gray-100">
      <Banner />
      <div className="pb-14">
        <h2 className="text-center font-bold text-3xl">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-10 p-10">
          <div className="flex flex-col gap-5 p-5 bg-white rounded-xl shadow-lg h-96">
            <Link to="/products/allproducts">
              <button
                className={`${category === "allproducts" ? "bg-purple-500 text-white" : ""} w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                All Products
              </button>
            </Link>
            <Link to="/products/laptops">
              <button
                className={`${category === "laptops" ? "bg-purple-500 text-white" : ""} w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                Laptops
              </button>
            </Link>
            <Link to="/products/macbooks">
              <button
                className={`${category === "macbooks" ? "bg-purple-500 text-white" : ""} w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                Macbooks
              </button>
            </Link>
            <Link to="/products/phones">
              <button
                className={`${category === "phones" ? "bg-purple-500 text-white" : ""} w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                Phones
              </button>
            </Link>
            <Link to="/products/smartwatches">
              <button
                className={`${category === "smartwatches" ? "bg-purple-500 text-white" : ""} w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                Smart Watches
              </button>
            </Link>
            <Link to="/products/Tablets">
              <button
                className={`${category === "tablets" ? "bg-purple-500 text-white" : ""} w-full px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base`}
              >
                Tablets
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filterProducts.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
