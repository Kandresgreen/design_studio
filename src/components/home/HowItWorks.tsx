import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const HowItWorks: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Debug output to verify language and translations
  console.log("Current language in HowItWorks:", language);
  console.log("HowItWorks translations:", {
    simpleProcess: t.simpleProcess,
    howItWorks: t.howItWorks,
    transformSpace: t.transformSpace
  });
  
  return (
    <section className="bg-white w-full flex flex-col items-center justify-center py-28 px-4 sm:px-6 md:px-10" key={`how-it-works-${language}`}>
      <div className="w-full max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm uppercase tracking-wider font-semibold text-orange-500 mb-3">{t.simpleProcess}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            {t.howItWorks.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">{t.howItWorks.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.transformSpace}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 relative">
          {/* Connecting line (visible on md screens and up) */}
          <div className="hidden md:block absolute top-12 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100"></div>
          
          {/* Step 1: Upload */}
          <div className="flex flex-col items-center text-center group relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:shadow-lg overflow-hidden border border-purple-100 relative z-10">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="absolute top-0 right-0 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-700 group-hover:scale-110 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">{t.upload}</h3>
            <p className="text-base text-gray-600 max-w-xs mx-auto leading-relaxed">
              {t.uploadDescription}
            </p>
          </div>

          {/* Step 2: Personalize */}
          <div className="flex flex-col items-center text-center group relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:shadow-lg overflow-hidden border border-purple-100 relative z-10">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="absolute top-0 right-0 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-700 group-hover:scale-110 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">{t.personalize}</h3>
            <p className="text-base text-gray-600 max-w-xs mx-auto leading-relaxed" 
               dangerouslySetInnerHTML={{
                 __html: t.personalizeDescription.replace(
                   t.furnitureSelection, 
                   `<span class="text-orange-500 font-medium">${t.furnitureSelection}</span>`
                 )
               }}
            />
          </div>

          {/* Step 3: Enjoy */}
          <div className="flex flex-col items-center text-center group relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center mb-6 shadow-md transition-all duration-300 group-hover:shadow-lg overflow-hidden border border-purple-100 relative z-10">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="absolute top-0 right-0 bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-700 group-hover:scale-110 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">{t.enjoy}</h3>
            <p className="text-base text-gray-600 max-w-xs mx-auto leading-relaxed"
               dangerouslySetInnerHTML={{
                 __html: t.enjoyDescription.replace(
                   t.aiForInteriorDesign, 
                   `<span class="text-orange-500 font-medium">${t.aiForInteriorDesign}</span>`
                 )
               }}
            />
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12 px-4 py-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
          <Link
            to="/get-started"
            className="inline-block text-lg md:text-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
          >
            {t.getStartedFree}
          </Link>
          <div className="text-base md:text-lg text-gray-600 font-medium mt-5 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t.noCreditCard}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
