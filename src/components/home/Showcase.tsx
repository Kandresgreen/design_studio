import React from "react";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";

const Showcase: React.FC = () => {
  return (
    <section className="bg-white relative flex w-full flex-col overflow-hidden px-20 py-[90px] max-md:max-w-full max-md:px-5">
      <div className="self-center z-0 flex min-h-[658px] w-[1175px] max-w-full flex-col items-stretch justify-center">
        <div className="w-full overflow-hidden rounded-[33px] max-md:max-w-full">
          <BeforeAfterSlider
            beforeImage="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9a7ab7a2366f484ec9d66769ac382a7635a3a895?placeholderIfAbsent=true"
            afterImage="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/9a7ab7a2366f484ec9d66769ac382a7635a3a895?placeholderIfAbsent=true"
            altBefore="Before"
            altAfter="After"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/52d8fab7f6187c26b0462c62ebb49ec9e57436d3?placeholderIfAbsent=true"
        alt="Decorative element"
        className="aspect-[1.01] object-contain w-[804px] absolute z-0 max-w-full right-[-599px] h-[804px] rounded-[0px_0px_0px_200px] top-0"
      />
    </section>
  );
};

export default Showcase;
