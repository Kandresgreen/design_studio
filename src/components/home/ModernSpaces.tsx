import React from "react";
import { useLanguage } from "@/lib/i18n";

const ModernSpaces: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-white w-full py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto relative">
        {/* Background elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-50 rounded-full opacity-50 blur-3xl -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl -z-10"></div>
        
        {/* Main heading with better line breaks and organization */}
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-5xl">
            <h1 className="font-extrabold text-center mb-6" style={{ fontFamily: "sans-serif" }}>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-black">{t.mostUsedAITool}</span>
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-black">{t.aiDesignTool}</span>
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-black">{t.for}</span>
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="text-[#593286]">{t.modernSpaces}</span>
              </div>
            </h1>
            
            {/* Description text with styled ending */}
            <p className="text-center text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed mb-8">
              <span className="text-gray-700">
                {t.redesignRooms}<br/>
                {t.forRealEstateRenovation}
              </span>{" "}
              <span className="font-semibold text-[#3a2159]">
                {t.noToolsJustResults}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSpaces; 