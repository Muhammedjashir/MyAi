import React from "react";

const Secpage = () => {
  const Rating = [
    { rate: "10K+", title: "Cards Shared" },
    { rate: "99%", title: "Success Rate" },
    { rate: "24/7+", title: "Support Availability" },
    { rate: "1s", title: "Tap Speed" },
  ];
  const features = [
    {
      logo: "/Logos/share.jpg",
      title: "Instant Sharing",
      description:
        "Share contact info with a simple tap. No more manual typing or exchanging physical cards.",
    },
    {
      logo: "/Logos/eco.png",
      title: "Eco-Friendly",
      description:
        "Go paperless and reduce waste. One digital card replaces thousands of paper business cards.",
    },
    {
      logo: "/Logos/update.png",
      title: "Always Updated",
      description:
        "Change your information anytime. Your contacts always have access to your latest details.",
    },
    {
      logo: "/Logos/analitics.png",
      title: "Smart Analytics",
      description:
        "Track engagements and get valuable insights about your networking interactions.",
    },
    {
      logo: "/Logos/secure.png",
      title: "Secure & Private",
      description:
        "Enterprise-grade security ensures your contact information remains safe and protected.",
    },
    {
      logo: "/Logos/universal.png",
      title: "Universal Compatibility",
      description:
        "Works with all modern smartphones. No special app required for your contacts.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-cover flex flex-col items-center gap-6 px-6 bg-gradient-to-r from-black via-slate-500 to-white py-10 md:py-20">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text text-center">
        Why Choose MYAICARD
      </h1>
      <p className="text-xl md:text-2xl text-white text-center font-semibold mb-10">
        Revolutionize your networking experience with our <br /> intelligent
        digital NFC solutions
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-x-105 hover:scale-y-105 duration-300"
          >
            <img
              src={feature.logo}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-10 px-4">
        <div className="flex flex-wrap justify-center  sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 mt-6">
          {Rating.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-2 text-center p-4 sm:p-6"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-orange-500">
                {item.rate}
              </span>
              <span className="text-lg sm:text-xl font-medium text-blue-900">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secpage;
