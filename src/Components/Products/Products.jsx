import { useState, useEffect } from "react";
import Product from "../Product/Product";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import SideBar from "../SideBar/SideBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category = "allproducts" } = useParams();

  // Fetch products from the JSON file
  useEffect(() => {
    fetch("/products.json")
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
      <div className="pb-14 w-10/12 mx-auto">
        <h2 className="text-center font-bold text-3xl">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 p-10">
          <SideBar />
          {filterProducts.length === 0 ? (
            <div
              className="flex items-center justify-center w-full bg-gray-100 rounded-xl shadow-lg p-5"
              style={{
                minHeight: "400px",
                backgroundImage:
                  "url('https://i.postimg.cc/Y0rSTBZv/9264822.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <h2 className="text-3xl font-bold text-gray-300">
                No products found
              </h2>
            </div>
          ) : (
            <div className=" flex-4/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filterProducts.map((product) => (
                <Product key={product.product_id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
