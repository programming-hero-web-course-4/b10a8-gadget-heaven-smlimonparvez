import { useParams, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Productdetails = () => {

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const { product_title } = useParams();

  const data = useLoaderData();
  const product = data.find(
    (product) => product.product_title === product_title
  );
  const {
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div className=" w-full bg-gradient-to-b from-transparent to-gray-100">
      <div className="bg-purple-500 flex flex-col justify-center items-center px-10 py-28 md:px-32 md:pt-10 md:pb-36  text-white space-y-7">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Product Details
        </h1>
        <p className="text-center ">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="w-4/5 md:w-3/5 ring ring-offset-1 bg-white ring-white rounded-xl relative bottom-26 p-3 left-2/4 transform -translate-x-1/2">
        <div className="flex gap-8">
          <div className="w-4/10 flex items-center">
            <img
              src={product_image}
              alt="Banner"
              className="w-full object-cover h-96 rounded-xl"
            />
          </div>
          <div className="w-6/10 space-y-2">
            <h2 className="font-bold text-2xl">{product_title}</h2>
            <p className="font-semibold">Price: ${price}</p>
            <p className="rounded-full px-2 bg-green-100 py-0.5 border border-green-500 text-sm w-24 font-semibold">{`${
              availability ? "In Stock" : "Out of stock"
            }`}</p>
            <p className="text-gray-600">{description}</p>
            <p>
              <span className="font-bold">Specification:</span>
              {specification.map((feature, index) => (
                <li className="list-decimal text-gray-600" key={index}>
                  {feature}
                </li>
              ))}
            </p>
            <div>
              <p className="font-bold">
                Rating <i className="fa-solid fa-star text-orange-400"></i>
              </p>
              <div className="flex items-center gap-3">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <p className="bg-gray-200 py-1 px-2 rounded-md w-10 h-8 flex items-center justify-center">
                  {rating}{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 cursor-pointer font-semibold text-base text-white bg-purple-500 rounded-full">
                Add to Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button className="border border-gray-400 rounded-full p-1 cursor-pointer w-6 h-6 ml-2 flex items-center justify-center hover:bg-purple-500 hover:text-white duration-300 ease-in-out">
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
