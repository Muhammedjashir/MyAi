import React from "react";

const Usecasepage = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-r from-black via-slate-500 to-gray-200">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 to-black text-transparent bg-clip-text text-center">
          Use Cases
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white text-center font-semibold mt-4 mb-10">
          How Our Digital Card Works
        </p>

        {/* Introduction */}
        <div className="max-w-5xl text-white text-lg space-y-8">
          <p>
            Our Smart Digital Card is an NFC-enabled business card designed for everyone.
            It makes sharing your profile as easy as a single tap or scan — no app required.
          </p>

          {/* Step 1 */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              1️⃣ Tap or Scan to Connect
            </h2>
            <p>
              Every card comes with NFC and a QR code.
              <br />• If the phone has NFC: Just tap the card on the phone — your profile instantly opens.
              <br />• If the phone doesn’t have NFC: Simply scan the QR code using the camera.
              <br />Your personalized profile opens instantly on any smartphone or browser.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              2️⃣ View and Share
            </h2>
            <p>
              Your digital card displays everything about you — all in one link:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Name, designation, and company (if any)</li>
                <li>Contact details</li>
                <li>Social media links</li>
                <li>Services, products, portfolio, and gallery</li>
                <li>YouTube channel or videos</li>
              </ul>
              <br />
              Recipients can:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>✅ Save your contact directly</li>
                <li>✅ Visit your social profiles instantly</li>
                <li>✅ Share your card link via WhatsApp, Facebook, or Instagram</li>
              </ul>
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              3️⃣ Update Anytime
            </h2>
            <p>
              You can update your details whenever you want.
              <br />
              No reprinting, no extra cost — your digital card always stays up to date.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              4️⃣ Works for Everyone
            </h2>
            <p>
              That’s the best part — anyone can use it!
              Whether you’re a:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Business owner or entrepreneur</li>
                <li>Doctor, lawyer, or real estate agent</li>
                <li>Freelancer, influencer, or artist</li>
                <li>Student or job seeker</li>
                <li>Or anyone who wants to share contacts or social links easily</li>
              </ul>
              <br />
              👉 If you have something to share — your identity, business, or creativity — our digital card makes it effortless.
            </p>
          </div>

          {/* Step 5 */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              5️⃣ Why People Love It
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Works with both NFC and QR scan</li>
              <li>Easy to update anytime</li>
              <li>Share unlimited times</li>
              <li>Eco-friendly — no paper cards needed</li>
              <li>Looks modern, smart, and professional</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ✨ Start Sharing Smarter
            </h2>
            <p className="text-xl text-gray-200 mb-6">
              One card. Unlimited connections.
            </p>
            <button  className="cursor-pointer border-2 border-white rounded-lg px-6 py-3 bg-transparent text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Get Your  Card Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usecasepage;
