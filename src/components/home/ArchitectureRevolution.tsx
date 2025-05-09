import React, { useEffect } from "react";
import ShowcaseScroll from "./ShowcaseScroll";
import { useLanguage } from "@/lib/i18n";

const ArchitectureRevolution: React.FC = () => {
  const { t, language } = useLanguage();

  // Add debug logging
  console.log("ArchitectureRevolution rendering with language:", language);
  console.log("ArchitectureRevolution translations:", {
    architectureRevolution: t.architectureRevolution,
    homeDesignByAI: t.homeDesignByAI,
  });

  // Ensure translation exists or fallback
  const architectureRevolutionText = t.architectureRevolution || "Default Architecture Revolution Text";
  const homeDesignByAIText = t.homeDesignByAI || "Default Home Design by AI Text";

  // Add effect to log when language changes
  useEffect(() => {
    console.log("ArchitectureRevolution language changed to:", language);
  }, [language]);

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 w-full py-28 overflow-hidden">
      <div className="w-full relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full -z-10 blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full -z-10 blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center mb-16 border-y-2 border-[#34495e] py-8 max-w-5xl mx-auto">
            {/* Decorative Top Icon */}
            <div className="text-[#593286] text-4xl mb-4">✧</div>

            {/* Main Heading */}
            <h2 className="relative font-['Nunito']">
              <span className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#593286] to-[#FA6F40] text-2xl tracking-tight leading-tight uppercase drop-shadow-md">
                {architectureRevolutionText}
              </span>
              <span className="inline-block mt-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#593286] to-[#FA6F40] text-2xl tracking-tight leading-tight uppercase drop-shadow-md">
                {homeDesignByAIText}
              </span>
            </h2>

            {/* Decorative Bottom Icon */}
            <div className="text-[#593286] text-4xl mt-4">✧</div>
          </div>
        </div>

        {/* Showcase Scroll Component */}
        <div className="w-full transform hover:scale-[1.01] transition-transform duration-1000">
          <ShowcaseScroll />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureRevolution;
