import React from "react";
import { useLanguage } from "@/lib/i18n";

const VideoSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-purple-50 py-32 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
            <span className="block transform -skew-y-1">{t.seeItInAction}</span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-700 max-w-3xl mx-auto font-light">
            See how our AI platform transforms interior design with just a few clicks
          </p>
        </div>
        
        <div className="w-full mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/I-8ur3hBTnM" 
              title="Revolutionize Your Space with AI Home & Room Design | Styly.io" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.watchDemo}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection; 