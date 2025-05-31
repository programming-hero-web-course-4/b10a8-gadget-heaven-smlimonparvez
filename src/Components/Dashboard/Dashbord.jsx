import { useContext } from "react";
import { cartWishContext } from "../../Context/CartWishProvider";
import Cart from "../Cart/Cart";
import WishList from "../wishList/WishList";

const Dashbord = () => {
  const { active, toggleActive } = useContext(cartWishContext);

  return (
    <div className="">
      <div className="bg-purple-500 flex flex-col justify-center items-center px-10 py-28 md:px-32 md:py-10  text-white space-y-7">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Dashboard
        </h1>
        <p className="text-center ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => toggleActive("active")}
            className={`px-5 py-2 w-32 text-center ease-in-out duration-300 border border-white rounded-full font-bold text-base ${
              active
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black ease-in-out duration-300"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => toggleActive("notActive")}
            className={`px-5 py-2 w-32 text-center ease-in-out duration-300 border border-white rounded-full font-bold text-base ${
              active
                ? "hover:bg-white hover:text-black ease-in-out duration-300"
                : "bg-white text-black"
            }`}
          >
            Wish List
          </button>
        </div>
      </div>
      <div>{active ? <Cart /> : <WishList />}</div>
    </div>
  );
};

export default Dashbord;
