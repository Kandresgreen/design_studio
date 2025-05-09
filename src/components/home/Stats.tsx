import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!isIntersecting) return;

    const startTime = Date.now();
    const endValue = end;
    
    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const nextCount = Math.floor(progress * endValue);
      if (nextCount !== countRef.current) {
        setCount(nextCount);
        countRef.current = nextCount;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isIntersecting]);

  return { count, setIsIntersecting };
};

const Stats: React.FC = () => {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const stats = [
    { value: 8000, label: t.statsHours },
    { value: 25, label: t.statsDesigners },
    { value: 250, label: t.statsCompanies },
    { value: 32, label: t.statsArticles },
  ];

  const counters = stats.map(stat => useCountUp(stat.value));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach(counter => counter.setIsIntersecting(true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="bg-[rgba(242,242,242,1)] flex w-full flex-col overflow-hidden items-center justify-center py-24 max-md:max-w-full">
      <div className="w-full max-w-7xl px-2 sm:px-6 md:px-12">
        <div className="text-4xl text-[rgba(89,50,134,1)] font-extralight text-center tracking-[-0.72px] leading-none px-4 md:px-8">
          <div className="flex flex-col items-center">
            <div className="max-w-2xl">
              <div className="flex flex-col items-center pb-3.5">
                <div>{t.statsHeading1}</div>
                <div className="mt-4">{t.statsHeading2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 md:mt-[58px] px-0 md:px-8">
          <div className="bg-[rgba(90,50,135,1)] flex gap-8 overflow-x-auto pt-12 pb-12 px-4 md:px-16 rounded-2xl">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center min-w-[220px] flex-shrink-0">
                <div className="text-5xl md:text-6xl text-white font-semibold whitespace-nowrap text-center tracking-[-1.2px] leading-[1.2] pb-1">
                  {counters[index].count}+
                </div>
                <div className="mt-3 text-base md:text-lg text-white font-medium text-center leading-loose">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
