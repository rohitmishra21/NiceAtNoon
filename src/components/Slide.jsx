import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Slide = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const imges = [
    "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header-p-1080.webp",
    "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-1080.webp",
    "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbdd62241c685d9999607_DM_Ashtray-min-p-1080.webp",
    "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-1080.webp",
    "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0f2f8c562d5ec23fe20e_VANMOOK_HEADER-p-1080.webp",
    "https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-1080.webp",
  ];
  return (
    <motion.div className="w-full overflow-x-hidden  bg-[#E4E4E4]  py-10 flex px-5 gap-7 whitespace-nowrap items-center ">
      {imges.map((img, i) => (
        <motion.div
          animate={{ x: -scrollY }}
          transition={{ type: "tween", ease: "linear" }}
          key={i}
          className="rounded-lg contaner"
        >
          <div className="md:w-[65vh] w-[50vh] h-[85vh] md:h-[95vh] rounded-[100px] overflow-hidden bg-blue-600">
            <img src={img} className="w-full h-full object-cover" alt="" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Slide;
