import { useContext } from "react";
import { cartWishContext } from "../../Context/CartWishProvider";

const WishList = () => {
  const { wishList, removeFromWishList, addToCart } =
    useContext(cartWishContext);

  return (
    <div className="bg-gradient-to-b from-transparent to-gray-100 py-10">
      <div className="w-5/6 mx-auto">
        <p className="font-semibold text-xl mb-10">WishList</p>
        {wishList.length === 0 ? (
          <p className="text-3xl text-center font-bold">
            Your wishList is empty
          </p>
        ) : (
          wishList.map((item) => (
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
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 mt-2 cursor-pointer font-semibold text-base text-white bg-purple-400 hover:bg-purple-500 duration-300 ease-in-out rounded-full"
                  >
                    Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromWishList(item.product_id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
