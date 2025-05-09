import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/lib/i18n";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  // Structured data specifically for the hero section 
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "STYLY AI Interior Design Platform",
    "description": "AI-powered platform that transforms empty spaces into beautifully furnished, realistic visuals with just a photo upload or description.",
    "image": "/aiinterior.png",
    "brand": {
      "@type": "Brand",
      "name": "STYLY"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "20000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(heroStructuredData)}
        </script>
      </Helmet>
      <section 
        className="flex w-full flex-col items-center justify-center px-2 py-14 md:py-20 lg:py-28 bg-white" 
        aria-label="Hero section"
        itemScope 
        itemType="https://schema.org/WebPageElement"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center px-4">
          {/* Premium Welcome banner */}
          <div
            className="px-7 sm:px-10 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg md:text-xl shadow-xl mb-8 sm:mb-12 transform hover:scale-105 transition-all duration-500 cursor-pointer select-none"
            style={{
              background: "linear-gradient(90deg, rgba(89,50,134,1) 0%, rgba(250,111,64,1) 100%)",
              boxShadow: "0 10px 25px -5px rgba(89,50,134,0.3), 0 8px 10px -6px rgba(250,111,64,0.2)"
            }}
            role="banner"
            aria-label="Welcome to the Future of Design"
          >
            {t.welcomeToFuture}
          </div>

          {/* Main heading - Using width effectively with responsive sizing */}
          <div className="w-full font-baloo text-5xl font-bold max-w-[1200px] mx-auto mb-7 sm:mb-8 md:mb-10">
            <h1 className="sr-only">STYLY - #1 most used AI design tool for modern spaces</h1>
            
            <div className="flex flex-col items-center justify-center font-extrabold tracking-tight leading-[0.9] font-baloo  font-medium	">
              <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-1 xs:mb-2 w-full ">
                {t.mostUsedAITool}
              </h2>
              
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 xs:mb-2 w-full">
                {t.aiDesignTool}
              </h2>
              
              <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-0 xs:mb-1 w-full">
                {t.for}
              </h2>
              
              <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl w-full text-purple-900 bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
                {t.modernSpaces}
              </h2>
            </div>
          </div>

          {/* Description - Optimized text size and line breaks for different screens */}
          <div className="w-full max-w-4xl text-center text-[rgba(44,30,73,1)] mb-7 sm:mb-8 md:mb-10 leading-snug tracking-wide font-montagu"  itemProp="description">
            <p className="text-base xs:text-lg sm:text-xl font-light leading-tight  ">
              {t.redesignEmptyRooms}
              <br className="hidden sm:block" />
              {t.forRealEstate}
              <span className="font-extrabold "> {t.noToolsNoDownloads}</span>.
            </p>
          </div>
          

          {/* Award badge - Using the aiinterior.png image with optimizations */}
          <div className="mb-7 sm:mb-8 md:mb-10 flex justify-center transform hover:scale-110 transition-transform duration-500">
            <img 
              src="/aiinterior.png" 
              alt="STYLY awarded #1 AI Interior Design App of 2024 - Top-rated virtual staging solution for real estate and interior design professionals"
              title="STYLY - #1 AI Interior Design App of 2024"
              className="h-20 xs:h-24 md:h-28 w-auto drop-shadow-lg"
              width="180" 
              height="128"
              loading="eager"
              decoding="async"
              itemProp="image"
            />
          </div>

          {/* CTA Button */}
          <Link
            to="/upload"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-7 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-7 sm:mb-8 md:mb-10 transform"
            aria-label="Upload a photo to redesign your space with AI"
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/Action"
          >
            <span itemProp="name">{t.uploadPhoto}</span>
          </Link>

          {/* Supporting text */}
          <p className="text-gray-900 font-semibold text-xs xs:text-sm md:text-lg lg:text-xl text-[#A5A5A5] ">
            {t.supporting} <span itemProp="userInteractionCount">{t.realEstatePros}</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
