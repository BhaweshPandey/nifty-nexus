import { Text, Button, Flex, Image, Box, useMantineTheme } from '@mantine/core';
import classes from './ModernLuxuryVillaComponent.module.css';
import { Images } from '@/public';
import { useContext, useState } from 'react';
import I18nContext from '@/context/i18nContext';
import { translate } from '@/i18n';


interface DetailsBox {
  boxClassName: string | undefined;
  contentClassName: string | undefined;
}
const DetailsBox: React.FC<DetailsBox> = ({ boxClassName, contentClassName }: DetailsBox) => {
  const theme = useMantineTheme();
  return (
    <>
    <Box className={boxClassName} />  
     <Box className={contentClassName}>
      <Text c={theme.white} className={classes.heading}>{translate("landingPageNine.modern")}</Text>
      <Text c={theme.white} className={classes.heading}>{translate("landingPageNine.villa")}</Text>
      <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.price")}:</Text>
      <Text mt={"-10px"} c={theme.white} className={classes.subHeading}>$2,999,99</Text>
      <Button className={classes.buttonStyle} bg={theme.white} c={theme.black}>{translate("landingPageNine.visit")}</Button>
    </Box></>
  )
}
export function ModernLuxuryVillaComponent() {
  
  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
 


  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  return (
    <Flex className={classes.modernLuxuryVillaContainer} justify={'center'} align={'center'} >
      <Image src={Images.skyhaus_header} radius={'28px'} alt='skyhaus_header'  />
      {language =="ar" ? (<DetailsBox boxClassName={classes.detailsRtlBox} contentClassName={classes.detailsRtl} />) : <DetailsBox boxClassName={classes.detailsBox} contentClassName={classes.details} />}
    </Flex >
  );
}