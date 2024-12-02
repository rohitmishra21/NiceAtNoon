const Main = () => {
  return (
    <div className="bg-[#E4E4E4] ">
      <div className=" text-center relative">
        <h1 className="ww text-xl  py-16">cases</h1>
        <h1 className="www text-5xl md:text-9xl uppercase">Head Turning</h1>
        <h1 className="www text-5xl md:text-9xl uppercase">Projects</h1>
        <h1 className="md:py-4 py-2 px-7 bg-yellow-400 absolute -bottom-10 md:bottom-0 -rotate-12 md:left-[60%] rounded-[30px] text-xl">
          Gotta see 'm all
        </h1>
      </div>
      <div className="flex justify-end py-10 px-10">
        <button className="btn  bg-white duration-300 after:bg-black transition-all">
          Alle projecten
        </button>
      </div>
    </div>
  );
};

export default Main;
