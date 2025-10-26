import React, { useEffect, useState } from "react";

const Slide = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    // {
    //   src: "green.png",
    //   bg: "#A8E6A1", // green
    // },
    // {
    //   src: "blue.png",
    //   bg: "#A4C7F8", // blue
    // },
    {
      src: "red.png",
      bg: "#F8A4A4", // red
    },
    // {
    //   src: "white.png",
    //   bg: "#EAEAEA", // white
    // },
    // {
    //   src: "black.png",
    //   bg: "#555555", // black
    // },
    {
      src: "Gold.png",
      bg: "#f1ce76", // gold
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const getClassName = (index) => {
    if (index === imageIndex) return "active";
    if (index === (imageIndex - 1 + images.length) % images.length)
      return "previous";
    if (index === (imageIndex + 1) % images.length) return "next";
    return "inactive";
  };

  return (
    <div
      className="relative flex flex-col md:flex-row  items-center min-h-screen overflow-hidden transition-all duration-[500ms] ease-in-out"
      style={{
        background: `radial-gradient(circle, ${images[imageIndex].bg} 30%, #ffffff 100%)`,
      }}
    >
      {/* Text Section */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 py-26 md:py-34 max-w-[90%] md:max-w-[700px] text-black">
       <h1 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold">A SMART WAY TO CONNECT</h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text mb-5">
          Smart business cards That Speak for You.{" "}
        </h1>
        <p className=" text-base md:text-lg leading-relaxed  text-gray-800">
          Create stunning digital NFC cards that make sharing <br/>
          <span className="text-black font-semibold"> contacts
          effortless and memorable. </span>
        </p>

        {/* <div className="flex gap-4">
          <a
            href="#"
            className="border-1 border-gray-700 rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] flex justify-center items-center hover:bg-black/10 transition-all duration-500"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
              alt="Facebook"
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
            />
          </a>
          <a
            href="#"
            className="border-1 border-gray-700 rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] flex justify-center items-center hover:bg-black/10 transition-all duration-500"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"
              alt="Instagram"
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
            />
          </a>
        </div> */}
      </div>

      {/* Product Slider Images */}
      <div className="relative z-10 w-full md:w-1/2 h-[120px] md:h-[600px] flex justify-center items-center md:mt-10">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`slide-${index}`}
            className={`absolute object-contain max-w-[220px] md:max-w-[400px] transition-all duration-[2000ms] ease-in-out ${
              getClassName(index) === "active"
                ? "opacity-100 scale-100 blur-0 translate-y-[-50%] left-1/2 -translate-x-1/2 top-1/2 z-[3]"
                : getClassName(index) === "previous"
                ? "opacity-70 blur-[25px] left-[70%] top-[80%] z-[2]"
                : getClassName(index) === "next"
                ? "opacity-70 blur-[35px] left-[90%] top-[20%] scale-[0.3] z-[2]"
                : "opacity-0 blur-[35px] left-[100%] top-[100%] scale-[0.3] z-[1]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
