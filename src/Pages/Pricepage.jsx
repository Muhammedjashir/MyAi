import React from "react";

const Pricepage = () => {
  const features = [
    {
      background:
        "https://i.pinimg.com/736x/92/1f/0a/921f0ac804d3c171c4f4857002e1c620.jpg",
      title: "Digital Starter",
      description: "Perfect for individuals getting started",
      price: "Starts From ₹599.00",
    },
    {
      background:
        "https://i.pinimg.com/1200x/c9/32/50/c932505004dafda3c343532e0f7675dc.jpg",
      title: "Business Pro",
      description: "Most popular for professionals",
      price: "Starts From ₹999.00",
    },
    {
      background:
        "https://cdn-icons-png.flaticon.com/512/1688/1688988.png",
      title: "Always Updated",
      description:
        "Change your information anytime. Your contacts always have access to your latest details.",
      price: "",
    },
    {
      background:
        "https://cdn-icons-png.flaticon.com/512/1688/1688988.png",
      title: "Always Updated",
      description:
        "Change your information anytime. Your contacts always have access to your latest details.",
      price: "",
    },
    {
      background:
        "https://cdn-icons-png.flaticon.com/512/1688/1688988.png",
      title: "Digital Starter",
      description:
        "Perfect for individuals getting started",
      price: "₹499 INR",
      sub:"One-time payment • Lifetime access",
      feature:" 1 Digital Card ,Basic Customization ,Contact Sharing.,Standard Support,QR Code Integration,Web Profile,Social Media Links,Unlimited Taps ",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-gray-500 via-slate-100 to-gray-500">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text text-center">
        Multiple Options Available
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center font-semibold mt-4 mb-10">
        For all professions
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
  {features.map((feature, index) => (
    <div
      key={index}
      className="relative rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden"
    >
      {/* Image */}
      <img
        src={feature.background}
        alt={feature.title}
        className="w-full h-full sm:h-full md:h-full object-cover"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Text Content Over Image */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
        <p className="text-sm sm:text-base mb-2">{feature.description}</p>
        {feature.price && (
          <p className="text-orange-400 font-semibold text-lg">
            {feature.price}
          </p>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Pricepage;
