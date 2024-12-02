import { IoIosArrowRoundForward } from "react-icons/io";

const Bag = () => {
  const pic = [
    {
      img:
        "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg",
      head: "brand story",
      para:
        "Samen creëren we een sterk fundament voor een onweerstaanbaar design.",
      bg: "#AA81B7",
    },

    {
      img:
        "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit.jpg",
      head: "makedintit",
      para:
        "De visuele vertaling van jouw merkverhaal. Een herkenbaar en onvergetelijk merkbeeld.",
      bg: "#10100F",
    },

    {
      img:
        "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign.jpg",
      head: "webdesign",
      para:
        "Merkgerichte websites op een methodische wijze. Custom made &amp; tailor made. ",
      bg: "#36A96A",
    },

    {
      img:
        "https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte.jpg",
      head: "A la carte",
      para:
        "Ondersteuning op het gebied van design, social media en content creatie.",
      bg: "#FA8A58",
    },
  ];
  return (
    <div className="md:px-16 px-6 py-32">
      <div>
        <h1>Services</h1>
        <div className="md:flex justify-between py-10">
          <h1 className="text-3xl www">
            Zo onderscheiden we je <br className="hidden md:block" /> van de
            norm Lees meer
          </h1>
          <div className="">
            <button className="btn bg-black after:bg-white duration-500 transition-all text-white flex items-center gap-4">
              Lees meer <IoIosArrowRoundForward size={30} />
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          {pic.map((img, i) => (
            <div
              key={i}
              className="w-[50vh] group rounded-[40px] overflow-hidden h-[65vh] "
            >
              <div className="h-[60%]   ">
                <img
                  src={img.img}
                  alt=""
                  className="w-full h-full  transition-all duration-500 group-hover:rounded-[70px]  object-cover"
                />
              </div>
              <div
                className={`h-[40%] text-white group-hover:rounded-[70px] transition-all duration-500 `}
                style={{ backgroundColor: img.bg }}
              >
                <h1 className="text-xl capitalize  p-8">{img.head}</h1>
                <h1 className="px-8">{img.para}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="md:w-[80%] text-xl md:text-3xl py-16">
        NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon
        en allergisch voor bureau blabla, gaan we lekker samen aan de slag met
        jouw merk. En dat moet vooral leuk zijn! Want plezier nemen we serieus.
        Vanuit daar ontstaat enthousiasme, trots en het zelfvertrouwen om jouw
        merk de uitstraling te geven die het verdient.
      </h1>

      <button className="btn bg-black float-start transition-all duration-500 after:bg-white items-center gap-2 text-white">
        Contact <IoIosArrowRoundForward size={30} />
      </button>
    </div>
  );
};

export default Bag;
