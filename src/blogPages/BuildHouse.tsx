import { useLanguage } from "@/lib/i18n"; // Adjust path accordingly

const BuildHouseAI: React.FC = () => {
  const { t } = useLanguage(); // Get the translation object based on the current language

  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-10">
      <div className="max-w-4xl text-sm text-gray-800 space-y-6">
        {/* Market Overview */}
        <h2 className="text-xl font-semibold">{t.marketOverview}</h2>
        <ul className="list-disc pl-5">
          <li>{t.keyEvaluationCriteria}</li>
          {/* Add other content with translations */}
        </ul>

        {/* Market Leaders */}
        <h3 className="text-lg font-bold">{t.marketLeaders}</h3>
        <ol className="list-decimal pl-5">
          <li>{t.foyr} - {t.knownForCommercialApplications}</li>
          <li>{t.palette} - {t.focusesOnColorHarmony}</li>
          <li>{t.pablo} - {t.specializesInLightingDesign}</li>
        </ol>

        {/* Emerging Innovators */}
        <h3 className="text-lg font-bold">{t.emergingInnovators}</h3>
        <ol className="list-decimal pl-5">
          <li>{t.reroomAI} - {t.notableForRenovationProjects}</li>
          <li>{t.promeAI} - {t.specializesInTextureGeneration}</li>
        </ol>

        {/* Styly Advantage */}
        <h3 className="text-lg font-bold">{t.stylyAdvantage}</h3>
        <ul className="list-disc pl-5">
          <li>{t.realTimeStyleTransferTechnology}</li>
          <li>{t.advancedMaterialRecognition}</li>
          <li>{t.intelligentSpaceOptimization}</li>
        </ul>

        {/* Performance Metrics */}
        <h2 className="text-xl font-semibold">{t.performanceMetrics}</h2>
        <ul className="list-disc pl-5">
          <li>{t.timeSaved}: 45% {t.reductionInInitialDesignPhase}</li>
          <li>{t.clientSatisfactionRates}: 89% {t.positiveFeedback}</li>
          <li>{t.costReduction}: 35% {t.averageSavingsInProjectPlanning}</li>
        </ul>

        {/* Case Study */}
        <h2 className="text-xl font-semibold">{t.caseStudy}</h2>
        <ul className="list-disc pl-5">
          <li>{t.reduceDesignIterationTime}: 60%</li>
          <li>{t.cutDesignCosts}: 40%</li>
        </ul>

        {/* Future Trends */}
        <h2 className="text-xl font-semibold">{t.futureTrends}</h2>
        <ul className="list-disc pl-5">
          <li>{t.integrationOfARVRTechnologies}</li>
          <li>{t.sustainableDesignAutomation}</li>
        </ul>

        {/* Expert Perspectives */}
        <h2 className="text-xl font-semibold">{t.expertPerspectives}</h2>
        <p>"{t.aiToolsAreNotReplacingDesigners}"</p>

        {/* Making the Right Choice */}
        <h2 className="text-xl font-semibold">{t.makingTheRightChoice}</h2>
        <ul className="list-decimal pl-5">
          <li>{t.yourSpecificNeedsAndUseCases}</li>
          <li>{t.budgetConstraints}</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-xl font-semibold">{t.conclusion}</h2>
        <p>
          {t.whileEachPlatformOffersUniqueAdvantages}, Styly.io {t.emergesAsAComprehensiveSolution}.
        </p>
      </div>
    </div>
  );
};

export default BuildHouseAI;
