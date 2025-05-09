import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface MarketSegment {
  id: number;
  title: string;
  image: string;
  link: string;
}

const MarketSegmentCarousel: React.FC = () => {
  const { t, language } = useLanguage();
  
  console.log("MarketSegmentCarousel rendering with language:", language);
  console.log("MarketSegmentCarousel translations:", {
    tailoredSolutions: t.tailoredSolutionsForEveryNeed,
    aiDesignTool: t.aiDesignToolServesDiverseMarkets,
    realEstateProfessionals: t.realEstateProfessionals
  });

  const marketSegments: MarketSegment[] = [
    {
      id: 1,
      title: t.realEstateProfessionals,
      image: "/lovable-uploads/real-estate.png",
      link: "#real-estate"
    },
    {
      id: 2,
      title: t.homeownersRenters,
      image: "/lovable-uploads/homeowners.png",
      link: "#homeowners"
    },
    {
      id: 3,
      title: t.startupsTechCreators,
      image: "/lovable-uploads/startups.png",
      link: "#startups"
    },
    {
      id: 4,
      title: t.interiorDesignersArchitects,
      image: "/lovable-uploads/interior-designers.png",
      link: "#designers"
    },
    {
      id: 5,
      title: t.retailersBrands,
      image: "/lovable-uploads/retailers.png",
      link: "#retailers"
    },
    {
      id: 6,
      title: t.wallpaperBrands,
      image: "/lovable-uploads/wallpaper.png",
      link: "#wallpaper"
    },
    {
      id: 7,
      title: t.wallpaperFlooringBrands,
      image: "/lovable-uploads/home-decor.png",
      link: "#flooring"
    },
    {
      id: 8,
      title: t.flooringBrands,
      image: "/lovable-uploads/flooring.png",
      link: "#flooring-brands"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % marketSegments.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + marketSegments.length) % marketSegments.length);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            {t.tailoredSolutionsForEveryNeed}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.aiDesignToolServesDiverseMarkets}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] md:aspect-[3/2] lg:aspect-[16/9] mb-6 overflow-hidden rounded-xl shadow-xl">
            <div className="absolute inset-0 bg-black/30 z-10 flex items-end">
              <div className="p-6 text-white w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {marketSegments[activeIndex].title}
                </h3>
              </div>
            </div>
            <Link to={marketSegments[activeIndex].link} className="block w-full h-full relative">
              <img
                src={marketSegments[activeIndex].image}
                alt={marketSegments[activeIndex].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
            </Link>
            
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
            {marketSegments.map((segment, index) => (
              <button
                key={segment.id}
                onClick={() => goToIndex(index)}
                className={clsx(
                  "relative aspect-square overflow-hidden rounded-lg transition-all",
                  activeIndex === index ? "ring-4 ring-blue-500 scale-105" : "opacity-70 hover:opacity-100"
                )}
                aria-label={`View ${segment.title}`}
              >
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSegmentCarousel; 