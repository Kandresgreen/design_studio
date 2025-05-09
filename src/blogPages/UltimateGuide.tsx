import { useLanguage } from "@/lib/i18n"; // Adjust path accordingly

const BuildHouseAI: React.FC = () => {
  const { t } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-10">
      <div className="max-w-4xl text-sm text-gray-800 space-y-6">
        <h2 className="text-xl font-semibold">{t.marketOverview}</h2>
        <ul className="list-disc pl-5">
          <li>{t.keyEvaluationCriteria}</li>
          {/* Add other content with translations */}
        </ul>

        <h3 className="text-lg font-bold">{t.marketLeaders}</h3>
        <ol className="list-decimal pl-5">
          <li>Foyr - Known for commercial applications</li>
          <li>Palette - Focuses on color harmony</li>
          <li>Pablo - Specializes in lighting design</li>
        </ol>

        <h3 className="text-lg font-bold">{t.emergingInnovators}</h3>
        <ol className="list-decimal pl-5">
          <li>Reroom AI - Notable for renovation projects</li>
          <li>PromeAI - Specializes in texture generation</li>
        </ol>

        <h3 className="text-lg font-bold">{t.stylyAdvantage}</h3>
        <ul className="list-disc pl-5">
          <li>Real-time style transfer technology</li>
          <li>Advanced material recognition</li>
          <li>Intelligent space optimization</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.performanceMetrics}</h2>
        <ul className="list-disc pl-5">
          <li>Time saved: 45% reduction in initial design phase</li>
          <li>Client satisfaction rates: 89% positive feedback</li>
          <li>Cost reduction: 35% average savings in project planning</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.caseStudy}</h2>
        <ul className="list-disc pl-5">
          <li>Reduce design iteration time by 60%</li>
          <li>Cut design costs by 40%</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.futureTrends}</h2>
        <ul className="list-disc pl-5">
          <li>Integration of AR/VR technologies</li>
          <li>Sustainable design automation</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.expertPerspectives}</h2>
        <p>
          "AI tools are not replacing designers; they're empowering them to be more creative and efficient."
        </p>

        <h2 className="text-xl font-semibold">{t.makingTheRightChoice}</h2>
        <ul className="list-decimal pl-5">
          <li>Your specific needs and use cases</li>
          <li>Budget constraints</li>
        </ul>

        <h2 className="text-xl font-semibold">{t.conclusion}</h2>
        <p>
          While each platform offers unique advantages, Styly.io emerges as a comprehensive solution that
          combines powerful AI capabilities with user-friendly features.
        </p>
      </div>
    </div>
  );
};

export default BuildHouseAI;
