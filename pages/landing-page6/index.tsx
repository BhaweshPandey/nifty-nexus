import { HeaderMegaMenu } from '@/components/modules/Laning-Page6/HeaderMegaMenu/HeaderMegaMenu';
import { ModernLuxuryVillaComponent } from '@/components/modules/Laning-Page6/ModernLuxuryVilla/ModernLuxuryVillaComponent';
import { SkyHausResidenceComponent } from '@/components/modules/Laning-Page6/SkyHausResidence/SkyHausResidenceComponent';
import { SkyHausAmenitiesComponent } from '@/components/modules/Laning-Page6/SkyHausAmenities/SkyHausAmenitiesComponent';
import { OurTeamComponent } from '@/components/modules/Laning-Page6/OurTeam/OurTeamComponent';
import { Footer } from '@/components/modules/Laning-Page6/Footer/Footer';
import I18nContext from '@/context/i18nContext';
import { useContext } from 'react';


const NewLandingPage = () => {
  const context = useContext(I18nContext);



  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;

  return (
    <div dir={language == "ar"? 'rtl' : 'ltr'}>
      <HeaderMegaMenu />
      <ModernLuxuryVillaComponent />
      <SkyHausResidenceComponent />
      <SkyHausAmenitiesComponent />
      <OurTeamComponent />
      <Footer />
    </div>
  );
}
export default NewLandingPage;
