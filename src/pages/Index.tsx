import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SupportedBy from "@/components/home/SupportedBy";
import HowItWorks from "@/components/home/HowItWorks";
import ArchitectureRevolution from "@/components/home/ArchitectureRevolution";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import FAQ from "@/components/home/FAQ";
import SEO from "@/components/layout/SEO";
import VideoSection from "@/components/home/VideoSection";
import DesignWithAI from "@/components/home/DesignWithAI";
import { useLanguage, LanguageContext, Language } from "@/lib/i18n";
import { useContext, useState } from "react";

const Index: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const stateLang: Language = language ?? "en";
  // Get current language to force re-render when it changes
  // const [currentLang, setCurrentLang] = useState<Language>(stateLang);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathLang = location.pathname.startsWith("/fr") ? "fr" : "en";
    setLanguage(pathLang);

    if (location.pathname !== `/${pathLang}`) {
      const newPath = location.pathname.replace(/^\/(en|fr)/, `/${pathLang}`);
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  // useEffect(() => {
  //   setLanguage("en");
  // }, [])
  
  console.log("Index page rendering with language:", language);

  // English meta
  const meta = {
    title: "STYLY - #1 AI Interior & Exterior Design Platform | Real Estate Visualization Tool",
    description: "Transform empty spaces into stunning, photo-realistic interiors in seconds with STYLY - the leading AI design tool. Upload photos via web, mobile or WhatsApp. No technical skills needed. Trusted by 20,000+ real estate pros, interior designers & homeowners.",
    keywords: "AI interior design app, virtual staging software, real estate visualization tool, interior design AI, home renovation design, WhatsApp interior design, property marketing tool, AI visualization, interior design without technical skills, photo-realistic interior design"
  };

  // French meta (translated via Google Translate API)
  const metaFr = {
    title: "STYLY - Plateforme #1 d'IA pour la décoration intérieure et extérieure | Outil de visualisation immobilière",
    description: "Transformez des espaces vides en intérieurs époustouflants et photoréalistes en quelques secondes avec STYLY - l'outil de design IA de référence. Téléchargez des photos via le web, mobile ou WhatsApp. Aucune compétence technique requise. Approuvé par plus de 20 000 professionnels de l'immobilier, designers d'intérieur et propriétaires.",
    keywords: "application IA design intérieur, logiciel home staging virtuel, outil visualisation immobilière, IA décoration intérieure, design rénovation maison, WhatsApp design intérieur, outil marketing immobilier, visualisation IA, design intérieur sans compétences techniques, design intérieur photoréaliste"
  };

  // Structured data for English
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://styly.io/#webpage",
        "url": "https://styly.io/",
        "name": "Styly.io - #1 AI Interior & Exterior Design Platform",
        "description": "Styly is an AI-powered virtual staging platform serving B2B and B2C markets. Instantly transforms empty interior spaces into realistic, beautifully furnished visuals. Upload a photo or use WhatsApp to create stunning designs with no technical expertise.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://styly.io/#website",
          "name": "Styly.io",
          "url": "https://styly.io",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://styly.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": "https://styly.io/#primaryimage",
          "url": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://styly.io/",
                "name": "Home"
              }
            }
          ]
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://styly.io/#softwareapplication",
        "name": "STYLY",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web, iOS, Android, WhatsApp",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "358",
          "bestRating": "5",
          "worstRating": "1"
        },
        "screenshot": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2"
      },
      {
        "@type": "Organization",
        "@id": "https://styly.io/#organization",
        "name": "STYLY",
        "url": "https://styly.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://styly.io/logo.png",
          "width": 200,
          "height": 60
        },
        "sameAs": [
          "https://twitter.com/StylyDesign",
          "https://facebook.com/StylyDesign",
          "https://instagram.com/StylyDesign",
          "https://linkedin.com/company/styly-design"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://styly.io/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Styly's AI interior design work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Styly uses advanced AI technology to transform empty rooms into fully designed spaces. Simply upload a photo of your room or describe your vision, and our AI will generate realistic interior designs tailored to your preferences, with no technical expertise required."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use Styly for real estate virtual staging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Styly is perfect for real estate professionals looking to showcase properties. Our virtual staging technology transforms empty spaces into beautifully furnished interiors, helping potential buyers visualize the property's potential, increasing engagement, and reducing time on market."
            }
          },
          {
            "@type": "Question",
            "name": "Does Styly work on mobile devices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Styly is fully accessible on all platforms, including web, iOS, Android, and even WhatsApp. You can design spaces on the go from any device, making it convenient for busy professionals and homeowners."
            }
          },
          {
            "@type": "Question",
            "name": "What types of businesses can benefit from Styly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Styly serves both B2B and B2C markets. Real estate agencies, interior designers, architects, property developers, home improvement retailers, and renovation contractors all benefit from our platform. We also offer custom AI models and tailored solutions for businesses looking to integrate generative AI into their workflows."
            }
          }
        ]
      }
    ]
  };

  // Structured data for French (translated)
  const structuredDataFr = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://styly.io/#webpage",
        "url": "https://styly.io/fr",
        "name": "Styly.io - Plateforme d'IA pour la décoration intérieure et extérieure",
        "description": "Styly est une plateforme de home staging virtuel alimentée par l'IA, au service des marchés B2B et B2C. Elle transforme instantanément les espaces intérieurs vides en visuels réalistes et magnifiquement meublés. Téléchargez une photo ou utilisez WhatsApp pour créer des designs époustouflants sans expertise technique.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://styly.io/#website",
          "name": "Styly.io",
          "url": "https://styly.io",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://styly.io/fr/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": "https://styly.io/#primaryimage",
          "url": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2",
          "width": 1200,
          "height": 630
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://styly.io/fr",
                "name": "Accueil"
              }
            }
          ]
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://styly.io/#softwareapplication",
        "name": "STYLY",
        "applicationCategory": "ApplicationDeDesign",
        "operatingSystem": "Web, iOS, Android, WhatsApp",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "358",
          "bestRating": "5",
          "worstRating": "1"
        },
        "screenshot": "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/f99e29783a6ec2e80cc53da0266b73b066b99df2"
      },
      {
        "@type": "Organization",
        "@id": "https://styly.io/#organization",
        "name": "STYLY",
        "url": "https://styly.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://styly.io/logo.png",
          "width": 200,
          "height": 60
        },
        "sameAs": [
          "https://twitter.com/StylyDesign",
          "https://facebook.com/StylyDesign",
          "https://instagram.com/StylyDesign",
          "https://linkedin.com/company/styly-design"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://styly.io/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Comment fonctionne la décoration intérieure par IA de Styly ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Styly utilise une technologie d'IA avancée pour transformer des pièces vides en espaces entièrement conçus. Téléchargez simplement une photo de votre pièce ou décrivez votre vision, et notre IA générera des designs d'intérieur réalistes adaptés à vos préférences, sans aucune expertise technique requise."
            }
          },
          {
            "@type": "Question",
            "name": "Puis-je utiliser Styly pour le home staging immobilier ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui ! Styly est parfait pour les professionnels de l'immobilier qui souhaitent mettre en valeur les biens. Notre technologie de home staging virtuel transforme les espaces vides en intérieurs magnifiquement meublés, aidant les acheteurs potentiels à visualiser le potentiel du bien, augmentant l'engagement et réduisant le temps de vente."
            }
          },
          {
            "@type": "Question",
            "name": "Styly fonctionne-t-il sur les appareils mobiles ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolument ! Styly est entièrement accessible sur toutes les plateformes, y compris le web, iOS, Android et même WhatsApp. Vous pouvez concevoir des espaces en déplacement depuis n'importe quel appareil, ce qui est pratique pour les professionnels occupés et les propriétaires."
            }
          },
          {
            "@type": "Question",
            "name": "Quels types d'entreprises peuvent bénéficier de Styly ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Styly s'adresse aux marchés B2B et B2C. Les agences immobilières, les architectes d'intérieur, les architectes, les promoteurs immobiliers, les détaillants en amélioration de l'habitat et les entrepreneurs en rénovation bénéficient tous de notre plateforme. Nous proposons également des modèles d'IA personnalisés et des solutions sur mesure pour les entreprises souhaitant intégrer l'IA générative dans leurs flux de travail."
            }
          }
        ]
      }
    ]
  };

  // Choose meta and structured data based on language or route
  const seoMeta = language === "fr" || location.pathname.startsWith("/fr") ? metaFr : meta;
  const seoStructuredData = language === "fr" || location.pathname.startsWith("/fr") ? structuredDataFr : structuredData;

  return (
    <div className="bg-white flex flex-col w-full min-h-screen  " key={`index-${language}`}>
      <SEO 
        title={seoMeta.title}
        description={seoMeta.description}
        keywords={seoMeta.keywords}
        structuredData={seoStructuredData}
      />
      <div className="flex w-full flex-col">
        <Navbar />
        <Hero />
        <SupportedBy />
        <VideoSection />
        <HowItWorks />
        <DesignWithAI />
        <ArchitectureRevolution />
        <Stats />
        <Testimonials />
        <BlogSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
