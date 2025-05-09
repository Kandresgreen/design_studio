import React from "react";
import { Link } from "react-router-dom";

const FeatureTargetMarkets: React.FC = () => {
  const marketSegments = [
    {
      id: "real-estate",
      title: "REAL ESTATE PROFESSIONALS",
      image: "/lovable-uploads/1.png",
      link: "/real-estate"
    },
    {
      id: "homeowners",
      title: "HOMEOWNERS & RENTERS",
      image: "/lovable-uploads/2.png",
      link: "/homeowners"
    },
    {
      id: "startups",
      title: "STARTUPS & TECH-SAVVY CREATORS",
      image: "/lovable-uploads/3.png",
      link: "/startups"
    },
    {
      id: "designers",
      title: "INTERIOR DESIGNERS & ARCHITECTS",
      image: "/lovable-uploads/4.png",
      link: "/designers"
    },
    {
      id: "retailers",
      title: "RETAILERS & BRANDS",
      image: "/lovable-uploads/5.png",
      link: "/retailers"
    },
    {
      id: "wallpaper",
      title: "WALLPAPER BRANDS",
      image: "/lovable-uploads/6.png",
      link: "/wallpaper"
    },
    {
      id: "flooring-wallpaper",
      title: "WALLPAPER & FLOORING BRANDS",
      image: "/lovable-uploads/7.png",
      link: "/flooring-wallpaper"
    },
    {
      id: "flooring",
      title: "FLOORING BRANDS",
      image: "/lovable-uploads/8.png",
      link: "/flooring"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-20">
          <span className="text-purple-800">Designed For</span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-orange-500">Every Industry</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-100 -z-0 transform -rotate-1"></span>
          </span>
        </h2>

        {/* Full width market segments with minimal overlay */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketSegments.map((segment) => (
              <Link 
                key={segment.id}
                to={segment.link}
                className="group relative block overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Large image with adjusted aspect ratio */}
                <div className="aspect-[4/3]">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Minimal label that appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-purple-900/50 backdrop-blur-sm transform transition-transform duration-500 py-4">
                  <h3 className="text-center text-white font-bold text-lg md:text-xl px-4">{segment.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Extra CTA */}
          <div className="text-center mt-16">
            <Link 
              to="/solutions"
              className="inline-flex items-center justify-center bg-purple-700 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg"
            >
              <span>Explore All Solutions</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTargetMarkets; 