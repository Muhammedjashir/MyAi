import React from "react";

function Landingpage() {
  return (
    <>
      <div>
        <div className="relative min-h-screen w-full bg-cover bg-center">
          {/* Background */}
          <img
            // src="./background.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>

          {/* Main Layout */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-40">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center ">
              <h1 className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-900">
                A SMART WAY TO CONNECT
              </h1>

              {/* <p className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text">
                Smart business cards <br />
                That Speak for You.
              </p> */}

              <p className="mt-8 text-base sm:text-lg text-gray-700">
                Create stunning digital NFC cards that make sharing <br />
                <span className="text-black font-semibold">
                  contacts effortless and memorable.
                </span>
              </p>

              <div className="mt-20 bottom-0 sm:bottom-10 flex flex-col sm:flex-row w-full gap-4 sm:space-x-6 px-4">
                <button className="border-2 rounded-lg px-10 sm:px-20 py-3 bg-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
                  Explore Cards
                </button>
                <button className="border-1 rounded-lg px-10 sm:px-20 py-3 font-semibold hover:scale-105 transition-transform duration-300 hover:bg-gray-100 cursor-pointer">
                  See How it Works
                </button>
              </div>
            </div>

            {/* Right Side Full Image */}
            <div className="flex-1 relative h-full w-full">
              <img
                src="card.jpg"
                alt="Card"
                className="absolute right-0 top-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
