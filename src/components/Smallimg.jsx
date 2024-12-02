import { IoIosArrowRoundForward } from "react-icons/io";
const Smallimg = () => {
  return (
    <div className="bg-[#E4E4E4] py-10 px-6 md:px-16">
      <div className="py-10 ">
        <div className=" md:flex w-full  gap-6">
          <div className=" w-full ">
            <div className=" imgContaner flex justify-center items-center h-[70vh] bg-cover bg-center bg-[url('https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg')] rounded-[30px] transition-all duration-500 hover:rounded-[110px]  bg-yellow-600">
              <img
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-2000.jpg"
                alt=""
                className="centerImg w-[55vh] opacity-0  transition-all duration-500 h-[55vh]  rounded-[100px]  "
              />
            </div>
            <div className="  py-4">
              <h1 className="text-lg text-gray-400">Nieuw Schaijk </h1>
              <h1 className="text-2xl font-semibold mb-2">
                Creating mood-boosting experiences
              </h1>
              <span className="px-4 text-xs uppercase py-1 border   border-black rounded-xl">
                Brand Story
              </span>
              <span className="px-4 text-xs uppercase py-1 ml-2  border border-black rounded-xl">
                Brand Story
              </span>
            </div>
          </div>
          <div className="my-6 md:my-0 w-full ">
            <div className=" imgContaner  flex justify-center items-center h-[90vh] bg-cover bg-center bg-[url('https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-2000.jpg')] rounded-[30px] transition-all duration-500 hover:rounded-[110px]  bg-yellow-600">
              <img
                src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb59c356882b9497fea77_DM_Hand%20Holding%20Pin-min-p-2000.jpg"
                alt=""
                className="centerImg w-[55vh] opacity-0  transition-all duration-500 h-[55vh]  rounded-[100px]  "
              />
            </div>
            <div className="px-6 md:px-16 py-4">
              <h1 className="text-lg text-gray-400">Nieuw Schaijk </h1>
              <h1 className="text-2xl font-semibold mb-2">
                Campaigners for eventful brands
              </h1>
              <button className="px-4 text-xs uppercase py-1 border   border-black rounded-xl">
                Brand Story
              </button>
              <button className="px-4 text-xs uppercase py-1 ml-2  border border-black rounded-xl">
                Brand Story
              </button>
              <button className="px-4 mt-3 text-xs uppercase py-1 md:ml-2  border border-black rounded-xl">
                wbdesign
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex md:w-1/2 items-center rounded-2xl px-9 mt-11 justify-between py-11 md:py-0 bg-white">
          <h1 className="ww">Ook aan de slag met jouw merk?</h1>
          <div className="flex bg-white border-2 border-black transition-all duration-500 items-center gap-3 btn">
            <button>Lets Meet</button>
            <IoIosArrowRoundForward size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smallimg;
