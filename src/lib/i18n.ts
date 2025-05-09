import { createContext, useContext } from "react";

// Define language types
export type Language = "en" | "fr";

// Define the translation interface
export interface Translations {
  // Navbar
  pricing: string;
  blog: string;
  signIn: string;

  //Navbar section
  howRealEstateAgentsBoostSales: string;
  genZUltimateGuideToInteriors: string;
  howToBuildYourHouse: string;
  ultimateGuideToAIInteriorDesign: string;
  eightStunningAIBedroomDesigns: string;
  expertTipsOnHomeInteriors: string;

  // Hero section
  welcomeToFuture: string;
  mostUsedAITool: string;
  aiDesignTool: string;
  for: string;
  modernSpaces: string;
  redesignEmptyRooms: string;
  forRealEstate: string;
  noToolsNoDownloads: string;
  uploadPhoto: string;
  supporting: string;
  realEstatePros: string;

  // Unlock potential section
  designExcellence: string;
  unlockThePotential: string;
  aiDrawsInspiration: string;
  legendaryArchitects: string;
  experienceAdvancedAI: string;
  explore: string;

  // Architecture Revolution
  architectureRevolution: string;
  homeDesignByAI: string;

  // ModernSpaces
  redesignRooms: string;
  forRealEstateRenovation: string;
  noToolsJustResults: string;

  // HowItWorks
  simpleProcess: string;
  howItWorks: string;
  transformSpace: string;
  upload: string;
  uploadDescription: string;
  personalize: string;
  personalizeDescription: string;
  furnitureSelection: string;
  enjoy: string;
  enjoyDescription: string;
  aiForInteriorDesign: string;
  getStartedFree: string;
  noCreditCard: string;

  // Testimonials
  dontTakeOurWord: string;
  hearFromCustomers: string;

  // FAQ
  howItWorksFAQ: string;
  faqs: string;
  faqDescription: string;
  faqQuestions: { question: string; answer: string }[];

  // VideoSection
  seeItInAction: string;
  watchDemo: string;

  // SupportedBy
  supportedBy: string;

  // MarketSegmentCarousel
  tailoredSolutionsForEveryNeed: string;
  aiDesignToolServesDiverseMarkets: string;
  realEstateProfessionals: string;
  homeownersRenters: string;
  startupsTechCreators: string;
  interiorDesignersArchitects: string;
  retailersBrands: string;
  wallpaperBrands: string;
  wallpaperFlooringBrands: string;
  flooringBrands: string;

  // Footer links
  footerCompany: string;
  footerAbout: string;
  footerFeatures: string;
  footerPricing: string;
  footerContact: string;
  footerLegal: string;
  footerTerms: string;
  footerPrivacy: string;
  footerCopyright: string;
  footerSlogan: string;
  footerLogin: string;
  footerSignup: string;
  footerCopyrightYear: string;
  footerVideoGuide: string;
  footerCookieSettings: string;

  // Stats section
  statsHeading1: string;
  statsHeading2: string;
  statsHours: string;
  statsDesigners: string;
  statsCompanies: string;
  statsArticles: string;

  // Blog section
  blogTrends: string;
  blogDescription: string;
  realEstateLandscape: string;
  generationalTrendsReport: string;
  buyersBeginSearch: string;
  virtualStagingRevolution: string;
  propertiesWithAIStaging: string;
  virtuallyStagedSellFaster: string;
  aiStagingCostReduction: string;
  propertiesWithAIEnhancedPhotos: string;
  buyersStruggleToVisualize: string;
  source: string;
  realEstateStagingAssociation: string;
  whyAIStagingIndustryStandard: string;
  economicEfficiency: string;
  economicEfficiencyDescription: string;
  speedToMarket: string;
  speedToMarketDescription: string;
  marketSpecificCustomization: string;
  marketSpecificCustomizationDescription: string;
  targetSpecificBuyerDemographics: string;
  adjustStagingRealTimeFeedback: string;
  createSeasonalVariations: string;
  generateDesignOptions: string;
  realWorldSuccessStories: string;
  caseStudy1Title: string;
  caseStudy1Property: string;
  caseStudy1Challenge: string;
  caseStudy1Solution: string;
  caseStudy1Result: string;
  caseStudy2Title: string;
  caseStudy2Property: string;
  caseStudy2Challenge: string;
  caseStudy2Solution: string;
  caseStudy2Result: string;
  agentImplementationTitle: string;
  segmentedMarketingApproaches: string;
  segmentedMarketingDescription: string;
  emptyNesterDownsizing: string;
  firstTimeHomebuyer: string;
  workFromHomeLayouts: string;
  multigenerationalLiving: string;
  renovationVisualizationTitle: string;
  renovationVisualizationDescription: string;
  energyEfficientUpgrades: string;
  spaceReconfiguration: string;
  modernUpdates: string;
  accessibilityModifications: string;
  digitalMarketingIntegration: string;
  digitalMarketingDescription: string;
  higherEngagement: string;
  longerTimeSpent: string;
  moreSavedListings: string;
  higherQualityLeads: string;
  currentMarketAnalysis: string;
  marketAnalysisDescription: string;
  realEstateTechReport: string;
  aiStagingAdoption: string;
  luxuryPropertiesUseAI: string;
  virtualStagingMarketGrowth: string;
  declineOfPhysicalStaging: string;
  evidenceBasedBestPractices: string;
  strategicApplication: string;
  marketResponsiveDesign: string;
  highResolutionImages: string;
  consistentHeightPerspective: string;
  cleanSpacesForAI: string;
  focusOnProblematicSpaces: string;
  showcaseVersatility: string;
  demonstrateLifestylePossibilities: string;
  researchLocalPreferences: string;
  alignWithDesignTrends: string;
  considerPropertyElements: string;
  expertAnalysis: string;
  expertAnalysisQuote: string;
  the2025Reality: string;
  aiStagingEmbeddedInPractice: string;
  transformRealEstateBusiness: string;
  experienceAIAdvantage: string;
  meetBuyerExpectations: string;
  maximizePropertyValues: string;
  reduceDaysOnMarket: string;
  scaleMarketingEfforts: string;
  deliverConsistentPresentation: string;
  realEstateVirtualStaging: string;

  marketOverview: string;
  keyEvaluationCriteria: string;
  marketLeaders: string;
  emergingInnovators: string;
  stylyAdvantage: string;
  performanceMetrics: string;
  caseStudy: string;
  futureTrends: string;
  expertPerspectives: string;
  makingTheRightChoice: string;
  conclusion: string;
  foyr: string;
  knownForCommercialApplications: string;
  palette: string;
  focusesOnColorHarmony: string;
  pablo: string;
  specializesInLightingDesign: string;
  reroomAI: string;
  notableForRenovationProjects: string;
  promeAI: string;
  specializesInTextureGeneration: string;
  realTimeStyleTransferTechnology: string;
  advancedMaterialRecognition: string;
  intelligentSpaceOptimization: string;
  timeSaved: string;
  reductionInInitialDesignPhase: string;
  clientSatisfactionRates: string;
  positiveFeedback: string;
  costReduction: string;
  averageSavingsInProjectPlanning: string;
  reduceDesignIterationTime: string;
  cutDesignCosts: string;
  integrationOfARVRTechnologies: string;

  sustainableDesignAutomation: string;
  aiToolsAreNotReplacingDesigners: string;
  yourSpecificNeedsAndUseCases: string;
  budgetConstraints: string;
  whileEachPlatformOffersUniqueAdvantages: string;
  emergesAsAComprehensiveSolution: string;

  //AI Bedroom
  tableOfContents: string;
  introduction: string;
  aiInBedroomDesign: string;
  aiInBedroomDesignText: string;
  stylyioOverview: string;
  stylyioOverviewText: string;
  scandinavianSerenity: string;
  scandinavianBedroomPrompt: string;
  modernLuxurySuite: string;
  modernLuxurySuitePrompt: string;
  coastalRetreat: string;
  coastalBedroomPrompt: string;
  urbanIndustrial: string;
  urbanIndustrialPrompt: string;
  bohemianDreams: string;
  bohemianDreamsPrompt: string;
  eclecticFusion: string;
  eclecticFusionPrompt: string;
  minimalistZen: string;
  minimalistZenPrompt: string;
  vintageCharm: string;
  vintageCharmPrompt: string;

  expertDesignTips: string;
  expertDesignTipsText: string;
  japaneseMinimalism: string;
  japaneseMinimalismPrompt: string;
  introductionText: string;
  eightAIPoweredBedroomDesigns: string;
  japaneseZen: string;
  japaneseZenPrompt: string;
  midCenturyModern: string;
  midCenturyModernPrompt: string;
  contemporaryGlam: string;
  contemporaryGlamPrompt: string;

  considerNaturalLight: string;
  ensureWalkableSpace: string;
  layerLighting: string;
  includeHiddenStorage: string;
  useCalmingMaterials: string;

  negativePromptGuidelines: string;
  avoidClutter: string;
  keepLightingNatural: string;
  stickToDesignStyle: string;
  maintainProportions: string;

  sourcesAndResearch: string;
  nationalSleepFoundation: string;
  interiorDesignMagazine: string;
  asidAnnualReport: string;
  harvardHealthSleepStudies: string;
  conclusionText: string;
  keywords: string;
  followUsHere: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  prompt: string;

  // General
  welcomeMessage: string;
  profileTitle: string;
  logoutButton: string;
  settingsTitle: string;
  saveButton: string;
  cancelButton: string;
  loadingMessage: string;
  errorMessage: string;
  successMessage: string;

  // Dashboard Section
  dashboardTitle: string;
  viewAnalytics: string;
  viewReports: string;
  viewTasks: string;

  // Task Management
  taskManagementTitle: string;
  taskListTitle: string;
  taskAssignButton: string;
  taskCompleteButton: string;
  taskInProgress: string;
  taskCompleted: string;
  taskOverdue: string;

  // Analytics Section
  analyticsTitle: string;
  viewDetailsButton: string;
  totalTasksCompleted: string;
  totalTasksAssigned: string;
  tasksInProgress: string;
  tasksCompleted: string;

  // Settings Section
  settingsSubtitle: string;
  updateProfileButton: string;
  changePasswordButton: string;
  languageSelection: string;
  notificationSettings: string;
  saveChangesButton: string;

  // Notifications Section
  notificationTitle: string;
  notificationNewTaskAssigned: string;
  notificationTaskCompleted: string;
  notificationNewMessage: string;

  // User Profile Section
  profileEditTitle: string;
  profileSaveButton: string;
  profileCancelButton: string;
  profilePictureUpload: string;
  profileName: string;
  profileEmail: string;
  profilePhone: string;
  profileAddress: string;

