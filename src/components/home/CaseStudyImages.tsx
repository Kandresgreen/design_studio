import React from "react";

const images = [
  "https://via.placeholder.com/400x300?text=Case+1",
  "https://via.placeholder.com/400x300?text=Case+2",
  "https://via.placeholder.com/400x300?text=Case+3",
];

const CaseStudyImages: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-12">
      <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-6xl">
        {images.map((src, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow bg-white flex items-center justify-center w-[350px] h-[260px]">
            <img
              src={src}
              alt={`Case Study ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudyImages; 