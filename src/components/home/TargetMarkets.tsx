import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface MarketSegment {
  image: string;
  title: string;
  link: string;
}

const TargetMarkets: React.FC = () => {
  // Market segments data with images and titles
  const marketSegments: MarketSegment[] = [
    {
      image: "/lovable-uploads/1.png",
      title: "REAL ESTATE PROFESSIONALS",
      link: "/real-estate"
    },
    {
      image: "/lovable-uploads/2.png",
      title: "HOMEOWNERS & RENTERS",
      link: "/homeowners"
    },
    {
      image: "/lovable-uploads/3.png", 
      title: "STARTUPS & TECH-SAVVY CREATORS",
      link: "/startups"
    },
    {
      image: "/lovable-uploads/4.png",
      title: "INTERIOR DESIGNERS & ARCHITECTS",
      link: "/designers"
    },
    {
      image: "/lovable-uploads/5.png",
      title: "RETAILERS & BRANDS",
      link: "/retailers"
    },
    {
      image: "/lovable-uploads/6.png",
      title: "WALLPAPER BRANDS",
      link: "/wallpaper"
    },
    {
      image: "/lovable-uploads/7.png",
      title: "WALLPAPER & FLOORING BRANDS",
      link: "/flooring-wallpaper"
    },
    {
      image: "/lovable-uploads/8.png",
      title: "FLOORING BRANDS",
      link: "/flooring"
    }
  ];

  // States for controlling automatic sliding
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(marketSegments.length / itemsPerPage);
  const slideRef = useRef<HTMLDivElement>(null);

  // Get current set of market segments to display
  const currentSegments = () => {
    const visibleSegments = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % marketSegments.length;
      visibleSegments.push(marketSegments[index]);
    }
    return visibleSegments;
  };

  // Handle smooth transition between slides
  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    if (slideRef.current) {
      slideRef.current.style.opacity = "0";
      
      setTimeout(() => {
        setStartIndex(newIndex);
        if (slideRef.current) {
          slideRef.current.style.opacity = "1";
        }
        setIsTransitioning(false);
      }, 300);
    } else {
      setStartIndex(newIndex);
      setIsTransitioning(false);
    }
  };

  // Auto slide to next set of images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (startIndex + itemsPerPage) % marketSegments.length;
      changeSlide(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [startIndex, marketSegments.length, isTransitioning]);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Title styled like the image */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 flex items-center justify-center">
            <span className="text-purple-600">✧</span>
            <span className="mx-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase">
              UNLOCK THE POTENTIAL
            </span>
            <span className="text-orange-500">✧</span>
          </h2>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Our AI was inspired by Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi.<br />
            <span className="font-medium">Be inspired as our AI brings your design ideas to life.</span>
          </p>
        </div>

        {/* Two-column layout with larger images that automatically rotates */}
        <div 
          ref={slideRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-10 transition-opacity duration-300 ease-in-out"
        >
          {currentSegments().map((segment, index) => (
            <Link 
              key={`segment-${startIndex + index}`}
              to={segment.link}
              className="block group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white"
            >
              <div className="relative h-full flex flex-col">
                {/* Premium high-quality image with consistent dimensions */}
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img 
                    src={segment.image}
                    alt={segment.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.backgroundColor = "#f3f4f6";
                      (e.target as HTMLImageElement).src = "/lovable-uploads/placeholder.png";
                    }}
                  />
                </div>
                
                {/* Bigger header text at bottom */}
                <div className="py-5 px-4 bg-white">
                  <h3 className="text-center font-bold text-xl md:text-2xl text-gray-800 tracking-wide">
                    {segment.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageStartIndex = index * itemsPerPage % marketSegments.length;
            return (
              <button
                key={`page-${index}`}
                onClick={() => changeSlide(pageStartIndex)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  startIndex === pageStartIndex ? 'bg-purple-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetMarkets; 