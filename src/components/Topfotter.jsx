import React from "react";

const Topfotter = () => {
  const top = [
    "Bewakingsdienst van MOOK",
    "Van der Heijden bouw",
    "Speyz",
    "Zeth",
  ];
  const center = [
    "Ozo Verbindzorg",
    "Signal Stream",
    "Gaaf creaties",
    "Lunenburg Events",
  ];

  const end = ["Twofiftyk", "Adekwaad", "Zoet moment", "Forex library"];
  return (
    <div className="md:px-16 px-6 py-16">
      <h1 className="text-3xl ww">Did some cool stuff for</h1>
      <h1 className="w-full h-[0.2px] my-4 bg-black"></h1>
      <div className="md:flex w-[80%] tracking-wider font-semibold leading-loose text-[#AAABAE] uppercase md:text-2xl justify-between">
        <div className="top ">
          {top.map((t, i) => (
            <h1 key={i}>{t}</h1>
          ))}
        </div>
        <div className="center">
          {center.map((t, i) => (
            <h1 key={i}>{t}</h1>
          ))}
        </div>
        <div className="end">
          {end.map((t, i) => (
            <h1 key={i}>{t}</h1>
          ))}
        </div>
      </div>
      <div className="flex justify-end ">
        <img
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bbbf416decd23360ebb88c_get-in-touch-badge.svg"
          alt=""
          className="spin hover:scale-110 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Topfotter;
