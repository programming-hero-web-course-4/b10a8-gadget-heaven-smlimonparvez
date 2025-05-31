

const Banner = () => {
  return (
    <div>
      <div className=" w-11/12 mx-auto">
        <div className="bg-purple-500 rounded-b-2xl flex flex-col justify-center items-center px-10 py-28 md:px-32 md:py-36  text-white space-y-7">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Upgrade Your Tech Accessorize with{" "}
            <br className="hidden md:block" /> Gadget Heaven Accessories
          </h1>
          <p className="text-center ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <button className="px-5 py-2 bg-white rounded-full text-purple-500 font-bold text-base">
            Shop Now
          </button>
        </div>
        <div className="w-4/5 md:w-3/5 ring ring-offset-1 bg-purple-400 ring-white rounded-xl relative bottom-26 p-3 left-2/4 transform -translate-x-1/2">
          <img
            src="https://i.postimg.cc/ZRGnkkDF/banner.jpg"
            alt="Banner"
            className="w-full object-cover h-96 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
