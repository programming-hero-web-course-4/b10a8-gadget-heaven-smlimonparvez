import { useContext, useState } from "react";
import { cartWishContext } from "../../Context/CartWishProvider";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [modalPrice, setModalPrice] = useState(0);
  // Accessing context values
  const { cart, setCart, removeFromCart, price, setPrice, sortByPrice } =
    useContext(cartWishContext);

  const handleModalOpen = () => {
    if (cart.length === 0 || price === 0) {
      return;
    }
    setModalPrice(price);
    setIsModal(true);
    setCart("");
    setPrice(0);
  };

  const handleModalClose = () => {
    setIsModal(false);
    navigate("/");
  };

  // Auto-disable purchase button when cart is empty or price is 0
  const isPurchaseDisabled = cart.length === 0 || price === 0;

  return (
    <div className="bg-gradient-to-b from-transparent to-gray-100 py-10">
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <p className="font-semibold text-xl">Cart</p>
          <div className="flex items-center justify-around mt-4 gap-2">
            <p className="font-semibold text-xl">
              Total Price: <span>${price}</span>
            </p>
            <button
              onClick={sortByPrice}
              className="btn border border-purple-500 rounded-full text-base px-4 text-purple-600 hover:text-white  hover:bg-purple-500 duration-300 ease-in-out"
            >
              Sort By Price{" "}
              <i className="text-purple-600 hover:text-white fa-solid fa-sliders"></i>
            </button>
            <button
              onClick={handleModalOpen}
              disabled={isPurchaseDisabled}
              className={`btn rounded-full text-base px-5 ${
                isPurchaseDisabled
                  ? "bg-gray-400 cursor-not-allowed text-black"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
        {cart.length === 0 ? (
          <p className="text-center text-3xl font-bold">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center justify-between shadow-md border gap-4 p-4 rounded-lg mt-4"
            >
              <div className="flex items-center gap-4">
                <img
                  className="w-20 h-18 rounded-lg"
                  src={item.product_image}
                  alt={item.product_title}
                />
                <div>
                  <h1 className="font-bold text-xl">{item.product_title} </h1>
                  <p>{item.description} </p>
                  <p>
                    <span className="font-bold">Price:</span> ${item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.product_id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))
        )}
      </div>

      {/* modal */}
      {isModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-base-200 p-8 rounded-lg flex flex-col justify-center items-center border border-blue-400">
            <img src="/src/assets/Group.png" alt="" />
            <h3 className="font-bold text-lg mt-4">Payment Successfull!</h3>
            <p className="pt-4 text-gray-600">Thanks For Purchasing!</p>
            <p className="text-gray-600">Total Price: ${modalPrice}</p>
            <button
              onClick={handleModalClose}
              className="mt-4 w-56 btn bg-gray-200 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
