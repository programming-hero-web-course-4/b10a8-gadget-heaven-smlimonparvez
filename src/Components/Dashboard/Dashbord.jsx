const Dashbord = () => {
  return (
    <div className="w-full bg-gradient-to-b from-transparent to-gray-100">
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
          <button className="px-5 py-2 w-32 hover:bg-white hover:text-black ease-in-out duration-300 border border-white rounded-full text-white font-bold text-base">
            Cart
          </button>
          <button className="px-5 py-2 w-32 hover:bg-white hover:text-black ease-in-out duration-300 border border-white rounded-full text-white font-bold text-base">
            Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
