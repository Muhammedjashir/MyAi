import React, { useState } from "react";
import "./Header.css"; // for underline animation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSearch,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const countries = [
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "India", flag: "🇮🇳" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "China", flag: "🇨🇳" },
    { name: "South Korea", flag: "🇰🇷" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "South Africa", flag: "🇿🇦" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Sweden", flag: "🇸🇪" },
  ];

  return (
    <>
      {/* Navbar Section */}
      <div className="bg-zinc-900 text-white p-3 flex justify-between md:justify-between items-center fixed w-full top-0 left-0 z-10 px-6">
        {/* Logo */}
        <button
          className="text-2xl font-bold font-serif cursor-pointer"
        >
          MyAICard
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <button className="text-xl font-bold nav-item cursor-pointer hover:text-orange-400 transition-all">
            Docs
          </button>
          <button
            className="text-xl font-bold nav-item cursor-pointer hover:text-orange-400 transition-all"
          >
            Features
          </button>
          <button className="text-xl font-bold nav-item cursor-pointer hover:text-orange-400 transition-all">
            Use Case
          </button>
          <button
            className="text-xl font-bold nav-item cursor-pointer hover:text-orange-400 transition-all"
            onClick={() =>
              window.open("https://imitpark.com/contact", "_blank")
            }
          >
            Contact
          </button>
        </div>

        {/* Right Side: Search + Country Selector */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 border-b border-gray-500 pb-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-white text-lg cursor-pointer hover:text-orange-400 transition-all"
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-28 focus:w-40 transition-all duration-300"
            />
          </div>

          {/* Country Selector with Flag */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGlobe} className="text-orange-400" />
            <select
              className="bg-zinc-900 border border-gray-600 text-white px-2 py-1 rounded-md text-sm focus:outline-none cursor-pointer"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option
                  key={country.name}
                  value={country.name}
                  className="text-white"
                >
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 text-white flex flex-col items-center gap-4 py-6 fixed w-full top-[60px] left-0 z-20 shadow-lg transition-all">
          {/* Search Input (Mobile) */}
          <div className="flex items-center gap-2 w-10/12 border-b border-gray-500 pb-2">
            <FontAwesomeIcon icon={faSearch} className="text-orange-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
            />
          </div>

          {/* Country Selector (Mobile) */}
          <div className="flex items-center gap-2 w-10/12">
            <FontAwesomeIcon icon={faGlobe} className="text-orange-400" />
            <select
              className="bg-zinc-900 border border-gray-600 text-white px-2 py-1 rounded-md text-sm focus:outline-none w-full cursor-pointer"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option
                  key={country.name}
                  value={country.name}
                  className="text-white"
                >
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Links */}
          {["Docs", "Features", "Use Case", "Resources", "Contact"].map(
            (item) => (
              <h1
                key={item}
                className="text-lg font-semibold hover:text-orange-400 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </h1>
            )
          )}
        </div>
      )}
    </>
  );
};

export default Header;
