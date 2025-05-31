import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export const cartWishContext = createContext();
const CartWishProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [price, setPrice] = useState(0);
  const [active, setActive] = useState(true);
  const [disabledWishlistItems, setDisabledWishlistItems] = useState([]);

  //toggle active
  const toggleActive = (component) => {
    if (component === "active") {
      setActive("true");
    } else {
      setActive(false);
    }
  };

  //  add to cart
  const addToCart = (item) => {
    const isExist = cart.find(
      (product) => product.product_id == item.product_id
    );
    if (isExist) {
      toast("Already Added To Cart");
      return;
    } else {
      setCart((prev) => [...prev, item]);
      setPrice((pr) => pr + item.price);
      toast("Add To Cart successfull");
    }
  };

  //   add to wishlist
  const addToWishList = (item) => {
    const isExit = wishList.find(
      (product) => product.product_id == item.product_id
    );
    if (isExit) {
      toast("Already Added To Wish List");
      return;
    } else {
      setWishList((prev) => [...prev, item]);
      setDisabledWishlistItems((prev) => [...prev, item.product_id]);
      toast("Add To Wish List Successfull");
    }
  };

  const isInWishlist = (productId) => {
    return disabledWishlistItems.includes(productId);
  };

  //   remove from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.product_id !== id);
    // Find the removed item to subtract its price
    const removedItem = cart.find((item) => item.product_id === id);
    setCart(updatedCart);
    if (removedItem) {
      setPrice((pr) => pr - removedItem.price);
    }
    toast("Remove From Cart Successfull");
  };

  //   remove from wishlist
  const removeFromWishList = (id) => {
    const newWishList = wishList.filter(
      (wishItem) => wishItem.product_id !== id
    );
    setWishList(newWishList);
    setDisabledWishlistItems((prev) => prev.filter(itemId => itemId !== id));
    toast("Remove From Wish List Successfull");
  };

  const sortByPrice = () => {
    // Sort in ascending order by price
    const storedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(storedCart);
  };

  const cartWishInfo = {
    cart,
    wishList,
    setCart,
    setWishList,
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
    price,
    setPrice,
    toggleActive,
    active,
    sortByPrice,
    isInWishlist,
  };
  return (
    <cartWishContext.Provider value={cartWishInfo}>
      {children}
      <ToastContainer />
    </cartWishContext.Provider>
  );
};

CartWishProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartWishProvider;
