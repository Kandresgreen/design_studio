import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  // Add function to handle cookie settings
  const handleCookieSettings = () => {
    // Implementation for cookie settings dialog would go here
    alert(t.footerCookieSettings);
  };

  return (
    <footer className="bg-[rgba(241,244,247,1)] flex w-full flex-col overflow-hidden items-center pt-12 md:pt-16 pb-8 md:pb-12 px-5 sm:px-8 md:px-12 lg:px-[116px]">
      <div className="w-full max-w-[1884px]">
        <div className="flex w-full flex-col md:flex-row text-base">
          {/* Logo and Info */}
          <div className="flex flex-col text-[rgba(89,50,134,1)] font-normal w-full md:w-80 mb-8 md:mb-0">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/c0c4240138138be279efc42010c10acdb8bedd5d?placeholderIfAbsent=true"
                alt="STYLY Logo"
                className="aspect-[2.67] object-contain w-20"
              />
            </Link>
            <div className="w-full mt-4">
              <p className="leading-6">
                {t.footerSlogan}
              </p>
            </div>
            <a
              href="mailto:Contact@styly.io"
              className="mt-3 hover:text-[rgba(250,111,64,1)] transition-colors"
            >
              {t.footerContact}
            </a>
          </div>
          
          {/* Login/Signup Buttons */}
          <div className="flex items-center justify-start md:justify-end flex-wrap gap-3 mb-8 md:mb-0 w-full md:flex-1">
            <Link
              to="/login"
              className="relative flex overflow-hidden text-[rgba(89,50,134,1)] justify-center py-3 px-6 rounded-lg border border-[rgba(89,50,134,1)] transition-all duration-300 hover:bg-purple-50 hover:scale-105"
            >
              <span className="font-medium">{t.footerLogin}</span>
            </Link>
            <Link
              to="/signup"
              className="relative flex overflow-hidden text-white justify-center py-3 px-6 rounded-lg bg-[rgba(250,111,64,1)] transition-all duration-300 hover:opacity-90 hover:scale-105"
            >
              <span className="font-medium">{t.footerSignup}</span>
            </Link>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="relative border-t border-[rgba(250,111,64,1)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <div className="text-base text-black font-normal order-3 md:order-1">
            <p>{t.footerCopyrightYear}</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-base text-black font-normal order-1 md:order-2">
            <Link
              to="/video-guide"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerVideoGuide}
            </Link>
            <Link
              to="/terms"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerTerms}
            </Link>
            <Link
              to="/privacy"
              className="transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline"
            >
              {t.footerPrivacy}
            </Link>
            <button 
              onClick={handleCookieSettings}
              className="text-[rgba(51,51,51,1)] text-center transition-all duration-300 hover:text-[rgba(250,111,64,1)] hover:font-medium hover:underline cursor-pointer"
            >
              {t.footerCookieSettings}
            </button>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 order-2 md:order-3 my-4 md:my-0">
            {[
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "LinkedIn", url: "https://linkedin.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-125 hover:opacity-80"
              >
                <img
                  src={`https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/317bf886270ad921f9e34236d0e5c987e6b6b44f?placeholderIfAbsent=true`}
                  alt={social.name}
                  className="aspect-[1] object-contain w-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
