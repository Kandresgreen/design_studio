import { useEffect, useState } from 'react';
import { useLanguage } from './i18n';

// This component helps force updates when language changes
// It should be placed high in the component tree to ensure all components are re-rendered
interface LanguageForceUpdateProps {
  children: React.ReactNode;
}

export const LanguageForceUpdate: React.FC<LanguageForceUpdateProps> = ({ children }) => {
  const { language } = useLanguage();
  const [key, setKey] = useState(0);
  
  // Force re-render when language changes by updating the key
  useEffect(() => {
    console.log('[LanguageForceUpdate] Language changed, forcing re-render');
    setKey(prevKey => prevKey + 1);
  }, [language]);
  
  return (
    <div key={key}>
      {children}
    </div>
  );
};

export default LanguageForceUpdate; 