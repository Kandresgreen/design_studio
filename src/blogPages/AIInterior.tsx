import { useLanguage } from "@/lib/i18n"; // Adjust path accordingly

const TipsToSaveBig2025: React.FC = () => {
  const { t } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-8">
      <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
        <p>
          {t.introductionText1}
          <strong>{t.stylyAI}</strong> {t.introductionText2}
        </p>

        <div className="space-y-4">
          {[
            {
              title: t.planBeforeYouSpend,
              content: t.planBeforeYouSpendContent,
            },
            {
              title: t.optimizeRoomLayoutWithAI,
              content: t.optimizeRoomLayoutWithAIContent,
            },
            {
              title: t.upcycleFurniture,
              content: t.upcycleFurnitureContent,
            },
            {
              title: t.focusOnDIYProjects,
              content: t.focusOnDIYProjectsContent,
            },
            {
              title: t.shopSmartForMaterials,
              content: t.shopSmartForMaterialsContent,
            },
            {
              title: t.prioritizeKeyElements,
              content: t.prioritizeKeyElementsContent,
            },
            {
              title: t.experimentWithColorsVirtually,
              content: t.experimentWithColorsVirtuallyContent,
            },
            {
              title: t.investInMultiFunctionalFurniture,
              content: t.investInMultiFunctionalFurnitureContent,
            },
            {
              title: t.useAIForAccessoryPlacement,
              content: t.useAIForAccessoryPlacementContent,
            },
            {
              title: t.stayUpdatedWithTrends,
              content: t.stayUpdatedWithTrendsContent,
            },
          ].map((tip, i) => (
            <div key={i}>
              <h3 className="font-semibold text-base">{i + 1}. {tip.title}</h3>
              <p>{tip.content}</p>
            </div>
          ))}
        </div>

        <img
          src="https://framerusercontent.com/images/qwNLVoWFq8EGoCFXGZ2jVmDfcJo.webp"
          alt="AI Home Design Trends"
          className="w-full h-[500px] rounded-xl object-cover"
        />

        <img
          src="https://framerusercontent.com/images/JlnrrzUwSWVZYpELxVUSK4pac.webp"
          alt="AI Room Planner Tool"
          className="w-full h-[500px] rounded-xl object-cover"
        />

        <h2 className="text-lg font-semibold">{t.whyChooseStyly}</h2>
        <p>{t.stylyDescription}</p>
        <ul className="list-disc pl-5">
          <li>{t.visualizeDesigns}</li>
          <li>{t.experimentWithLayouts}</li>
          <li>{t.saveMoney}</li>
        </ul>

        <p>
          {t.getStartedWithStyly}{" "}
          <a href="../" target="_blank" className="text-blue-600 font-semibold">
            {t.freeAIRoomDesign}
          </a>{" "}
          {t.transformYourSpace}
        </p>

        <div className="pt-6 border-t text-center">
          <p className="font-semibold">{t.followUsHere}</p>
          <div className="space-x-4 mt-2">
            <a
              href="https://www.instagram.com/stylyio/"
              target="_blank"
              className="text-blue-500"
              rel="noopener"
            >
              {t.instagram}
            </a>
            <a
              href="../"
              target="_blank"
              className="text-blue-500"
              rel="noopener"
            >
              {t.linkedin}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61558770901420"
              target="_blank"
              className="text-blue-500"
              rel="noopener"
            >
              {t.facebook}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsToSaveBig2025;
