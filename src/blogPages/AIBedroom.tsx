import { useLanguage } from "@/lib/i18n"; // Adjust path accordingly

const AiBedroomDesign: React.FC = () => {
  const { t } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-12">
      <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
        {/* Table of Contents */}
        <div>
          <h2 className="text-lg font-semibold">{t.tableOfContents}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.introduction}</li>
            <li>{t.aiInBedroomDesign}</li>
            <li>{t.stylyioOverview}</li>
            <li>{t.eightAIPoweredBedroomDesigns}</li>
            <li>{t.expertDesignTips}</li>
            <li>{t.conclusion}</li>
          </ul>
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-lg font-semibold">{t.introduction}</h2>
          <p>{t.introductionText}</p>
        </section>

        {/* AI in Bedroom Design */}
        <section>
          <h2 className="text-lg font-semibold">{t.aiInBedroomDesign}</h2>
          <p>{t.aiInBedroomDesignText}</p>
        </section>

        {/* Styly.io: Your AI-Powered Bedroom Design Companion */}
        <section>
          <h2 className="text-lg font-semibold">{t.stylyioOverview}</h2>
          <p>{t.stylyioOverviewText}</p>
        </section>

        {/* Image */}
        <img
          src="https://framerusercontent.com/images/VdJeNlAZKmKbGqtOEU5p1QGZs.jpg"
          alt="ai bedroom sample"
          className="w-full h-[500px] rounded-lg object-cover"
        />

        {/* Eight AI-Powered Bedroom Designs */}
        <section>
          <h2 className="text-lg font-semibold">{t.eightAIPoweredBedroomDesigns}</h2>

          {[{
            title: t.scandinavianSerenity,
            prompt: t.scandinavianBedroomPrompt,
            img: "https://framerusercontent.com/images/pi01A97j7UMNxBcRpREKZzpluk.jpg",
          }, {
            title: t.modernLuxurySuite,
            prompt: t.modernLuxurySuitePrompt,
            img: "https://framerusercontent.com/images/u6iOWwSX4DlBxdSBUFhhEYZ9Vg.jpg",
          }, {
            title: t.coastalRetreat,
            prompt: t.coastalBedroomPrompt,
            img: "https://framerusercontent.com/images/5AnXg7FUUJShc9jcuWsxPdPcwM.jpg",
          }, {
            title: t.urbanIndustrial,
            prompt: t.urbanIndustrialPrompt,
            img: "https://framerusercontent.com/images/39xj9Xn6JWU2zJ8TvjHwouLorA.jpg",
          }, {
            title: t.bohemianDreams,
            prompt: t.bohemianDreamsPrompt,
            img: "https://framerusercontent.com/images/d5weBH7LJbTNZtkewc9uSdymVI0.jpg",
          }, {
            title: t.japaneseZen,
            prompt: t.japaneseZenPrompt,
            img: "https://framerusercontent.com/images/GblR3QXJexhIW4uUjN6bGD634.jpg",
          }, {
            title: t.midCenturyModern,
            prompt: t.midCenturyModernPrompt,
            img: "https://framerusercontent.com/images/hS9OFnYRvhyaafYaA165rVxK4k.jpg",
          }, {
            title: t.contemporaryGlam,
            prompt: t.contemporaryGlamPrompt,
            img: "https://framerusercontent.com/images/Uam4DfciQaVVOqsa3jCwsTOd5g.jpg",
          }].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-semibold text-base">{idx + 1}. {item.title}</h3>
              <p className="text-sm">{t.prompt}: {item.prompt}</p>
              <img src={item.img} alt={item.title} className="rounded-md h-[200px] w-64" />
            </div>
          ))}
        </section>

        {/* Expert Design Tips */}
        <section>
          <h2 className="text-lg font-semibold">{t.expertDesignTips}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.considerNaturalLight}</li>
            <li>{t.ensureWalkableSpace}</li>
            <li>{t.layerLighting}</li>
            <li>{t.includeHiddenStorage}</li>
            <li>{t.useCalmingMaterials}</li>
          </ul>
        </section>

        {/* Negative Prompt Guidelines */}
        <section>
          <h2 className="text-lg font-semibold">{t.negativePromptGuidelines}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t.avoidClutter}</li>
            <li>{t.keepLightingNatural}</li>
            <li>{t.stickToDesignStyle}</li>
            <li>{t.maintainProportions}</li>
          </ul>
        </section>

        {/* Sources and Research */}
        <section>
          <h2 className="text-lg font-semibold">{t.sourcesAndResearch}</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://www.thensf.org/" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.nationalSleepFoundation}</a>
            </li>
            <li>
              <a href="https://interiordesign.net/" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.interiorDesignMagazine}</a>
            </li>
            <li>
              <a href="https://capen.asid.org/news/asid-highlights-growth-of-interior-design-practice-with-2024-state-of-interior-design-report" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.asidAnnualReport}</a>
            </li>
            <li>
              <a href="https://www.health.harvard.edu/topics/sleep" className="text-blue-600" target="_blank" rel="noopener noreferrer">{t.harvardHealthSleepStudies}</a>
            </li>
          </ul>
        </section>

        <img
          src="https://framerusercontent.com/images/QHngMSH11seHyWEaHUx8lIoGQA.png"
          alt="footer banner"
          className="w-full h-[500px] max-w-3xl object-cover rounded-lg"
        />

        {/* Conclusion */}
        <section>
          <h2 className="text-lg font-semibold">{t.conclusion}</h2>
          <p>{t.conclusionText}</p>
          <p>{t.keywords}</p>
        </section>

        {/* Follow Us Section */}
        <section className="pt-6 border-t border-gray-200 text-center">
          <p className="font-semibold">{t.followUsHere}</p>
          <div className="space-x-4 mt-2">
            <a href="https://www.instagram.com/stylyio/" target="_blank" className="text-blue-500">{t.instagram}</a>
            <a href="../" target="_blank" className="text-blue-500">{t.linkedin}</a>
            <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" className="text-blue-500">{t.facebook}</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiBedroomDesign;
