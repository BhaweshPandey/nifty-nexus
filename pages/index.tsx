

import NewLandingPage from './landing-page6';
import I18nContext from '@/context/i18nContext';
import { useContext, useEffect, useState } from 'react';

const HomePage = () => {

  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  return (
    <div dir={language == "ar"? 'rtl' : 'ltr'}>
      {isClient && <NewLandingPage />}
    </div>
  );
}
export default HomePage;