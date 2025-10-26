import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main footer content */}
      <div className=" max-w-7xl mx-auto px-6 py-10 flex flex-col  md:flex-row flex-wrap justify-between items-start  gap-10">
        {/* Logo & About */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl font-bold font-serif cursor-pointer mb-4">
            MY AI CARD
          </h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Revolutionizing digital networking with <br /> smart NFC technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/myai_card/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                alt="Instagram"
                className="w-[18px] h-[18px]"
              />
            </a>

            <a
              href="https://www.facebook.com/myai_card/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
                alt="Facebook"
                className="w-[27px] h-[27px]"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/imitpark/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex justify-center items-center bg-zinc-800 rounded-full hover:bg-zinc-700 transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                alt="LinkedIn"
                className="w-[18px] h-[18px]"
              />
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Instant Contact Sharing</li>
            <li>Digital Business Card</li>
            <li>QR Code Integration</li>
            <li>Analytics Dashboard</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-lg font-bold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Documentation</li>
            <li>Blog & Articles</li>
            <li>Help Center</li>
            <li>Community Forum</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@myaicard.com</li>
            <li>Phone: +91 89436 27627</li>
            <li>Location: Bangalore, Karnataka</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-center gap-2 md:gap-6">
        <p className="text-gray-500 text-sm">
          &copy; 2024 <span className="text-orange-500">IMIT Park Ltd</span>.
          All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">Terms of Use | Privacy Policy</p>
        <p className="text-gray-500 text-sm">Return Policy | Refund Policy</p>
        <p className="text-gray-500 text-sm">
          Developed by <span className="text-orange-500">Imitpark Ltd</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
