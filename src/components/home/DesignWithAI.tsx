import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const DesignWithAI: React.FC = () => {
  const { t, language } = useLanguage();
  const [activePage, setActivePage] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  
  // Debug logs to verify language and translations
  console.log("Current language in DesignWithAI:", language);
  console.log("Design section translations:", {
    designExcellence: t.designExcellence,
    explore: t.explore
  });

  const marketSegments = [
    {
      title: t.realEstateProfessionals,
      image: "/lovable-uploads/1.png",
      link: "/real-estate",
    },
    {
      title: t.homeownersRenters,
      image: "/lovable-uploads/2.png",
      link: "/homeowners",
    },
    {
      title: t.startupsTechCreators,
      image: "/lovable-uploads/3.png",
      link: "/startups",
    },
    {
      title: t.interiorDesignersArchitects,
      image: "/lovable-uploads/4.png",
      link: "/interior-designers",
    },
    // Additional 4 market segments
    {
      title: t.retailersBrands,
      image: "/lovable-uploads/5.png",
      link: "/retailers",
    },
    {
      title: t.wallpaperBrands,
      image: "/lovable-uploads/6.png",
      link: "/wallpaper-brands",
    },
    {
      title: t.wallpaperFlooringBrands,
      image: "/lovable-uploads/7.png",
      link: "/commercial-spaces",
    },
    {
      title: t.flooringBrands,
      image: "/lovable-uploads/8.png",
      link: "/architects",
    },
  ];

  const totalPages = Math.ceil(marketSegments.length / 4);

  // Auto-advance carousel
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages);
    }, 5000); // Change slides every 5 seconds
    
    return () => clearInterval(interval);
  }, [autoSlide, totalPages]);

  // Pause auto-slide when user interacts
  const handleManualChange = (pageIndex: number) => {
    setActivePage(pageIndex);
    setAutoSlide(false);
    
    // Resume auto-slide after 10 seconds of inactivity
    setTimeout(() => {
      setAutoSlide(true);
    }, 10000);
  };

  // Get current visible segments
  const visibleSegments = marketSegments.slice(activePage * 4, (activePage * 4) + 4);

  return (
    <section className="bg-white w-full py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto relative">
        {/* Background elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-50 rounded-full opacity-50 blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl -z-10"></div>
        
        {/* Heading section with refined styling */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="inline-block mb-3">
            <span className="text-sm uppercase tracking-widest font-semibold text-purple-600 bg-purple-50 px-4 py-1 rounded-full">{t.designExcellence}</span>
          </div>
          
          {/* Enhanced heading with larger stars and professional color scheme */}
          <div className="text-center mb-12 border-y-2 border-[#34495e] py-6 px-4 sm:px-8 md:px-12 lg:px-20 w-full max-w-5xl">
            <div className="text-[#593286] text-4xl mb-3">✧</div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center uppercase tracking-widest">
              <span className="bg-gradient-to-r from-[#1a2a36] via-[#2c3e50] to-[#1a2a36] bg-clip-text text-transparent drop-shadow-md">
                {t.tailoredSolutionsForEveryNeed}
              </span>
            </h2>
            <div className="text-[#593286] text-4xl mt-3">✧</div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
            {t.aiDesignToolServesDiverseMarkets}
          </p>
        </div>

        {/* Market segments carousel - 2x2 layout with larger images */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 transition-opacity duration-500">
            {visibleSegments.map((segment, index) => (
              <div key={`${activePage}-${index}`} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:translate-y-[-5px]">
                <Link to={segment.link} className="block">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="eager"
                    />
                  </div>
                  <div className="py-6 px-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-lg md:text-xl">{segment.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-3">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`h-4 w-4 rounded-full transition-all ${
                    index === activePage ? "bg-purple-600 w-10" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Arrow navigation - moved further out for larger images */}
          <button
            onClick={() => handleManualChange((activePage - 1 + totalPages) % totalPages)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleManualChange((activePage + 1) % totalPages)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DesignWithAI; 