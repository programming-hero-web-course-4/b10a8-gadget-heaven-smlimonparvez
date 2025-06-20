import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, category } = product;
  return (
    <div className="shadow-md rounded-lg p-5 bg-white space-y-2 flex flex-col justify-between">
      <img
        src={product_image}
        alt="Product"
        className="w-full bg-center rounded-xl"
      />
      <div>
        <h3 className="text-lg font-semibold">{product_title}</h3>
        <p className="text-gray-500">Price: ${price}</p>
        <Link to={`/products/${category}/${product_title}`}>
          <button className="border border-purple-400 text-purple-500 font-semibold rounded-full px-3 py-1 mt-2 hover:text-white hover:bg-purple-500 ease-in-out duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
