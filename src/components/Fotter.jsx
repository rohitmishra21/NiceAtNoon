const Fotter = () => {
  return (
    <div className="bg-[#0A0B0C]  text-white ">
      <div className="md:flex justify-between px-6 md:px-16 py-16">
        <div className="">
          <h1 className="text-5xl www mb-3">Let's turn some heads!</h1>
          <button className="btn border after:bg-white duration-500 transition-all border-white">
            Contact
          </button>
        </div>
        <div className="flex gap-5 my-12 md:gap-20">
          <div>
            <h1>Socials</h1>
            <h1>Instagram</h1>
            <h1>LinkedIn</h1>
          </div>
          <div>
            <h1>Sitemap</h1>
            <h2>Home</h2>
            <h2>Projecten</h2>
            <h2>Over</h2>
            <h2>ContaCT</h2>
          </div>
          <div>
            <h1>Info</h1>
            <h2>Algemene voorwaarden</h2>
            <h2>Privacybeleid</h2>
            <h2>Cookiebeleid</h2>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cac5baf9ba36af8ed3ab61_Laag_1.png"
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Fotter;
