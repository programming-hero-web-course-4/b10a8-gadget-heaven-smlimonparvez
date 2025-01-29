import PropTypes from "prop-types";

const Product = ({ product }) => {
  const {product_title, product_image, price } = product;
  return (
    <div className="shadow-md rounded-lg p-3 bg-white space-y-2">
      <img
        src="/src/assets/banner.jpg"
        alt="Product"
        className="w-full object-cover h-44 rounded-xl"
      />
      <div>
        <h3 className="text-lg font-semibold">{product_title}</h3>
        <p className="text-gray-500">Price: ${price}</p>
        <button className="border border-purple-400 text-purple-500 font-semibold rounded-full px-3 py-1 mt-2 hover:text-white hover:bg-purple-500 ease-in-out duration-300">View Details</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
