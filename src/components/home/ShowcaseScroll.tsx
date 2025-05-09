import React from "react";
import { useLanguage } from "@/lib/i18n";

const ShowcaseScroll: React.FC = () => {
  // Add language debugging
  const { language, t } = useLanguage();
  console.log("Current language in ShowcaseScroll:", language);
  
  // First row of images - from revolution folder
  const topRowImages = [
    "/revolution/1.png",
    "/revolution/3.png",
    "/revolution/5.png",
    "/revolution/7.png",
    "/revolution/9.png",
    // Duplicate for continuous scroll effect
    "/revolution/1.png",
    "/revolution/3.png",
    "/revolution/5.png",
    "/revolution/7.png",
    "/revolution/9.png",
  ];

  // Second row of images - from revolution folder
  const bottomRowImages = [
    "/revolution/12.png",
    "/revolution/13.png",
    "/revolution/15.png",
    "/revolution/18.png",
    "/revolution/9.png",
    // Duplicate for continuous scroll effect
    "/revolution/12.png",
    "/revolution/13.png",
    "/revolution/15.png",
    "/revolution/18.png",
    "/revolution/9.png",
  ];

  return (
    <div className="w-screen -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 overflow-hidden">
      {/* Top row - scrolls from right to left */}
      <div className="flex animate-marquee-left mb-6">
        {topRowImages.map((src, index) => (
          <div key={`top-${index}`} className="h-auto w-[300px] sm:w-[350px] md:w-[500px] flex-shrink-0 mx-2">
            <img
              src={src}
              alt={`Interior Design Showcase ${index + 1}`}
              className="h-full w-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Bottom row - scrolls from left to right */}
      <div className="flex animate-marquee-right">
        {bottomRowImages.map((src, index) => (
          <div key={`bottom-${index}`} className="h-auto w-[300px] sm:w-[350px] md:w-[500px] flex-shrink-0 mx-2">
            <img
            src={src}
              alt={`Interior Design Showcase ${index + 1 + topRowImages.length}`}
              className="h-full w-full object-cover rounded-xl shadow-md"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseScroll;
