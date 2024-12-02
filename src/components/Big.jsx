const Big = () => {
  return (
    <div className="py-10 bg-[#E4E4E4]">
      <div className="flex  justify-center  ">
        <div className=" imgContaner w-[90%]  flex justify-center items-center h-[80vh] bg-cover bg-center bg-[url('https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg')] rounded-[30px] transition-all duration-500 hover:rounded-[170px]  bg-yellow-600">
          <img
            src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN.jpg"
            alt=""
            className="centerImg w-[55vh] opacity-0  transition-all duration-500 h-[55vh]  rounded-[100px]  "
          />
        </div>
      </div>
      <div className=" px-6 md:px-16 py-4">
        <h1 className="text-lg text-gray-400">Nieuw Schaijk </h1>
        <h1 className="text-2xl font-semibold mb-2">De smaak van thuis</h1>
        <span className="px-4 text-xs uppercase py-1 border   border-black rounded-xl">
          Brand Story
        </span>
        <span className="px-4 text-xs uppercase py-1 ml-2  border border-black rounded-xl">
          Brand Story
        </span>
      </div>
    </div>
  );
};

export default Big;
