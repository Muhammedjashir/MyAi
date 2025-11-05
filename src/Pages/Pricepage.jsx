import React from "react";



const Pricepage = () => {
  const features = [
    {
      vdo:"animation.mp4",
      background: "blue.png",
      title: "Digital Starter",
      description: "Perfect for individuals getting started",
      price: "Starts From ₹599.00",
    },
    {
      background: "green.png",
      title: "Business Pro",
      description: "Most popular for professionals",
      price: "Starts From ₹999.00",
    },
    // {
    //   background: "https://cdn-icons-png.flaticon.com/512/1688/1688988.png",
    //   title: "Always Updated",
    //   description:
    //     "Change your information anytime. Your contacts always have access to your latest details.",
    //   price: "",
    // },
  ];
  const plans = [
    {
      background: "blue.png",
      title: "Digital Starter",
      price: "₹599 INR",
      sub: "One-time payment • Lifetime access",
      feature: [
        "1 Digital Card",
        "Basic Customization",
        "Contact Sharing",
        "Standard Support",
        "QR Code Integration",
        "Web Profile",
        "Social Media Links",
        "Unlimited Taps",
      ],
    },
    {
      background: "green.png",
      title: "Business Pro",
      price: "₹999 INR",
      sub: "One-time payment • Lifetime access",
      feature: [
        "1 Digital Cards",
        "1 Physical NFC Card",
        "Advanced Customization",
        "Priority Support",
        "Unlimited Taps",
        "Analytics Dashboard",
        "QR Code Integration",
        "Social Media Links",
        "Custom Branding",
      ],
    },
  ];

  const fea = {
    title: "Plan Comparison",
    feature: [
      { name: "Digital Card", starter: true, pro: true },
      { name: "Physical Card", starter: false, pro: true },
      {
        name: "Customization",
        starter: "Basic",
        pro: "Advanced",
        proType: "text",
      },
      {
        name: "Support",
        starter: "Standard",
        pro: "Priority",
        proType: "text",
      },
      { name: "Analytics", starter: false, pro: true },
      { name: "Taps", starter: "Unlimited", pro: "Unlimited", proType: "text" },
    ],
  };
  

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-black via-slate-500 to-gray-200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text text-center">
          Multiple Options Available
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-semibold mt-4 mb-10">
          For all professions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl mb-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer relative rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Image */}
              {/* <img
                src={feature.background}
                alt={feature.title}
                className="w-full h-110 sm:h-full md:h-120 object-contain"
              /> */}
                <video autoPlay loop muted className="w-full h-110 sm:h-full md:h-120 object-cover ">
                  <source src={feature.vdo} type="video/mp4" />
                </video>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

              {/* Text Content Over Image */}
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                <p className="text-sm sm:text-base mb-2">
                  {feature.description}
                </p>
                {feature.price && (
                  <p className="text-orange-400 font-semibold text-lg">
                    {feature.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl ">
            {plans.map((feature, index) => (
              <div
                key={index}
                className="cursor-pointer relative rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Image */}
                <img
                  src={feature.background}
                  alt={feature.title}
                  className="w-full h-110 sm:h-full md:h-120 object-contain "
                />
              

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

                {/* Text Content Over Image */}
                <div className="absolute top-0 left-0 right-0 p-2 sm:p-4 md:p-6 text-white ">
                  <h2 className="text-4xl font-bold mb-2 text-center">
                    {feature.title}
                  </h2>
                  {feature.price && (
                    <p className="text-orange-400 font-semibold text-2xl text-center">
                      {feature.price}
                    </p>
                  )}
                  <p className="text-sm sm:text-base mb-2 text-center">
                    {feature.sub}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Features:</h3>
                  </div>
                  <div className="h-24 mb-2">
                    <ul className="list-disc pl-4 space-y-1 text-white">
                      {feature.feature &&
                        feature.feature.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden relative right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-2xl shadow-lg mt-10 max-w-6xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            Plan Comparison
          </h2>

          {/* Responsive scroll container */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b border-gray-400 text-gray-200">
                  <th className="text-left py-3 px-2 sm:px-4 font-semibold">
                    Features
                  </th>
                  <th className="text-center py-3 px-2 sm:px-4 font-semibold">
                    Digital Starter
                  </th>
                  <th className="text-center py-3 px-2 sm:px-4 font-semibold text-orange-400">
                    Business Pro
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-100">
                {fea.feature &&
                  fea.feature.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-white/10 transition"
                    >
                      {/* Feature Name */}
                      <td className="py-3 px-2 sm:px-4 font-medium whitespace-nowrap">
                        {item.name}
                      </td>

                      {/* Starter Column */}
                      <td className="text-center py-3 px-2 sm:px-4">
                        {typeof item.starter === "boolean" ? (
                          item.starter ? (
                            <span className="text-green-300 text-lg">✓</span>
                          ) : (
                            <span className="text-green-300">—</span>
                          )
                        ) : (
                          <span className="text-green-300 font-semibold">
                            {item.starter}
                          </span>
                        )}
                      </td>

                      {/* Pro Column */}
                      <td className="text-center py-3 px-2 sm:px-4">
                        {typeof item.pro === "boolean" ? (
                          item.pro ? (
                            <span className="text-orange-400 text-lg">✓</span>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )
                        ) : (
                          <span className="text-orange-400 font-semibold">
                            {item.pro}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricepage;
