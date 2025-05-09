import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-10 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[1629px] max-w-full flex-col overflow-hidden items-center justify-center">
        <div className="flex w-full flex-col overflow-hidden items-center text-base font-normal leading-[1.2] px-20 max-md:px-5">
          <div className="flex w-[446px] max-w-full flex-col items-center">
            <div className="w-[98px] text-[rgba(250,111,64,1)]">
              <div className="w-full">{t.howItWorksFAQ}</div>
            </div>
            <h2 className="w-[120px] max-w-full text-[50px] text-[rgba(51,51,51,1)] font-extrabold whitespace-nowrap text-center tracking-[-2.6px] mt-[9px] max-md:text-[40px]">
              <div className="w-full pb-px max-md:text-[40px]">{t.faqs}</div>
            </h2>
            <div className="self-stretch text-black mt-[9px] max-md:max-w-full">
              {t.faqDescription}
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-2.5">
          <div className="bg-[rgba(242,242,242,1)] self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] my-auto pb-0.5 px-5 rounded-[20px] max-md:max-w-full">
            {t.faqQuestions.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center gap-6 overflow-hidden flex-wrap pl-2.5 py-5 max-md:max-w-full"
              >
                <div
                  className="self-stretch min-w-60 text-base text-[rgba(51,51,51,1)] font-semibold flex-1 shrink basis-[0%] my-auto max-md:max-w-full cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="w-full max-md:max-w-full">
                    {item.question}
                  </div>
                  {openItem === index && (
                    <div className="w-full text-sm font-normal mt-3 text-[rgba(102,102,102,1)] max-md:max-w-full">
                      {item.answer}
                    </div>
                  )}
                </div>
                <button
                  className="self-stretch flex min-h-[23px] flex-col items-stretch justify-center w-[22px] my-auto"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <img
                    src={
                      openItem === index
                        ? "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/77380469c6e02d866dd12bdc3fd46696122b057d?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/5121e61296999c22cf69c321d98030701840c3b8?placeholderIfAbsent=true"
                    }
                    alt={openItem === index ? "Collapse" : "Expand"}
                    className="aspect-[0.96] object-contain w-[22px] flex-1"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
