import React from "react";

const Review = () => {
  const reviews = [
    {
      name: "John Doe",
      position: "Marketing Executive",
      company: "TechNova Solutions",
      text: "MYAICARD has transformed the way I network. The convenience of sharing my contact details with just a tap is incredible!",
      rating: 5,
      avatar:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      position: "Creative Director",
      company: "EcoDesign Agency",
      text: "I love how eco-friendly MYAICARD is. It's great to reduce paper waste while still making a lasting impression.",
      rating: 4,
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Johnson",
      position: "Business Analyst",
      company: "DataCore Pvt. Ltd.",
      text: "The analytics feature is a game-changer. I can see who viewed my card and when, helping me follow up effectively.",
      rating: 5,
      avatar:
        "https://randomuser.me/api/portraits/men/64.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-black via-slate-500 to-gray-300 py-16 px-6">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text text-center mb-10">
          What Our Users Say
        </h1>
        <p className="text-xl md:text-2xl text-white text-center font-semibold mb-7">Discover why industry leaders choose MyAICard for their <br/> digital networking needs</p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-7xl">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < review.rating ? "#facc15" : "#d1d5db"}
                    className="w-6 h-6"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.046 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic text-center mb-6 leading-relaxed">
                “{review.text}”
              </p>

              {/* Reviewer Info */}
              <div className="flex flex-col items-center mt-auto">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-orange-500 shadow-sm"
                />
                <h2 className="text-xl font-bold text-gray-900">
                  {review.name}
                </h2>
                <p className="text-sm text-gray-600 font-medium">
                  {review.position}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {review.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Write a Review Button */}
        <div className="flex justify-center mt-16">
          <button className="cursor-pointer bg-gradient-to-r from-orange-500 to-black text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
            Write a Review
          </button>
        </div>
      </div>
    </>
  );
};

export default Review;
