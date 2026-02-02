import React from "react";
import { FaGlobe } from "react-icons/fa";
import MountainData from "../mountains.json";

function Header() {
  const mountainArray = MountainData.mountains;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Bar */}
      <header className="flex items-center justify-center gap-2 bg-[#F55A5A] p-4 text-white shadow-md">
        <FaGlobe className="text-2xl" />
        <h1 className="text-xl font-medium tracking-tight">my travel journal.</h1>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto p-8 flex flex-col gap-10">
        {mountainArray.map((mountain, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-lg overflow-hidden transition-all hover:scale-[1.01]"
          >
            {/* Image Section */}
            <div className="w-full md:w-48 h-64 md:h-44 flex-shrink-0">
              <img 
                src={mountain.image_url} 
                alt={mountain.name} 
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-2 p-4 md:p-0">
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-600">
                  📍 {mountain.location.split(',')[0]}
                </span>
                <a href="#" className="text-gray-400 underline text-xs hover:text-gray-600">
                  View on Google Maps
                </a>
              </div>
              
              <h2 className="text-3xl font-bold text-[#2B283A]">{mountain.name}</h2>
              
              <p className="text-sm font-bold mt-2">
                {mountain.date_of_first_ascent || "Peak Season: " + mountain.peak_season}
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {mountain.description}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Header;