  // Error and Success Messages
  errorUpdatingProfile: string;
  successUpdatingProfile: string;
  errorSavingChanges: string;
  successSavingChanges: string;
  errorLoadingData: string;
  successLoadingData: string;
  creatingTrendySpaces: string;
  introductionText1: string;
  introductionText2: string;
  understandingAestheticPreferences: string;
  aestheticPreferencesText: string;
  colorPalettes: string;
  colorPalettesText: string;
  eclecticFurnitureAndDecor: string;
  eclecticFurnitureAndDecorText: string;
  minimalistMeetsMaximalist: string;
  minimalistMeetsMaximalistText: string;
  keyElementsOfInstagramWorthyInterior: string;
  instagramWorthyDefinition: string;
  naturalLighting: string;
  naturalLightingText: string;
  accentWalls: string;
  accentWallsText: string;
  statementPieces: string;
  statementPiecesText: string;
  greeneryAndPlants: string;
  greeneryAndPlantsText: string;
  layeredTextures: string;
  layeredTexturesText: string;
  declutteredVisuals: string;
  declutteredVisualsText: string;
  incorporatingSustainabilityAndTechnology: string;
  sustainabilityTechText: string;
  sustainableMaterials: string;
  sustainableMaterialsText: string;
  smartHomeTechnology: string;
  smartHomeTechnologyText: string;
  multiFunctionalFurniture: string;
  multiFunctionalFurnitureText: string;
  caseStudiesAndExamples: string;
  caseStudyIntro: string;
  economicEfficiencyText: string;
  geometricDreamBedroom: string;
  geometricDreamBedroomText: string;
  cafeInspiredKitchenNook: string;
  cafeInspiredKitchenNookText: string;
  bohoOutdoorBalcony: string;
  bohoOutdoorBalconyText: string;
  diyInstagramWorthyMakeovers: string;
  diyTipsIntro: string;
  startWithMoodBoard: string;
  startWithMoodBoardText: string;
  maximizeWhatYouHave: string;
  maximizeWhatYouHaveText: string;
  getCreativeWithPaint: string;
  getCreativeWithPaintText: string;
  thriftForJewels: string;
  thriftForJewelsText: string;
  accessorizeThoughtfully: string;
  accessorizeThoughtfullyText: string;
  playWithAnglesForPhotos: string;
  playWithAnglesForPhotosText: string;
  socialMediaShapingDesignTrends: string;
  socialMediaShapingDesignTrendsText: string;
  crowdsourcingCreativity: string;
  crowdsourcingCreativityText: string;
  massAppealToNicheInterests: string;
  massAppealToNicheInterestsText: string;
  interactiveShopping: string;
  interactiveShoppingText: string;
  empoweringNewCreators: string;
  empoweringNewCreatorsText: string;
  shareYourBestSpace: string;
  shareYourBestSpaceText: string;
  shareYourBestSpaceInstagram: string;
  prevArticle: string;
  nextArticle: string;
  readMore: string;
  stylyAI: string;
  planBeforeYouSpend: string;
  planBeforeYouSpendContent: string;
  optimizeRoomLayoutWithAI: string;
  optimizeRoomLayoutWithAIContent: string;
  upcycleFurniture: string;
  upcycleFurnitureContent: string;
  focusOnDIYProjects: string;
  focusOnDIYProjectsContent: string;
  shopSmartForMaterials: string;
  shopSmartForMaterialsContent: string;
  prioritizeKeyElements: string;
  prioritizeKeyElementsContent: string;
  experimentWithColorsVirtually: string;
  experimentWithColorsVirtuallyContent: string;
  investInMultiFunctionalFurniture: string;
  investInMultiFunctionalFurnitureContent: string;
  useAIForAccessoryPlacement: string;
  useAIForAccessoryPlacementContent: string;
  stayUpdatedWithTrends: string;
  stayUpdatedWithTrendsContent: string;
  whyChooseStyly: string;
  stylyDescription: string;
  visualizeDesigns: string;
  experimentWithLayouts: string;
  saveMoney: string;
  getStartedWithStyly: string;
  freeAIRoomDesign: string;
  transformYourSpace: string;
}
// Define translations for English and French
export const translations: Record<Language, Translations> = {
  en: {
    // Navbar
    pricing: "Pricing",
    blog: "Blog",
    signIn: "Sign In",

    // Add missing properties
    expertDesignTipsText: "Expert design tips to enhance your interiors.",
    japaneseMinimalism: "Japanese Minimalism",
    japaneseMinimalismPrompt:
      "Japanese minimalism: clean lines, natural materials, serene ambiance...",
    prompt: "Enter your design preferences here...",

    // Add missing properties
    marketOverview: "Market Overview",
    eclecticFusion: "Eclectic Fusion",
    eclecticFusionPrompt:
      "Eclectic fusion: mix of styles, vibrant colors, unique objects...",
    minimalistZen: "Minimalist Zen",
    minimalistZenPrompt:
      "Minimalist Zen: clean lines, neutral palette, calming ambiance...",
    vintageCharm: "Vintage Charm",
    vintageCharmPrompt:
      "Vintage charm: antique furniture, classic details, warm atmosphere...",
    keywords:
      "Keywords: AI bedroom design, minimalist design, vintage design, eclectic design",
    followUsHere: "Follow Us Here!",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    facebook: "Facebook",

    // Hero section
    welcomeToFuture: "Welcome to the Future of Design",
    mostUsedAITool: "#1 most used",
    aiDesignTool: "AI design tool",
    for: "for",
    modernSpaces: "modern spaces",
    redesignEmptyRooms:
      "Redesign empty rooms into styled, market-ready interior —",
    forRealEstate: "for real estate, renovation, and retail.",
    noToolsNoDownloads: "No tools, no downloads. Just results",
    uploadPhoto: "Upload a Photo to Start",
    supporting: "Supporting",
    realEstatePros: "20,000+ real estate pros, designers & homeowners",

    // Unlock potential section
    designExcellence: "Design Excellence",
    unlockThePotential: "UNLOCK THE POTENTIAL",
    aiDrawsInspiration:
      "Our AI draws inspiration from legendary architects such as",
    legendaryArchitects:
      "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, and Gaudi",
    experienceAdvancedAI:
      "Experience how our advanced AI technology transforms your design concepts into stunning reality.",
    explore: "Explore",

    // Architecture Revolution
    architectureRevolution: "ARCHITECTURE REVOLUTION",
    homeDesignByAI: "Home design, Room design and Interior design by AI.",

    // ModernSpaces
    redesignRooms: "Redesign empty rooms into styled, market-ready interior —",
    forRealEstateRenovation: "for real estate, renovation, and retail.",
    noToolsJustResults: "No tools, no downloads. Just results.",

    // HowItWorks
    simpleProcess: "Simple Process",
    howItWorks: "How It Works",
    transformSpace:
      "Transform your space in three simple steps with our AI-powered design platform",
    upload: "Upload",
    uploadDescription:
      "Simply upload your image or sketch of the space you want to redesign.",
    personalize: "Personalize",
    personalizeDescription:
      "Choose your preferences, from furniture selection to style, to create your ideal space by AI room design.",
    furnitureSelection: "furniture",
    enjoy: "Enjoy",
    enjoyDescription:
      "Sit back and enjoy the end result by AI for interior design.",
    aiForInteriorDesign: "AI for interior design",
    getStartedFree: "Get Started for Free",
    noCreditCard: "No Credit Card Required, No Commitments",

    // Testimonials
    dontTakeOurWord: "Don't just take our word for it",
    hearFromCustomers:
      "Hear from some of our amazing customers who used our product",

    // FAQ
    howItWorksFAQ: "How it works",
    faqs: "FAQs",
    faqDescription:
      "Everything you need to know about the product and billing.",
    faqQuestions: [
      {
        question: "What makes Styly AI unique in the world of interior design?",
        answer:
          "Styly AI stands out by combining cutting-edge artificial intelligence with principles from legendary architects like Le Corbusier and Zaha Hadid. Our platform requires no downloads or special tools, making professional interior design accessible to everyone from real estate professionals to homeowners.",
      },
      {
        question:
          "Can anyone use Styly AI, or is it designed specifically for professionals?",
        answer:
          "Styly AI is designed for everyone! While it's powerful enough for real estate professionals and interior designers, it's also intuitive enough for homeowners and design enthusiasts with no prior experience. Our simple three-step process makes it accessible to users of all skill levels.",
      },
      {
        question:
          "How does Styly AI assist users in visualizing their design ideas?",
        answer:
          "Simply upload a photo of your empty space, select your design preferences and style, and our AI will transform it into a professionally designed interior. You can experiment with different styles, furniture arrangements, and color schemes until you find the perfect look for your space.",
      },
      {
        question:
          "Does Styly AI offer a variety of design styles to choose from?",
        answer:
          "Absolutely! Styly AI offers a wide range of design styles from modern minimalist to classic traditional, industrial, Scandinavian, mid-century modern, and many more. You can also customize elements within each style to create a unique look that perfectly matches your vision.",
      },
      {
        question: "What kind of support does Styly AI provide to its users?",
        answer:
          "We offer comprehensive support including video tutorials, a detailed knowledge base, and responsive customer service. Our team is available to help with any questions or challenges you might encounter while using our platform. Plus, our blog regularly features design tips and inspiration.",
      },
    ],

    // VideoSection
    seeItInAction: "See it in action",
    watchDemo: "Watch the demo",

    // SupportedBy
    supportedBy: "Supported by",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Tailored Solutions For Every Need",
    aiDesignToolServesDiverseMarkets:
      "Our AI design tool serves diverse market segments with specialized features",
    realEstateProfessionals: "REAL ESTATE PROFESSIONALS",
    homeownersRenters: "HOMEOWNERS & RENTERS",
    startupsTechCreators: "STARTUPS & TECH-SAVVY CREATORS",
    interiorDesignersArchitects: "INTERIOR DESIGNERS & ARCHITECTS",
    retailersBrands: "RETAILERS & BRANDS",
    wallpaperBrands: "WALLPAPER BRANDS",
    wallpaperFlooringBrands: "WALLPAPER & FLOORING BRANDS",
    flooringBrands: "FLOORING BRANDS",

    // Footer links
    footerCompany: "Company",
    footerAbout: "About",
    footerFeatures: "Features",
    footerPricing: "Pricing",
    footerContact: "Contact",
    footerLegal: "Legal",
    footerTerms: "Terms",
    footerPrivacy: "Privacy",
    footerCopyright: "© 2024 STYLY. All rights reserved.",
    footerSlogan:
      "The architecture revolution: redefining interior design with AI.",
    footerLogin: "Log In",
    footerSignup: "Sign Up",
    footerCopyrightYear: "Copyright 2025 STYLY",
    footerVideoGuide: "Video Guide",
    footerCookieSettings: "Cookie Settings",

    // Stats section
    statsHeading1: "STYLY: Not chance, but the culmination of",
    statsHeading2: "rigorous quantitative research.",
    statsHours: "hours of development",
    statsDesigners: "Top Designers approved",
    statsCompanies: "Companies trusted",
    statsArticles: "Research articles",

    // Blog section
    blogTrends: "New trends",
    blogDescription:
      "The latest industry news, interviews, technologies, and resources.",
    realEstateLandscape:
      "The real estate landscape has fundamentally transformed since 2023",
    generationalTrendsReport: "Generational Trends Report",
    buyersBeginSearch:
      "an overwhelming 99% of home buyers begin their search online, making digital presentation not just important but critical for sales success.",
    virtualStagingRevolution:
      "The Virtual Staging Revolution: Current Market Statistics",
    propertiesWithAIStaging:
      "Properties with AI virtual staging receive 2.7x more inquiries than traditional listings",
    virtuallyStagedSellFaster:
      "Virtually staged properties sell 31% faster than non-staged homes",
    aiStagingCostReduction:
      "AI staging delivers 98% cost reduction compared to physical staging",
    propertiesWithAIEnhancedPhotos:
      "Properties with AI-enhanced photos command 5–8% higher selling prices",
    buyersStruggleToVisualize:
      "92% of buyers struggle to visualize potential in empty spaces",
    source: "Source:",
    realEstateStagingAssociation:
      "Real Estate Staging Association 2025 Impact Report",
    whyAIStagingIndustryStandard:
      "Why AI-Powered Virtual Staging is Now Industry Standard",
    economicEfficiency: "Economic Efficiency",
    economicEfficiencyDescription:
      "In 2025's fluctuating real estate market, traditional physical staging averages $3,500–$10,000 per property, while AI-powered virtual staging with Styly.io starts at less than $100 per property.",
    speedToMarket: "Speed-to-Market Advantage",
    speedToMarketDescription:
      "With Styly.io, I can have professionally staged photos ready within an hour of the photographer delivering raw images.",
    marketSpecificCustomization: "Market-Specific Customization",
    marketSpecificCustomizationDescription:
      "Current AI virtual staging allows agents to target specific buyer demographics with tailored designs, adjust staging based on real-time market feedback, create seasonal variations, and generate multiple design options for diverse buyer preferences.",
    targetSpecificBuyerDemographics:
      "Target specific buyer demographics with tailored designs",
    adjustStagingRealTimeFeedback:
      "Adjust staging based on real-time market feedback",
    createSeasonalVariations:
      "Create seasonal variations to keep listings fresh",
    generateDesignOptions:
      "Generate multiple design options for diverse buyer preferences",
    realWorldSuccessStories: "Real-World Success Stories from 2025",
    caseStudy1Title: "Case Study 1: Mixed-Use Development in Austin",
    caseStudy1Property: "Property: 12-unit new construction, completely empty",
    caseStudy1Challenge: "Challenge: Needed to pre-sell 60% before completion",
    caseStudy1Solution:
      "Solution: AI-staged with Styly.io showing multiple configuration options",
    caseStudy1Result: "Result: 75% pre-sold within 45 days",
    caseStudy2Title: "Case Study 2: Historic Renovation Project",
    caseStudy2Property:
      "Property: 1920s craftsman requiring significant updates",
    caseStudy2Challenge:
      "Challenge: Buyers couldn't visualize modern possibilities",
    caseStudy2Solution:
      "Solution: Virtual renovation showcasing contemporary interior while preserving character",
    caseStudy2Result: "Result: Sold at 12% above neighborhood comps",
    agentImplementationTitle:
      "How Leading Agents Are Implementing AI Staging in 2025",
    segmentedMarketingApproaches: "Segmented Marketing Approaches",
    segmentedMarketingDescription:
      "Today's sophisticated agents use Styly.io to create targeted presentations for various buyer demographics.",
    emptyNesterDownsizing: "Empty-nester downsizing designs",
    firstTimeHomebuyer: "First-time homebuyer configurations",
    workFromHomeLayouts: "Work-from-home optimized layouts",
    multigenerationalLiving: "Multigenerational living arrangements",
    renovationVisualizationTitle: "Renovation Visualization",
    renovationVisualizationDescription:
      "With construction costs at all-time highs, agents are showing potential through renovation visualization.",
    energyEfficientUpgrades: "Energy-efficient upgrades with projected savings",
    spaceReconfiguration: "Space reconfiguration possibilities",
    modernUpdates: "Modern updates to dated properties",
    accessibilityModifications: "Accessibility modifications",
    digitalMarketingIntegration: "Digital-First Marketing Integration",
    digitalMarketingDescription:
      "Properties staged with Styly.io in 2025 are seeing significantly higher engagement on social platforms.",
    higherEngagement: "53% higher engagement on social platforms",
    longerTimeSpent: "2.2x longer time spent on listing pages",
    moreSavedListings: "40% more saved/favorited listings",
    higherQualityLeads: "Significantly higher quality leads",
    currentMarketAnalysis: "Current Market Analysis and Projections",
    marketAnalysisDescription:
      "According to McKinsey & Company's 2025 Real Estate Technology Report:",
    realEstateTechReport: "Real Estate Technology Report",
    aiStagingAdoption:
      "AI staging adoption has reached 78% among successful agents",
    luxuryPropertiesUseAI:
      "94% of luxury properties now use AI staging as standard practice",
    virtualStagingMarketGrowth:
      "The virtual staging market has grown 87% since 2023",
    declineOfPhysicalStaging:
      "Traditional physical staging services have declined by 35%",
    evidenceBasedBestPractices: "Evidence-Based Best Practices for 2025",
    strategicApplication: "Strategic Application",
    marketResponsiveDesign: "Market-Responsive Design",
    highResolutionImages: "Wide-angle, high-resolution images",
    consistentHeightPerspective: "Consistent height and perspective",
    cleanSpacesForAI: "Empty, clean spaces for optimal AI processing",
    focusOnProblematicSpaces: "Focus on problematic spaces first",
    showcaseVersatility: "Showcase versatility in primary rooms",
    demonstrateLifestylePossibilities: "Demonstrate lifestyle possibilities",
    researchLocalPreferences: "Research local buyer preferences",
    alignWithDesignTrends: "Align with current design trends",
    considerPropertyElements:
      "Consider property-specific architectural elements",
    expertAnalysis: "Expert Analysis",
    expertAnalysisQuote:
      '"The question is no longer whether to use AI staging, but how to use it most effectively."',
    the2025Reality: "The 2025 Reality",
    aiStagingEmbeddedInPractice:
      "AI-powered virtual staging is now firmly embedded in successful real estate practice.",
    transformRealEstateBusiness: "Transform Your Real Estate Business Today",
    experienceAIAdvantage:
      "Experience the real market advantage of AI-powered virtual staging with Styly.io.",
    meetBuyerExpectations: "Meet modern buyer expectations",
    maximizePropertyValues: "Maximize property values in any market",
    reduceDaysOnMarket: "Reduce days-on-market",
    scaleMarketingEfforts: "Scale marketing efforts efficiently",
    deliverConsistentPresentation:
      "Deliver consistent, professional presentation",
    realEstateVirtualStaging:
      "Gen Z’s Ultimate Guide to Instagram-Worthy Interiors",
    howRealEstateAgentsBoostSales:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    genZUltimateGuideToInteriors:
      "Gen Z's Ultimate Guide to Instagram-Worthy Interiors",
    howToBuildYourHouse:
      "How to Build Your Own House with AI Tools Including Porch Design",
    ultimateGuideToAIInteriorDesign:
      "The Ultimate Guide to AI Interior Design Tools in 2025: A Comprehensive Comparison",
    eightStunningAIBedroomDesigns:
      "Eight Stunning AI-Generated Bedroom Designs: Transform Your Space with Styly.io",
    expertTipsOnHomeInteriors:
      "10 Expert Tips to Save Big on Home Interiors in 2025",

    // New Keys for Market Leaders
    foyr: "Foyr",
    knownForCommercialApplications: "Known for commercial applications",
    palette: "Palette",
    focusesOnColorHarmony: "Focuses on color harmony",
    pablo: "Pablo",
    specializesInLightingDesign: "Specializes in lighting design",

    // New Keys for Emerging Innovators
    reroomAI: "Reroom AI",
    notableForRenovationProjects: "Notable for renovation projects",
    promeAI: "PromeAI",
    specializesInTextureGeneration: "Specializes in texture generation",

    // Styly Advantage
    realTimeStyleTransferTechnology: "Real-time style transfer technology",
    advancedMaterialRecognition: "Advanced material recognition",
    intelligentSpaceOptimization: "Intelligent space optimization",

    // Performance Metrics
    timeSaved: "Time saved",
    reductionInInitialDesignPhase: "reduction in initial design phase",
    clientSatisfactionRates: "Client satisfaction rates",
    positiveFeedback: "positive feedback",
    costReduction: "Cost reduction",
    averageSavingsInProjectPlanning: "average savings in project planning",

    // Case Study
    reduceDesignIterationTime: "Reduce design iteration time",
    cutDesignCosts: "Cut design costs",

    // Future Trends
    integrationOfARVRTechnologies: "Integration of AR/VR technologies",
    sustainableDesignAutomation: "Sustainable design automation",

    // Expert Perspectives
    aiToolsAreNotReplacingDesigners:
      "AI tools are not replacing designers; they're empowering them to be more creative and efficient",

    // Making the Right Choice
    yourSpecificNeedsAndUseCases: "Your specific needs and use cases",
    budgetConstraints: "Budget constraints",

    // Conclusion
    whileEachPlatformOffersUniqueAdvantages:
      "While each platform offers unique advantages",
    emergesAsAComprehensiveSolution:
      "emerges as a comprehensive solution that combines powerful AI capabilities with user-friendly features",
    keyEvaluationCriteria: "Key Evaluation Criteria",
    marketLeaders: "Market Leaders",
    emergingInnovators: "Emerging Innovators",
    stylyAdvantage: "Styly Advantage",
    performanceMetrics: "Performance Metrics",
    caseStudy: "Case Study",
    futureTrends: "Future Trends",
    expertPerspectives: "Expert Perspectives",
    makingTheRightChoice: "Making the Right Choice",
    conclusion: "Conclusion",

    // Table of Contents
    tableOfContents: "Table of Contents:",
    introduction: "Introduction",
    aiInBedroomDesign: "AI in Bedroom Design",
    stylyioOverview: "Styly.io: Your AI-Powered Bedroom Design Companion",
    eightAIPoweredBedroomDesigns: "Eight AI-Powered Bedroom Designs",
    expertDesignTips: "Expert Design Tips",

    // Introduction
    introductionText:
      "Bedrooms are our sanctuaries. According to the National Sleep Foundation, we spend about one-third of our lives there. It’s vital to create a space that fosters both comfort and style. AI tools like Styly.io are changing the game in bedroom design.",

    // AI in Bedroom Design
    aiInBedroomDesignText:
      "A recent study from Interior Design magazine found AI tools cut down initial concept time by 60%. This gives designers more room to personalize and perfect their designs.",

    // Styly.io Overview
    stylyioOverviewText:
      "Whether you're a designer or a homeowner, Styly.io helps you create beautiful bedroom spaces with ease. It combines advanced AI with intuitive design.",

    // Eight AI-Powered Bedroom Designs
    scandinavianSerenity: "Scandinavian Serenity",
    scandinavianBedroomPrompt:
      "Scandinavian bedroom: minimalist design, light wood furniture, white walls, natural light...",
    modernLuxurySuite: "Modern Luxury Suite",
    modernLuxurySuitePrompt:
      "Contemporary luxury bedroom: high ceilings, champagne metallic details, smart lighting...",
    coastalRetreat: "Coastal Retreat",
    coastalBedroomPrompt:
      "Coastal bedroom: soft blues and sandy beiges, sheer curtains, beach vibes...",
    urbanIndustrial: "Urban Industrial",
    urbanIndustrialPrompt:
      "Industrial chic: exposed brick, steel-frame windows, leather accents...",
    bohemianDreams: "Bohemian Dreams",
    bohemianDreamsPrompt:
      "Boho vibes: macramé, plants, vintage rug, cozy lighting...",
    japaneseZen: "Japanese Zen",
    japaneseZenPrompt:
      "Japanese minimalist: tatami mats, bamboo accents, peaceful harmony...",
    midCenturyModern: "Mid-Century Modern",
    midCenturyModernPrompt:
      "Mid-century modern: walnut, geometric patterns, iconic pieces...",
    contemporaryGlam: "Contemporary Glam",
    contemporaryGlamPrompt:
      "Glamorous style: velvet headboard, crystal lighting, mirrored furniture...",

    // Expert Design Tips
    considerNaturalLight: "Consider natural light when choosing colors",
    ensureWalkableSpace: "Ensure walkable space around furniture",
    layerLighting: "Layer lighting for flexibility",
    includeHiddenStorage: "Include hidden or built-in storage",
    useCalmingMaterials: "Use calming, sleep-promoting materials",

    // Negative Prompt Guidelines
    negativePromptGuidelines: "Negative Prompt Guidelines",
    avoidClutter: "Avoid overcrowded or cluttered layouts",
    keepLightingNatural: "Keep lighting consistent and natural-looking",
    stickToDesignStyle: "Stick to a unified design style",
    maintainProportions: "Maintain proper scale and proportion",

    // Sources and Research
    sourcesAndResearch: "Sources and Research",
    nationalSleepFoundation: "National Sleep Foundation",
    interiorDesignMagazine: "Interior Design Magazine",
    asidAnnualReport: "ASID Annual Report",
    harvardHealthSleepStudies: "Harvard Health Sleep Studies",

    // Conclusion
    conclusionText:
      "With Styly.io, you can design your bedroom exactly how you imagine it. From calm Scandinavian vibes to glamorous hotel-like luxury, the power is in your hands—backed by smart AI.",

    creatingTrendySpaces:
      "Creating Trendy Spaces: The Gen Z Guide to Instagram-Worthy Interiors",
    introductionText1:
      "If there’s one generation redefining self-expression through personal spaces, it’s Gen Z. Armed with a camera phone, sharp aesthetic preferences, and a wide social media audience, this generation knows how to create and showcase enviable Instagram-worthy interiors.",
    introductionText2:
      "But how do you design a space that’s trendy, personal, AND ready for the camera? This guide has you covered. Whether you’re creating an unforgettable feed or just want to spruce up your space, we’ll help you craft the perfect Instagram-worthy interior.",
    understandingAestheticPreferences:
      "Understanding Gen Z’s Aesthetic Preferences",
    aestheticPreferencesText:
      "Gen Z isn’t satisfied with cookie-cutter designs. They’re blending bold aesthetics, nostalgic touches, and functionality to make their spaces truly unique.",
    colorPalettes: "Color Palettes",
    colorPalettesText:
      "Gen Z gravitates toward vibrant color combinations. Think sage green, lavender, muted pinks, and splashes of bold yellows or blues. Their preference? Personalizing spaces with colors that reflect individuality while keeping a cozy vibe.",
    eclecticFurnitureAndDecor: "Eclectic Furniture and Decor",
    eclecticFurnitureAndDecorText:
      "Instead of mainstream furniture collections, Gen Z hunts for unique vintage finds, second-hand treasures, and quirky accent pieces. It’s style-meets-sustainability on a budget.",
    minimalistMeetsMaximalist: "Minimalist Meets Maximalist",
    minimalistMeetsMaximalistText:
      "Gen Z decorates on one extreme or the other. Some lean into minimalist Nordic styles with clean lines and whites, while others go full maximalist with layered textures, bold patterns, and curated clutter that feels intentional.",
    keyElementsOfInstagramWorthyInterior:
      "Key Elements of an Instagram-Worthy Interior",
    instagramWorthyDefinition:
      "What defines “Instagram-worthy”? It’s all about creating that wow factor. These elements can make any room pop both in real life and on camera:",
    naturalLighting: "Natural Lighting",
    naturalLightingText:
      "Lighting can make or break your photos. Large windows, sheer curtains, and strategically placed mirrors maximize the natural light. Think soft and diffused, not harsh.",
    accentWalls: "Accent Walls",
    accentWallsText:
      "From funky wallpaper to a gallery of art, accent walls are a striking focal point. Popular choices include geometric murals, DIY photo walls, and plant-covered walls.",
    statementPieces: "Statement Pieces",
    statementPiecesText:
      "Maybe it’s a retro velvet couch or a neon sign above the bed. Statement pieces anchor the room’s aesthetics and create visual interest.",
    greeneryAndPlants: "Greenery and Plants",
    greeneryAndPlantsText:
      "Every Instagram-worthy room has some green. From lush monstera leaves to hanging ivy, plants bring vibrancy and life to a space.",
    layeredTextures: "Layered Textures",
    layeredTexturesText:
      "Think soft rugs, chunky blankets, fluffy pillows, and textured wallpapers. Layering textures adds depth, making the room feel both visually dynamic and cozy.",
    declutteredVisuals: "Decluttered Visuals",
    declutteredVisualsText:
      "While Gen Z embraces curated chaos, clutter that’s well-organized is key. Decorative baskets, minimalist shelves, and hidden storage keep the scene crisp and clean for the camera.",
    incorporatingSustainabilityAndTechnology:
      "Incorporating Sustainability and Technology",
    sustainabilityTechText:
      "Gen Z doesn’t just care about aesthetics—they care about the planet and staying connected. Here’s how they integrate sustainability and smart tech into their designs:",
    sustainableMaterials: "Sustainable Materials",
    sustainableMaterialsText:
      "Eco-conscious design is non-negotiable for this generation. Think recycled wood furniture, bamboo decor, and upcycled pieces from thrift stores. They prioritize ethical choices over fast furniture trends.",
    smartHomeTechnology: "Smart Home Technology",
    smartHomeTechnologyText:
      "Integrating tech like voice-controlled lights, smart speakers, and app-enabled air purifiers is common. Tools like home decor AI free platforms, like Styly’s AI room planner, make designing a breeze.",
    multiFunctionalFurniture: "Multi-functional Furniture",
    multiFunctionalFurnitureText:
      "Small spaces are optimized with dual-purpose furniture—think storage ottomans, foldable desks, and Murphy beds. It’s trendy AND practical.",
    caseStudiesAndExamples: "Case Studies and Real-Life Examples",
    caseStudyIntro:
      "What makes a space Insta-famous? Here are some standout examples of interiors that broke the algorithm:",
    economicEfficiencyText:
      "A small apartment oozing coziness with a jungle of hanging plants, vintage furniture, and muted tones. Pro Tip? Use contrasting pots for your plants!",
    geometricDreamBedroom: "Geometric Dream Bedroom",
    geometricDreamBedroomText:
      "Featuring pastel-colored geometric wall designs paired with minimal shelves, this room exemplifies Gen Z’s blend of minimalist decor with bold personal statements.",
    cafeInspiredKitchenNook: "Café-Inspired Kitchen Nook",
    cafeInspiredKitchenNookText:
      "A kitchen with industrial bar stools, subway tiles, and niche coffee setups has been a hit, with some posts getting hundreds of thousands of likes.",
    bohoOutdoorBalcony: "Boho Outdoor Balcony",
    bohoOutdoorBalconyText:
      "Think rattan chairs, fairy lights, and layered outdoor rugs. It’s cozy, budget-friendly, and becomes an instant nighttime photo favorite.",
    diyInstagramWorthyMakeovers: "Tips for DIY Instagram-Worthy Makeovers",
    diyTipsIntro:
      "Want to recreate one of these stunning spaces? With a little creativity and effort, you can. Here are some affordable DIY tips:",
    startWithMoodBoard: "Start with a Mood Board",
    startWithMoodBoardText:
      "Use an AI room decorator like Styly’s AI room design free tool. Upload images of your space, try different layouts, and find inspiration that suits your vibe.",
    maximizeWhatYouHave: "Maximize What You Have",
    maximizeWhatYouHaveText:
      "Rearrange existing furniture to see your room in a new light. Sometimes shifting a couch or bed to another spot can transform the room.",
    getCreativeWithPaint: "Get Creative With Paint",
    getCreativeWithPaintText:
      "A can of paint goes a long way! Create accents or frames on walls with bold shapes or opt for a monochromatic corner in one shade.",
    thriftForJewels: "Thrift for Jewels",
    thriftForJewelsText:
      "Shop at local second-hand stores or antique markets for quirky finds, like retro chairs or vintage vases.",
    accessorizeThoughtfully: "Accessorize Thoughtfully",
    accessorizeThoughtfullyText:
      "Choose budget-friendly details like fairy lights, pillows with geometric designs, or sleek vases to elevate your space.",
    playWithAnglesForPhotos: "Play With Angles for Photos",
    playWithAnglesForPhotosText:
      "Once your space is done, experiment with camera angles, lighting, and photo filters to capture its charm.",
    socialMediaShapingDesignTrends:
      "The Role of Social Media in Shaping Design Trends",
    socialMediaShapingDesignTrendsText:
      "Social media isn’t just about showcasing—it’s shaping what’s trendy. Here’s how Instagram plays a vital role:",
    crowdsourcingCreativity: "Crowdsourcing Creativity",
    crowdsourcingCreativityText:
      "Through hashtags like #RoomGoals or #AestheticInteriors, people can easily draw inspiration. Trends spread fast because of this visibility.",
    massAppealToNicheInterests: "Mass Appeal to Niche Interests",
    massAppealToNicheInterestsText:
      "Platforms give rise to niche aesthetics such as “cottage core” or “dark academia,” helping like-minded groups build communities.",
    interactiveShopping: "Interactive Shopping",
    interactiveShoppingText:
      "Social media integrations now allow users to shop directly from inspirational posts. Just tap, and add to cart.",
    empoweringNewCreators: "Empowering New Creators",
    empoweringNewCreatorsText:
      "Interior enthusiasts and influencers are not just reshaping design but careers. With thousands of followers, they’re dictating the future of interiors.",
    shareYourBestSpace: "Share Your Best Space",
    shareYourBestSpaceText:
      "Creating Instagram-worthy interiors involves creativity, tech-savvy tools, and an eye for detail. But most importantly, it’s about YOU.",
    shareYourBestSpaceInstagram:
      "What’s your favorite tip? Share your Insta-worthy spaces with us @Stylyio, and don’t forget to try our AI room planner to design your next masterpiece.",
    prevArticle:
      "How Real Estate Agents Are Boosting Sales with AI-Powered Virtual Staging: The 2025 Market Reality",
    nextArticle:
      "How to Build Your Own House with AI Tools Including Porch Design",
    readMore: "Read More",
    introductionText1:
      "Transforming your home interiors doesn’t have to break the bank. With the advent of advanced tools like",
    stylyAI: "Styly’s free AI room design",
    introductionText2:
      "solutions, you can achieve stunning results on a budget. Here are 10 expert tips to help you save big on your home interiors while using the latest AI-powered tools.",

    // Tips
    planBeforeYouSpend: "Plan Before You Spend",
    planBeforeYouSpendContent:
      "Proper planning is essential to avoid unnecessary expenses. Use free AI interior design tools like Styly to visualize your ideas before committing to them.",
    optimizeRoomLayoutWithAI: "Optimize Room Layout with AI",
    optimizeRoomLayoutWithAIContent:
      "Leverage an AI room decorator to experiment with layouts. Tools like Styly can provide multiple design options to utilize space efficiently.",
    upcycleFurniture: "Upcycle Furniture",
    upcycleFurnitureContent:
      "Give your furniture a fresh look by upcycling. Pair this with Styly’s AI room design features to visualize revamped pieces in your interiors.",
    focusOnDIYProjects: "Focus on DIY Projects",
    focusOnDIYProjectsContent:
      "Add a personal touch with DIY decor. Use free AI room design tools to guide your projects and align them with your design theme.",
    shopSmartForMaterials: "Shop Smart for Materials",
    shopSmartForMaterialsContent:
      "Look for discounts or second-hand options. AI tools help visualize how materials will work, preventing wasted purchases.",
    prioritizeKeyElements: "Prioritize Key Elements",
    prioritizeKeyElementsContent:
      "Focus your budget on impactful items like lighting. AI design tools help identify high-value, budget-friendly options.",
    experimentWithColorsVirtually: "Experiment with Colors Virtually",
    experimentWithColorsVirtuallyContent:
      "Before buying, test color palettes using Styly’s free AI tools. Save money by getting it right on the first try.",
    investInMultiFunctionalFurniture: "Invest in Multi-Functional Furniture",
    investInMultiFunctionalFurnitureContent:
      "Opt for items like sofa beds or ottomans with storage. Visualize them with AI tools to ensure the best fit.",
    useAIForAccessoryPlacement: "Use AI for Accessory Placement",
    useAIForAccessoryPlacementContent:
      "Styly’s AI can recommend where to place accessories for a polished look without overbuying.",
    stayUpdatedWithTrends: "Stay Updated with Trends",
    stayUpdatedWithTrendsContent:
      "AI platforms offer trend insights. Use them to incorporate stylish updates without a complete redo.",

    // Why Choose Styly
    whyChooseStyly: "Why Choose Styly for Your Home Interiors?",
    stylyDescription:
      "Styly’s free AI interior design tools make it easy to create personalized, budget-friendly interiors. Whether redecorating a room or your whole home, Styly empowers you to:",
    visualizeDesigns: "Visualize designs instantly",
    experimentWithLayouts: "Experiment with layouts and styles",
    saveMoney: "Save money by avoiding costly mistakes",
    getStartedWithStyly: "Get started with Styly today and take the stress out of home interiors in 2025. ",
    freeAIRoomDesign: "free AI room design",
    transformYourSpace: "tools and transform your space like a pro!",

  },
  fr: {
    // Add missing properties with placeholder translations
    eclecticFusion: "Fusion éclectique",
    eclecticFusionPrompt:
      "Fusion éclectique : mélange de styles, couleurs vibrantes, objets uniques...",
    minimalistZen: "Zen minimaliste",
    minimalistZenPrompt:
      "Zen minimaliste : lignes épurées, palette neutre, ambiance apaisante...",
    vintageCharm: "Charme vintage",
    vintageCharmPrompt:
      "Charme vintage : meubles anciens, détails classiques, ambiance chaleureuse...",
    keywords:
      "Mots-clés : design de chambre IA, design minimaliste, design vintage, design éclectique",
    followUsHere: "Suivez-nous ici !",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    facebook: "Facebook",
    // Navbar
    pricing: "Tarification",
    blog: "Blog",
    signIn: "Connexion",
    expertDesignTipsText:
      "Conseils de design d'experts pour améliorer vos intérieurs.",
    japaneseMinimalism: "Minimalisme japonais",
    japaneseMinimalismPrompt:
      "Minimalisme japonais : lignes épurées, matériaux naturels, ambiance sereine...",
    prompt: "Entrez vos préférences de design ici...",

    // Hero section
    welcomeToFuture: "Bienvenue dans le Futur du Design",
    mostUsedAITool: "#1 le plus utilisé",
    aiDesignTool: "Outil de design IA",
    for: "pour",
    modernSpaces: "espaces modernes",
    redesignEmptyRooms:
      "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstate: "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsNoDownloads:
      "Pas d'outils, pas de téléchargements. Juste des résultats",
    uploadPhoto: "Télécharger une Photo pour Commencer",
    supporting: "Au service de",
    realEstatePros:
      "plus de 20 000 professionnels de l'immobilier, designers et propriétaires",

    // Unlock potential section
    designExcellence: "Excellence en Design",
    unlockThePotential: "LIBÉREZ LE POTENTIEL",
    aiDrawsInspiration: "Notre IA s'inspire d'architectes légendaires tels que",
    legendaryArchitects:
      "Le Corbusier, Zaha Hadid, Frank Gehry, Frank Lloyd Wright, et Gaudi",
    experienceAdvancedAI:
      "Découvrez comment notre technologie d'IA avancée transforme vos concepts de design en une réalité époustouflante.",
    explore: "Explorer",

    // Architecture Revolution
    architectureRevolution: "RÉVOLUTION ARCHITECTURALE",
    homeDesignByAI: "Design de maison, de pièce et d'intérieur par IA.",

    // ModernSpaces
    redesignRooms:
      "Rénovez des pièces vides en intérieurs stylés et prêts pour le marché —",
    forRealEstateRenovation:
      "pour l'immobilier, la rénovation et le commerce de détail.",
    noToolsJustResults:
      "Pas d'outils, pas de téléchargements. Juste des résultats.",

    // HowItWorks
    simpleProcess: "Processus Simple",
    howItWorks: "Comment Ça Marche",
    transformSpace:
      "Transformez votre espace en trois étapes simples avec notre plateforme de design propulsée par l'IA",
    upload: "Télécharger",
    uploadDescription:
      "Téléchargez simplement votre image ou esquisse de l'espace que vous souhaitez redessiner.",
    personalize: "Personnaliser",
    personalizeDescription:
      "Choisissez vos préférences, de la sélection de mobilier au style, pour créer votre espace idéal par design de pièce IA.",
    furnitureSelection: "mobilier",
    enjoy: "Profiter",
    enjoyDescription:
      "Détendez-vous et profitez du résultat final par IA pour le design d'intérieur.",
    aiForInteriorDesign: "IA pour le design d'intérieur",
    getStartedFree: "Commencer Gratuitement",
    noCreditCard: "Pas de Carte de Crédit Requise, Pas d'Engagements",

    // Testimonials
    dontTakeOurWord: "Ne vous fiez pas qu'à nos paroles",
    hearFromCustomers:
      "Écoutez certains de nos clients étonnants qui ont utilisé notre produit",

    // FAQ
    howItWorksFAQ: "Comment ça marche",
    faqs: "FAQs",
    faqDescription:
      "Tout ce que vous devez savoir sur le produit et la facturation.",
    faqQuestions: [
      {
        question:
          "Qu'est-ce qui rend Styly AI unique dans le monde du design d'intérieur?",
        answer:
          "Styly AI se distingue en combinant l'intelligence artificielle de pointe avec les principes d'architectes légendaires comme Le Corbusier et Zaha Hadid. Notre plateforme ne nécessite aucun téléchargement ou outil spécial, rendant le design d'intérieur professionnel accessible à tous, des professionnels de l'immobilier aux propriétaires.",
      },
      {
        question:
          "Est-ce que tout le monde peut utiliser Styly AI, ou est-il conçu spécifiquement pour les professionnels?",
        answer:
          "Styly AI est conçu pour tout le monde! Bien qu'il soit assez puissant pour les professionnels de l'immobilier et les designers d'intérieur, il est également assez intuitif pour les propriétaires et les passionnés de design sans expérience préalable. Notre processus simple en trois étapes le rend accessible aux utilisateurs de tous niveaux.",
      },
      {
        question:
          "Comment Styly AI aide-t-il les utilisateurs à visualiser leurs idées de design?",
        answer:
          "Il suffit de télécharger une photo de votre espace vide, de sélectionner vos préférences et votre style de design, et notre IA le transformera en un intérieur conçu professionnellement. Vous pouvez expérimenter différents styles, arrangements de meubles et schémas de couleurs jusqu'à ce que vous trouviez le look parfait pour votre espace.",
      },
      {
        question:
          "Styly AI offre-t-il une variété de styles de design parmi lesquels choisir?",
        answer:
          "Absolument! Styly AI offre une large gamme de styles de design, du minimaliste moderne au traditionnel classique, industriel, scandinave, mid-century moderne, et bien d'autres. Vous pouvez également personnaliser les éléments de chaque style pour créer un look unique qui correspond parfaitement à votre vision.",
      },
      {
        question:
          "Quel type de support Styly AI fournit-il à ses utilisateurs?",
        answer:
          "Nous offrons un support complet comprenant des tutoriels vidéo, une base de connaissances détaillée et un service client réactif. Notre équipe est disponible pour vous aider avec toutes les questions ou défis que vous pourriez rencontrer lors de l'utilisation de notre plateforme. De plus, notre blog présente régulièrement des conseils de design et de l'inspiration.",
      },
    ],

    // VideoSection
    seeItInAction: "Voir en action",
    watchDemo: "Regarder la démo",

    // SupportedBy
    supportedBy: "Soutenu par",

    // MarketSegmentCarousel
    tailoredSolutionsForEveryNeed: "Solutions Adaptées à Chaque Besoin",
    aiDesignToolServesDiverseMarkets:
      "Notre outil de design IA sert divers segments de marché avec des fonctionnalités spécialisées",
    realEstateProfessionals: "PROFESSIONNELS DE L'IMMOBILIER",
    homeownersRenters: "PROPRIÉTAIRES & LOCATAIRES",
    startupsTechCreators: "STARTUPS & CRÉATEURS TECH",
    interiorDesignersArchitects: "DESIGNERS D'INTÉRIEUR & ARCHITECTES",
    retailersBrands: "DÉTAILLANTS & MARQUES",
    wallpaperBrands: "MARQUES DE PAPIER PEINT",
    wallpaperFlooringBrands: "MARQUES DE PAPIER PEINT & REVÊTEMENT DE SOL",
    flooringBrands: "MARQUES DE REVÊTEMENT DE SOL",

    // Footer links
    footerCompany: "Entreprise",
    footerAbout: "À propos",
    footerFeatures: "Fonctionnalités",
    footerPricing: "Tarification",
    footerContact: "Contact",
    footerLegal: "Légal",
    footerTerms: "Conditions",
    footerPrivacy: "Confidentialité",
    footerCopyright: "© 2024 STYLY. Tous droits réservés.",
    footerSlogan:
      "La révolution architecturale : redéfinir le design d'intérieur avec l'IA.",
    footerLogin: "Se connecter",
    footerSignup: "S'inscrire",
    footerCopyrightYear: "Copyright 2025 STYLY",
    footerVideoGuide: "Guide Vidéo",
    footerCookieSettings: "Paramètres des cookies",

    // Stats section
    statsHeading1: "STYLY : Pas le hasard, mais l'aboutissement d'une",
    statsHeading2: "recherche quantitative rigoureuse.",
    statsHours: "heures de développement",
    statsDesigners: "Top Designers approuvés",
    statsCompanies: "Entreprises de confiance",
    statsArticles: "Articles de recherche",

    // Blog section
    blogTrends: "Nouvelles tendances",
    blogDescription:
      "Les dernières actualités du secteur, interviews, technologies et ressources.",
    realEstateLandscape:
      "Le paysage immobilier a fondamentalement changé depuis 2023",
    generationalTrendsReport: "Rapport sur les tendances générationnelles",
    buyersBeginSearch:
      "99 % des acheteurs de maison commencent leur recherche en ligne, rendant la présentation numérique non seulement importante mais essentielle pour le succès des ventes.",
    virtualStagingRevolution:
      "La révolution du home staging virtuel : Statistiques du marché actuel",
    propertiesWithAIStaging:
      "Les propriétés avec home staging virtuel AI reçoivent 2,7 fois plus de demandes que les annonces traditionnelles",
    virtuallyStagedSellFaster:
      "Les propriétés avec home staging virtuel se vendent 31 % plus rapidement que les maisons non mises en scène",
    aiStagingCostReduction:
      "Le home staging AI permet une réduction de coûts de 98 % par rapport au home staging physique",
    propertiesWithAIEnhancedPhotos:
      "Les propriétés avec photos améliorées par AI commandent des prix de vente 5 à 8 % plus élevés",
    buyersStruggleToVisualize:
      "92 % des acheteurs ont du mal à visualiser le potentiel dans les espaces vides",
    source: "Source :",
    realEstateStagingAssociation:
      "Rapport d'impact de l'Association de home staging immobilier 2025",
    whyAIStagingIndustryStandard:
      "Pourquoi le home staging virtuel AI est désormais la norme de l'industrie",
    economicEfficiency: "Efficacité économique",
    economicEfficiencyDescription:
      "Sur le marché immobilier fluctuant de 2025, le home staging physique traditionnel coûte entre 3500 $ et 10 000 $ par propriété, tandis que le home staging virtuel AI avec Styly.io commence à moins de 100 $ par propriété.",
    speedToMarket: "Avantage en termes de rapidité de mise sur le marché",
    speedToMarketDescription:
      "Avec Styly.io, je peux avoir des photos mises en scène professionnellement prêtes en moins d'une heure après que le photographe ait livré les images brutes.",
    marketSpecificCustomization: "Personnalisation spécifique au marché",
    marketSpecificCustomizationDescription:
      "Le home staging virtuel AI actuel permet aux agents de cibler des segments d'acheteurs spécifiques avec des conceptions personnalisées, d'ajuster la mise en scène en fonction des retours du marché en temps réel, de créer des variations saisonnières et de générer plusieurs options de conception pour des préférences d'acheteurs diverses.",
    targetSpecificBuyerDemographics:
      "Cibler des segments d'acheteurs spécifiques avec des conceptions personnalisées",
    adjustStagingRealTimeFeedback:
      "Ajuster la mise en scène en fonction des retours du marché en temps réel",
    createSeasonalVariations:
      "Créer des variations saisonnières pour maintenir les annonces fraîches",
    generateDesignOptions:
      "Générer plusieurs options de conception pour des préférences d'acheteurs diverses",
    realWorldSuccessStories: "Histoires de réussite réelles de 2025",
    caseStudy1Title: "Étude de cas 1 : Développement à usage mixte à Austin",
    caseStudy1Property:
      "Propriété : Construction neuve de 12 unités, complètement vide",
    caseStudy1Challenge:
      "Défi : Nécessité de pré-vendre 60 % avant la fin de la construction",
    caseStudy1Solution:
      "Solution : Mise en scène AI avec Styly.io montrant plusieurs options de configuration",
    caseStudy1Result: "Résultat : 75 % pré-vendus en 45 jours",
    caseStudy2Title: "Étude de cas 2 : Projet de rénovation historique",
    caseStudy2Property:
      "Propriété : Artisan du 1920 nécessitant des mises à jour importantes",
    caseStudy2Challenge:
      "Défi : Les acheteurs ne pouvaient pas visualiser les possibilités modernes",
    caseStudy2Solution:
      "Solution : Rénovation virtuelle montrant l'intérieur contemporain tout en préservant le caractère",
    caseStudy2Result:
      "Résultat : Vendu 12 % au-dessus des comparables du quartier",
    agentImplementationTitle:
      "Comment les principaux agents utilisent le home staging AI en 2025",
    segmentedMarketingApproaches: "Approches marketing segmentées",
    segmentedMarketingDescription:
      "Les agents sophistiqués d'aujourd'hui utilisent Styly.io pour créer des présentations ciblées pour divers segments d'acheteurs.",
    emptyNesterDownsizing: "Concepts de downsizing pour les retraités",
    firstTimeHomebuyer: "Configurations pour les acheteurs de première maison",
    workFromHomeLayouts: "Agencements optimisés pour le télétravail",
    multigenerationalLiving: "Aménagements pour une vie multigénérationnelle",
    renovationVisualizationTitle: "Visualisation de la rénovation",
    renovationVisualizationDescription:
      "Avec des coûts de construction à des niveaux historiques, les agents montrent le potentiel des rénovations.",
    energyEfficientUpgrades:
      "Améliorations énergétiques avec économies projetées",
    spaceReconfiguration: "Possibilités de reconfiguration de l'espace",
    modernUpdates: "Mises à jour modernes des propriétés anciennes",
    accessibilityModifications: "Modifications pour l'accessibilité",
    digitalMarketingIntegration: "Intégration du marketing numérique",
    digitalMarketingDescription:
      "Les propriétés mises en scène avec Styly.io en 2025 connaissent une bien plus grande engagement sur les plateformes sociales.",
    higherEngagement: "53 % d'engagement en plus sur les plateformes sociales",
    longerTimeSpent: "2,2 fois plus de temps passé sur les pages des annonces",
    moreSavedListings:
      "40 % de plus de listes enregistrées/ajoutées aux favoris",
    higherQualityLeads: "Des prospects de bien meilleure qualité",
    currentMarketAnalysis: "Analyse actuelle du marché et prévisions",
    marketAnalysisDescription:
      "Selon le rapport 2025 de McKinsey & Company sur la technologie immobilière :",
    realEstateTechReport: "Rapport sur la technologie immobilière",
    aiStagingAdoption:
      "L'adoption du home staging AI a atteint 78 % parmi les agents performants",
    luxuryPropertiesUseAI:
      "94 % des propriétés de luxe utilisent désormais le home staging AI comme norme",
    virtualStagingMarketGrowth:
      "Le marché du home staging virtuel a augmenté de 87 % depuis 2023",
    declineOfPhysicalStaging:
      "Les services de home staging physique ont diminué de 35 %",
    evidenceBasedBestPractices:
      "Pratiques recommandées basées sur les données pour 2025",
    strategicApplication: "Application stratégique",
    marketResponsiveDesign: "Conception réactive au marché",
    highResolutionImages: "Images grand angle de haute résolution",
    consistentHeightPerspective: "Hauteur et perspective cohérentes",
    cleanSpacesForAI:
      "Espaces vides et propres pour un traitement optimal par l'IA",
    focusOnProblematicSpaces:
      "Se concentrer d'abord sur les espaces problématiques",
    showcaseVersatility:
      "Mettre en valeur la polyvalence des pièces principales",
    demonstrateLifestylePossibilities:
      "Démontrer les possibilités de modes de vie",
    researchLocalPreferences: "Étudier les préférences locales des acheteurs",
    alignWithDesignTrends: "S'aligner avec les tendances actuelles du design",
    considerPropertyElements:
      "Tenir compte des éléments architecturaux propres à la propriété",
    expertAnalysis: "Analyse d'expert",
    expertAnalysisQuote:
      "\"La question n'est plus de savoir s'il faut utiliser le home staging AI, mais comment l'utiliser de manière plus efficace.\"",
    the2025Reality: "La réalité de 2025",
    aiStagingEmbeddedInPractice:
      "Le home staging virtuel AI est désormais fermement intégré dans les pratiques immobilières réussies.",
    transformRealEstateBusiness:
      "Transformez votre entreprise immobilière aujourd'hui",
    experienceAIAdvantage:
      "Découvrez l'avantage réel du home staging virtuel AI avec Styly.io.",
    meetBuyerExpectations: "Répondez aux attentes des acheteurs modernes",
    maximizePropertyValues:
      "Maximisez la valeur des propriétés sur tous les marchés",
    reduceDaysOnMarket: "Réduisez le temps de mise sur le marché",
    scaleMarketingEfforts: "Accélérez les efforts marketing efficacement",
    deliverConsistentPresentation:
      "Offrez une présentation professionnelle et cohérente",
    realEstateVirtualStaging:
      "Guide ultime pour les intérieurs Instagramables de Gen Z",
    howRealEstateAgentsBoostSales:
      "Comment les agents immobiliers augmentent les ventes avec le home staging virtuel AI : La réalité du marché de 2025",
    genZUltimateGuideToInteriors:
      "Guide ultime pour les intérieurs Instagramables de Gen Z",
    howToBuildYourHouse:
      "Comment construire votre propre maison avec des outils AI incluant le design de la terrasse",
    ultimateGuideToAIInteriorDesign:
      "Guide ultime pour les outils de design d'intérieur IA en 2025 : Une comparaison complète",
    eightStunningAIBedroomDesigns:
      "Huit designs d'intérieurs AI-générés : Transformez votre espace avec Styly.io",
    expertTipsOnHomeInteriors:
      "10 conseils experts pour économiser de l'argent sur les intérieurs en 2025",

    marketOverview: "Aperçu du marché",
    keyEvaluationCriteria: "Critères d'évaluation clés",
    marketLeaders: "Les leaders du marché et leurs offres uniques",
    emergingInnovators: "Innovateurs émergents",
    stylyAdvantage: "L'avantage Styly.io",
    performanceMetrics: "Mesures de performance",
    caseStudy: "Étude de cas : Solutions de design transformatives",
    futureTrends: "Tendances et innovations futures",
    expertPerspectives: "Perspectives d'experts",
    makingTheRightChoice: "Faire le bon choix",
    conclusion: "Conclusion",

    // New Keys for Market Leaders
    foyr: "Foyr",
    knownForCommercialApplications: "Connu pour les applications commerciales",
    palette: "Palette",
    focusesOnColorHarmony: "Se concentre sur l'harmonie des couleurs",
    pablo: "Pablo",
    specializesInLightingDesign: "Spécialiste de la conception d'éclairage",

    // New Keys for Emerging Innovators
    reroomAI: "Reroom AI",
    notableForRenovationProjects: "Remarquable pour les projets de rénovation",
    promeAI: "PromeAI",
    specializesInTextureGeneration: "Spécialiste de la génération de textures",

    // Styly Advantage
    realTimeStyleTransferTechnology:
      "Technologie de transfert de style en temps réel",
    advancedMaterialRecognition: "Reconnaissance avancée des matériaux",
    intelligentSpaceOptimization: "Optimisation intelligente de l'espace",

    // Performance Metrics
    timeSaved: "Temps gagné",
    reductionInInitialDesignPhase:
      "réduction de la phase de conception initiale",
    clientSatisfactionRates: "Taux de satisfaction des clients",
    positiveFeedback: "retours positifs",
    costReduction: "Réduction des coûts",
    averageSavingsInProjectPlanning:
      "économies moyennes dans la planification des projets",

    // Case Study
    reduceDesignIterationTime: "Réduire le temps d'itération de conception",
    cutDesignCosts: "Réduire les coûts de conception",

    // Future Trends
    integrationOfARVRTechnologies: "Intégration des technologies AR/VR",
    sustainableDesignAutomation: "Automatisation de la conception durable",

    // Expert Perspectives
    aiToolsAreNotReplacingDesigners:
      "Les outils d'IA ne remplacent pas les designers, ils les aident à être plus créatifs et efficaces",

    // Making the Right Choice
    yourSpecificNeedsAndUseCases:
      "Vos besoins spécifiques et cas d'utilisation",
    budgetConstraints: "Contraintes budgétaires",

    // Conclusion
    whileEachPlatformOffersUniqueAdvantages:
      "Bien que chaque plateforme offre des avantages uniques",
    emergesAsAComprehensiveSolution:
      "émerge comme une solution complète alliant des capacités d'IA puissantes et des fonctionnalités faciles à utiliser",
    // Table of Contents
    tableOfContents: "Table des matières:",
    introduction: "Introduction",
    aiInBedroomDesign: "L'IA dans la conception de chambres",
    stylyioOverview:
      "Styly.io : Votre compagnon de conception de chambres alimenté par l'IA",
    eightAIPoweredBedroomDesigns:
      "Huit conceptions de chambres alimentées par l'IA",
    expertDesignTips: "Conseils d'experts en conception",

    // Introduction
    introductionText:
      "Les chambres sont nos sanctuaires. Selon la National Sleep Foundation, nous y passons environ un tiers de notre vie. Il est essentiel de créer un espace qui favorise à la fois le confort et le style. Des outils d'IA comme Styly.io révolutionnent la conception des chambres.",

    // AI in Bedroom Design
    aiInBedroomDesignText:
      "Une étude récente de la revue Interior Design a révélé que les outils d'IA réduisent de 60 % le temps de conception initial. Cela donne aux designers plus de place pour personnaliser et perfectionner leurs conceptions.",

    // Styly.io Overview
    stylyioOverviewText:
      "Que vous soyez designer ou propriétaire, Styly.io vous aide à créer facilement de magnifiques espaces de chambre. Il combine une IA avancée avec un design intuitif.",

    // Eight AI-Powered Bedroom Designs
    scandinavianSerenity: "Sérénité scandinave",
    scandinavianBedroomPrompt:
      "Chambre scandinave : design minimaliste, meubles en bois clair, murs blancs, lumière naturelle...",
    modernLuxurySuite: "Suite de luxe moderne",
    modernLuxurySuitePrompt:
      "Chambre contemporaine de luxe : hauts plafonds, détails métalliques champagne, éclairage intelligent...",
    coastalRetreat: "Retraite côtière",
    coastalBedroomPrompt:
      "Chambre côtière : bleus doux et beiges sable, rideaux légers, ambiance de plage...",
    urbanIndustrial: "Industriel urbain",
    urbanIndustrialPrompt:
      "Chic industriel : briques apparentes, fenêtres en acier, accents en cuir...",
    bohemianDreams: "Rêves bohèmes",
    bohemianDreamsPrompt:
      "Ambiance boho : macramé, plantes, tapis vintage, éclairage cosy...",
    japaneseZen: "Zen japonais",
    japaneseZenPrompt:
      "Minimalisme japonais : tatamis, accents en bambou, harmonie paisible...",
    midCenturyModern: "Moderne des années 50",
    midCenturyModernPrompt:
      "Moderne des années 50 : noyer, motifs géométriques, pièces iconiques...",
    contemporaryGlam: "Glamour contemporain",
    contemporaryGlamPrompt:
      "Style glamour : tête de lit en velours, éclairage cristallin, meubles en miroir...",

    // Expert Design Tips
    considerNaturalLight:
      "Tenez compte de la lumière naturelle lors du choix des couleurs",
    ensureWalkableSpace:
      "Assurez-vous qu'il y a de l'espace pour circuler autour des meubles",
    layerLighting: "Superposez les éclairages pour plus de flexibilité",
    includeHiddenStorage:
      "Ajoutez des espaces de rangement dissimulés ou intégrés",
    useCalmingMaterials:
      "Utilisez des matériaux apaisants, favorisant le sommeil",

    // Negative Prompt Guidelines
    negativePromptGuidelines: "Directives pour les prompts négatifs",
    avoidClutter: "Évitez les mises en page encombrées ou surchargées",
    keepLightingNatural: "Maintenez un éclairage naturel et cohérent",
    stickToDesignStyle: "Restez fidèle à un style de design unifié",
    maintainProportions: "Respectez les proportions et les échelles adéquates",

    // Sources and Research
    sourcesAndResearch: "Sources et recherches",
    nationalSleepFoundation: "National Sleep Foundation",
    interiorDesignMagazine: "Interior Design Magazine",
    asidAnnualReport: "Rapport annuel ASID",
    harvardHealthSleepStudies: "Études sur le sommeil de Harvard",

    // Conclusion
    conclusionText:
      "Avec Styly.io, vous pouvez concevoir votre chambre exactement comme vous l'imaginez. Des ambiances scandinaves apaisantes à un luxe de type hôtel glamour, le pouvoir est entre vos mains, soutenu par une IA intelligente.",
    creatingTrendySpaces:
      "Créer des espaces tendance et dignes d'Instagram",
    

    // Introduction
    introductionText1:
      "S'il y a bien une génération qui redéfinit l'expression de soi à travers les espaces personnels, c'est bien la génération Z. Armée de son téléphone portable, de préférences esthétiques marquées et d'une large audience sur les réseaux sociaux, cette génération sait comment créer et présenter des intérieurs dignes d'Instagram.",
    introductionText2:
      "Mais comment concevoir un espace qui soit tendance, personnel ET prêt pour la caméra ? Ce guide est fait pour vous. Que vous créiez un feed inoubliable ou que vous souhaitiez simplement améliorer votre espace, nous vous aiderons à créer l'intérieur parfait pour Instagram.",

    // Understanding Gen Z’s Aesthetic Preferences
    understandingAestheticPreferences:
      "Comprendre les préférences esthétiques de la génération Z",
    aestheticPreferencesText:
      "La génération Z n'est pas satisfaite des designs standards. Elle mélange audacieusement l'esthétique, des touches nostalgiques et la fonctionnalité pour rendre leurs espaces véritablement uniques.",

    // Gen Z's Design Preferences
    colorPalettes: "Palettes de couleurs",
    colorPalettesText:
      "La génération Z privilégie des combinaisons de couleurs vibrantes. Pensez au vert sauge, à la lavande, aux roses doux et aux éclats de jaunes ou bleus audacieux. Leur préférence ? Personnaliser les espaces avec des couleurs qui reflètent l'individualité tout en conservant une ambiance chaleureuse.",
    eclecticFurnitureAndDecor: "Mobilier et décoration éclectiques",
    eclecticFurnitureAndDecorText:
      "Au lieu de collections de meubles grand public, la génération Z recherche des objets uniques, des trésors d'occasion et des pièces décoratives insolites. C'est le style qui rencontre la durabilité, et ce, avec un petit budget.",
    minimalistMeetsMaximalist: "Minimalisme et maximalisme",
    minimalistMeetsMaximalistText:
      "La génération Z décore selon deux extrêmes. Certains se tournent vers les styles nordiques minimalistes avec des lignes épurées et des couleurs blanches, tandis que d'autres adoptent un maximalisme total avec des textures superposées, des motifs audacieux et du désordre organisé qui semble intentionnel.",

    // Key Elements of Instagram-Worthy Interior
    keyElementsOfInstagramWorthyInterior:
      "Éléments clés d'un intérieur digne d'Instagram",
    instagramWorthyDefinition:
      "Qu'est-ce qui définit un intérieur digne d'Instagram ? Tout est dans la création de cet effet waouh. Ces éléments peuvent rendre n'importe quelle pièce attrayante, en vrai comme sur caméra :",
    naturalLighting: "Lumière naturelle",
    naturalLightingText:
      "L'éclairage peut faire ou défaire vos photos. De grandes fenêtres, des rideaux transparents et des miroirs stratégiquement placés maximisent la lumière naturelle. L'idée est de choisir une lumière douce et diffuse, non agressive.",
    accentWalls: "Murs d'accent",
    accentWallsText:
      "Des papiers peints funky à une galerie d'art, les murs d'accent sont un point focal frappant. Les choix populaires incluent les fresques géométriques, les murs photo faits maison et les murs recouverts de plantes.",
    statementPieces: "Pièces maîtresses",
    statementPiecesText:
      "Cela peut être un canapé en velours rétro ou un néon au-dessus du lit. Les pièces maîtresses ancrent l'esthétique de la pièce et créent de l'intérêt visuel.",
    greeneryAndPlants: "Verdure et plantes",
    greeneryAndPlantsText:
      "Chaque pièce digne d'Instagram a un peu de vert. Des feuilles de monstera luxuriantes aux plantes suspendues, les plantes apportent de la vitalité et de la vie à un espace.",
    layeredTextures: "Textures superposées",
    layeredTexturesText:
      "Pensez à des tapis doux, des couvertures épaisses, des coussins moelleux et des papiers peints texturés. Superposer des textures ajoute de la profondeur, rendant la pièce visuellement dynamique et cosy.",
    declutteredVisuals: "Visuels épurés",
    declutteredVisualsText:
      "Bien que la génération Z embrasse le chaos organisé, un encombrement bien rangé est essentiel. Des paniers décoratifs, des étagères minimalistes et du rangement caché gardent la scène propre et nette pour la caméra.",

    // Sustainability and Technology in Gen Z's Design
    incorporatingSustainabilityAndTechnology:
      "Intégration de la durabilité et de la technologie",
    sustainabilityTechText:
      "La génération Z ne se soucie pas seulement de l'esthétique, mais aussi de la planète et de la connexion. Voici comment elle intègre la durabilité et la technologie dans ses conceptions :",
    sustainableMaterials: "Matériaux durables",
    sustainableMaterialsText:
      "Le design éco-responsable est incontournable pour cette génération. Pensez à des meubles en bois recyclé, des décorations en bambou et des objets récupérés dans les magasins de seconde main. Ils privilégient des choix éthiques plutôt que les tendances de meubles jetables.",
    smartHomeTechnology: "Technologie de maison intelligente",
    smartHomeTechnologyText:
      "L'intégration de technologies comme des lumières contrôlées par la voix, des haut-parleurs intelligents et des purificateurs d'air connectés est courante. Des outils comme les plateformes de décoration intérieure alimentées par l'IA, comme le planificateur de pièces Styly, facilitent la conception.",
    multiFunctionalFurniture: "Mobilier multifonction",
    multiFunctionalFurnitureText:
      "Les petits espaces sont optimisés avec des meubles à double fonction : pensez aux poufs de rangement, aux bureaux pliables et aux lits escamotables. C'est à la fois tendance et pratique.",

    // Case Studies
    caseStudiesAndExamples: "Études de cas et exemples concrets",
    caseStudyIntro:
      "Qu'est-ce qui rend un espace célèbre sur Instagram ? Voici quelques exemples marquants d'intérieurs qui ont cassé l'algorithme :",
    economicEfficiency: "Efficacité économique",
    economicEfficiencyText:
      "Un petit appartement qui déborde de confort, avec une jungle de plantes suspendues, des meubles vintage et des tons doux. Astuce pro ? Utilisez des pots contrastants pour vos plantes !",
    geometricDreamBedroom: "Chambre de rêve géométrique",
    geometricDreamBedroomText:
      "Avec des murs géométriques pastel et des étagères minimalistes, cette chambre illustre le mélange du décor minimaliste de la génération Z avec des déclarations personnelles audacieuses.",
    cafeInspiredKitchenNook: "Coin cuisine inspiré d'un café",
    cafeInspiredKitchenNookText:
      "Une cuisine avec des tabourets industriels, des carreaux métro et des installations de café de niche a fait sensation, avec des publications atteignant des centaines de milliers de likes.",
    bohoOutdoorBalcony: "Balcon extérieur bohème",
    bohoOutdoorBalconyText:
      "Pensez à des chaises en rotin, des guirlandes lumineuses et des tapis d'extérieur superposés. C'est cosy, économique et devient un incontournable des photos nocturnes.",

    // DIY Instagram-Worthy Makeovers
    diyInstagramWorthyMakeovers:
      "Conseils pour des relooking Instagram dignes de ce nom",
    diyTipsIntro:
      "Vous voulez recréer l'un de ces espaces impressionnants ? Avec un peu de créativité et d'efforts, vous pouvez. Voici quelques astuces DIY abordables :",
    startWithMoodBoard: "Commencez avec un mood board",
    startWithMoodBoardText:
      "Utilisez un décorateur de pièces alimenté par l'IA comme le planificateur de pièces Styly. Téléchargez des images de votre espace, essayez différentes mises en page et trouvez l'inspiration qui correspond à votre style.",
    maximizeWhatYouHave: "Optimisez ce que vous avez",
    maximizeWhatYouHaveText:
      "Réorganisez les meubles existants pour voir votre pièce sous un nouvel angle. Parfois, déplacer un canapé ou un lit peut transformer la pièce.",
    getCreativeWithPaint: "Soyez créatif avec la peinture",
    getCreativeWithPaintText:
      "Un pot de peinture peut faire des merveilles ! Créez des accents ou des cadres sur les murs avec des formes audacieuses ou optez pour un coin monochromatique dans une seule teinte.",
    thriftForJewels: "Cherchez des bijoux dans les magasins de seconde main",
    thriftForJewelsText:
      "Faites du shopping dans les magasins de seconde main locaux ou les marchés antiques pour dénicher des objets insolites, comme des chaises rétro ou des vases vintage.",
    accessorizeThoughtfully: "Accessoirisez de manière réfléchie",
    accessorizeThoughtfullyText:
      "Choisissez des détails économiques comme des guirlandes lumineuses, des coussins à motifs géométriques ou des vases élégants pour rehausser votre espace.",
    playWithAnglesForPhotos: "Jouez avec les angles pour les photos",
    playWithAnglesForPhotosText:
      "Une fois que votre espace est prêt, expérimentez avec les angles de caméra, l'éclairage et les filtres photo pour capturer son charme.",
    socialMediaShapingDesignTrends:
      "Le rôle des médias sociaux dans la définition des tendances de design",
    socialMediaShapingDesignTrendsText:
      "Les médias sociaux ne servent pas seulement à exposer : ils façonnent ce qui est tendance. Voici comment Instagram joue un rôle clé :",
    crowdsourcingCreativity: "Collecte de créativité",
    crowdsourcingCreativityText:
      "Grâce à des hashtags comme #RoomGoals ou #AestheticInteriors, les gens peuvent facilement s'inspirer. Les tendances se propagent rapidement grâce à cette visibilité.",
    massAppealToNicheInterests: "Appel massif aux intérêts de niche",
    massAppealToNicheInterestsText:
      "Les plateformes permettent à des esthétiques de niche telles que le “cottage core” ou le “dark academia” de se développer, permettant à des groupes partageant les mêmes idées de créer des communautés.",
    interactiveShopping: "Shopping interactif",
    interactiveShoppingText:
      "Les intégrations sociales permettent désormais aux utilisateurs d'acheter directement à partir des publications inspirantes. Il suffit de cliquer et d'ajouter au panier.",
    empoweringNewCreators: "Donner du pouvoir aux nouveaux créateurs",
    empoweringNewCreatorsText:
      "Les passionnés de décoration intérieure et les influenceurs ne redéfinissent pas seulement le design, mais aussi leurs carrières. Avec des milliers de followers, ils dictent l'avenir du design d'intérieur.",
    shareYourBestSpace: "Partagez votre meilleur espace",
    shareYourBestSpaceText:
      "Créer un intérieur digne d'Instagram implique de la créativité, des outils technologiques et un sens du détail. Mais surtout, cela parle de VOUS.",
    shareYourBestSpaceInstagram:
      "Quelle est votre astuce préférée ? Partagez vos espaces Insta-dignes avec nous @Stylyio, et n'oubliez pas d'essayer notre planificateur de pièces IA pour concevoir votre prochain chef-d'œuvre.",
    prevArticle: "Article précédent",
    nextArticle: "Article suivant",
    
    introductionText1:
      "Transformer l'intérieur de votre maison ne doit pas coûter une fortune. Avec l'avènement des outils avancés comme",
    stylyAI: "les outils gratuits de conception de chambres alimentés par l'IA de Styly",
    introductionText2:
      ", vous pouvez obtenir des résultats étonnants avec un budget limité. Voici 10 conseils d'experts pour vous aider à économiser gros sur l'intérieur de votre maison tout en utilisant les derniers outils alimentés par l'IA.",

    // Tips
    planBeforeYouSpend: "Planifiez avant de dépenser",
    planBeforeYouSpendContent:
      "Une bonne planification est essentielle pour éviter les dépenses inutiles. Utilisez des outils gratuits de conception intérieure alimentés par l'IA comme Styly pour visualiser vos idées avant de vous y engager.",
    optimizeRoomLayoutWithAI: "Optimisez la disposition de la pièce avec l'IA",
    optimizeRoomLayoutWithAIContent:
      "Exploitez un décorateur de pièces IA pour expérimenter les agencements. Des outils comme Styly peuvent fournir plusieurs options de conception pour utiliser efficacement l'espace.",
    upcycleFurniture: "Recyclage des meubles",
    upcycleFurnitureContent:
      "Donnez un nouveau look à vos meubles en les recyclant. Associez cela aux fonctionnalités de conception de pièces IA de Styly pour visualiser les pièces rénovées dans vos intérieurs.",
    focusOnDIYProjects: "Concentrez-vous sur les projets DIY",
    focusOnDIYProjectsContent:
      "Ajoutez une touche personnelle avec des décorations DIY. Utilisez des outils gratuits de conception intérieure alimentés par l'IA pour guider vos projets et les aligner avec votre thème de design.",
    shopSmartForMaterials: "Achetez intelligemment vos matériaux",
    shopSmartForMaterialsContent:
      "Recherchez des réductions ou des options d'occasion. Les outils IA aident à visualiser comment les matériaux fonctionneront, évitant ainsi les achats inutiles.",
    prioritizeKeyElements: "Priorisez les éléments clés",
    prioritizeKeyElementsContent:
      "Concentrez votre budget sur des éléments impactants comme l'éclairage. Les outils de conception IA aident à identifier des options abordables et de grande valeur.",
    experimentWithColorsVirtually: "Expérimentez virtuellement les couleurs",
    experimentWithColorsVirtuallyContent:
      "Avant d'acheter, testez des palettes de couleurs à l'aide des outils gratuits de Styly. Économisez de l'argent en obtenant la bonne couleur dès la première tentative.",
    investInMultiFunctionalFurniture: "Investissez dans du mobilier multifonction",
    investInMultiFunctionalFurnitureContent:
      "Optez pour des articles comme des canapés-lits ou des ottomans avec rangement. Visualisez-les avec des outils IA pour garantir le meilleur ajustement.",
    useAIForAccessoryPlacement: "Utilisez l'IA pour le placement des accessoires",
    useAIForAccessoryPlacementContent:
      "L'IA de Styly peut recommander où placer les accessoires pour un look soigné sans trop acheter.",
    stayUpdatedWithTrends: "Restez à jour avec les tendances",
    stayUpdatedWithTrendsContent:
      "Les plateformes IA offrent des informations sur les tendances. Utilisez-les pour intégrer des mises à jour stylées sans devoir tout refaire.",

    // Why Choose Styly
    whyChooseStyly: "Pourquoi choisir Styly pour l'intérieur de votre maison ?",
    stylyDescription:
      "Les outils gratuits de conception intérieure alimentés par l'IA de Styly facilitent la création d'intérieurs personnalisés et économiques. Que vous redécoriez une pièce ou toute votre maison, Styly vous permet de :",
    visualizeDesigns: "Visualisez instantanément les conceptions",
    experimentWithLayouts: "Expérimentez avec des agencements et des styles",
    saveMoney: "Économisez de l'argent en évitant des erreurs coûteuses",
    getStartedWithStyly:
      "Commencez avec Styly aujourd'hui et simplifiez-vous la vie pour l'aménagement de vos intérieurs en 2025.",
    freeAIRoomDesign: "outils gratuits de conception de chambres IA",
    transformYourSpace: "et transformez votre espace comme un pro !",

  },
};

// Create a context for the current language
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
