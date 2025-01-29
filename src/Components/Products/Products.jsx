import { useState } from "react";    
import { useEffect } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleFilterProducts = (category) => {
    if (category === 'AllProducts') {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    }
  };

  useEffect(() => {
    fetch("/public/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="pb-14">
        <h2 className="text-center font-bold text-3xl">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-10 p-10">
          <div className="flex flex-col gap-5 p-5 bg-white rounded-xl shadow-lg h-80">
            <button onClick={() => handleFilterProducts('AllProducts')} className="px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base">
              All Products
            </button>
            <button onClick={() => handleFilterProducts('Laptop')} className="px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base">
              Laptops
            </button>
            <button onClick={() => handleFilterProducts('MacBook')} className="px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base">
              Macbooks
            </button>
            <button onClick={() => handleFilterProducts('Phones')} className="px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base">
              Phones
            </button>
            <button onClick={() => handleFilterProducts('Smartwatches')} className="px-5 py-2 bg-gray-100 rounded-full text-gray-500 hover:bg-purple-500 hover:text-white ease-in-out duration-300 font-semibold text-base">
              Smart Watch
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Product key={product.product_id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
