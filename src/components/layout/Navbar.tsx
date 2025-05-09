import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n";

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Debug log for current language
  console.log("Current language in Navbar:", language);

  // Debug effect to monitor language changes
  useEffect(() => {
    console.log("Language changed to:", language);
  }, [language]);

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Enhanced language switcher with debug
  const handleLanguageChange = (lang: "en" | "fr") => {
    console.log("Language switch requested to:", lang);
    setLanguage(lang);
  };

  return (
    <header className="bg-white relative flex min-h-[100px] w-full items-center overflow-hidden justify-between px-5 sm:px-10 lg:px-20 py-[11px] max-md:max-w-full border-b border-gray-800 z-20">
      <div className="self-stretch z-10 flex min-w-60 min-h-[79px] items-center flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
            alt="STYLY Logo"
            className="aspect-[2.28] object-contain w-[132px] self-stretch my-auto"
          />
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        className="z-20 md:hidden flex items-center text-purple-700 hover:text-purple-900 transition-all"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="self-stretch z-10 hidden md:flex min-w-60 min-h-11 items-center gap-4 justify-center my-auto">
        <div className="flex items-center justify-start md:justify-end flex-wrap gap-3 mb-8 md:mb-0 w-full md:flex-1">
          <Link
            to="/pricing"
            className="relative flex overflow-hidden font-medium text-[rgba(89,50,134,1)] justify-center py-2 px-5 rounded-lg max-md:px-5 border border-[rgba(89,50,134,1)] transition-all duration-200 focus:out-of-range focus:ring-2 hover:bg-purple-50 hover:scale-105"
            aria-label="Go to Pricing"
          >
            <div className="bg-white absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-10 w-full">
              <div className="w-full">{t.pricing}</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-start md:justify-end flex-wrap gap-3 mb-8 md:mb-0 w-full md:flex-1">
          <Link
            to="/blog"
            className="relative flex overflow-hidden font-medium text-[rgba(89,50,134,1)] justify-center py-2 px-5 rounded-lg max-md:px-5 border border-[rgba(89,50,134,1)] transition-all duration-200 focus:out-of-range focus:ring-2 hover:bg-purple-50 hover:scale-105"
            aria-label="Go to Blog"
          >
            <div className="bg-white absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-10 w-full">
              <div className="w-full">{t.blog}</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-start md:justify-end flex-wrap gap-3 mb-8 md:mb-0 w-full md:flex-1">
          <Link
            to="/signin"
            className="relative flex overflow-hidden font-medium text-[rgba(89,50,134,1)] justify-center py-2 px-5 rounded-lg max-md:px-5 border border-[rgba(89,50,134,1)] transition-all duration-300 focus:out-of-range focus:ring-2 hover:bg-purple-50 hover:scale-105"
          >
            <div className="bg-[rgba(250,111,64,1)] absolute z-0 flex min-h-11 w-full rounded-lg inset-0" />
            <div className="self-center z-10 w-full">
              <div className="w-full">
                <a className="text-white whitespace-nowrap inline-block">
                  {t.signIn}
                </a>
              </div>
            </div>
          </Link>
        </div>
        <div className="self-stretch my-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white flex items-center gap-[5px] overflow-hidden justify-center pt-1 pb-[5px] rounded-md px-2 transition-all duration-300 hover:bg-gray-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200">
              <div className="self-stretch text-[15px] text-[rgba(89,50,134,1)] font-medium whitespace-nowrap tracking-[-0.15px] leading-[30px] w-[51px] my-auto">
                <div className="w-full pb-px">
                  {language === "en" ? "English" : "Français"}
                </div>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-[rgba(89,50,134,1)]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white border border-gray-200 shadow-lg z-50"
            >
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  className={`cursor-pointer hover:bg-purple-50 focus:bg-purple-50 ${
                    language === lang.code ? "bg-purple-50 font-medium" : ""
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col p-5 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/"
            className="transition-transform hover:scale-105"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2?placeholderIfAbsent=true"
              alt="STYLY Logo"
              className="aspect-[2.28] object-contain w-[132px]"
            />
          </Link>
          <button
            className="text-purple-700 hover:text-purple-900 transition-all"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/pricing"
            className="text-purple-700 font-medium py-3 border-b border-gray-100 hover:text-purple-900 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.pricing}
          </Link>
          <Link
            to="/blog"
            className="text-purple-700 font-medium py-3 border-b border-gray-100 hover:text-purple-900 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.blog}
          </Link>
          <Link
            to="/signin"
            className="bg-orange-500 text-white font-medium py-3 rounded-lg text-center hover:bg-orange-600 transition-all mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.signIn}
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-gray-600 text-sm mb-2">Select Language:</div>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`py-2 px-4 rounded-md transition-all ${
                    language === lang.code
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => handleLanguageChange(lang.code as "en" | "fr")}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute z-0 flex min-h-[100px] w-[2117px] inset-0 max-md:max-w-full" />
    </header>
  );
};

export default Navbar;
