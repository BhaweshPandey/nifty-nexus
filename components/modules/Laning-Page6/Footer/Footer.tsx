import { Text, Container, ActionIcon, Group, rem, Image, useMantineColorScheme, Flex, Box, Button, useMantineTheme, TextInput } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './Footer.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';
import I18nContext from '@/context/i18nContext';
import { useContext } from 'react';



const Language  = {
  en:"en",
  ar:"ar"
}
type LanguageType = keyof typeof Language;

export function Footer() {
  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme();
  const context = useContext(I18nContext);
  const data = [
    {
      title: { en: 'Contact', ar: 'تواصل' },
      links: [
        { label: { en: 'Find out all the ways to enjoy luxury', ar: 'اكتشف جميع الطرق للاستمتاع بالفخامة' }, link: '#' },
        { label: { en: 'residential life around the world.', ar: 'الحياة السكنية حول العالم.' }, link: '#' },
        { label: { en: 'A. RamJag 21, India, CH', ar: 'A. RamJag 21, زيورخ، سويسرا' }, link: '#' },
        { label: { en: 'M. +0 0000 000 00000', ar: 'م. +0 0 0000 000 00000' }, link: '#' },
      ],
    },
    {
      title: { en: 'FAQs', ar: 'الأسئلة الشائعة' },
      links: [
        { label: { en: 'How long does the process take?', ar: 'كم يستغرق العملية؟' }, link: '#' },
        { label: { en: 'How long does the process take?', ar: 'كم يستغرق العملية؟' }, link: '#' },
        { label: { en: 'How long does the process take?', ar: 'كم يستغرق العملية؟' }, link: '#' },
        { label: { en: 'How long does the process take?', ar: 'كم يستغرق العملية؟' }, link: '#' },
      ],
    },
    {
      title: { en: 'Useful Links', ar: 'روابط مفيدة' },
      links: [
        { label: { en: 'Property', ar: 'العقار' }, link: '#' },
        { label: { en: 'Video Tour', ar: 'جولة فيديو' }, link: '#' },
        { label: { en: 'Blog', ar: 'مدونة' }, link: '#' },
        { label: { en: 'Terms of services', ar: 'شروط الخدمة' }, link: '#' },
      ],
    },
  ];
  

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
        aria-label={link.label}
      >
        {link.label[language as LanguageType]}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title.en}>
        <Text className={classes.title}>{group.title[language as LanguageType]}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size={'xl'} className={classes.inner}>
        <div className={classes.groups}>{groups}</div>
        <div className={classes.wrapper}>
          <Text className={classes.title}>{translate("landingPageNine.enquire")}</Text>
          <Flex direction={'column'} className={classes.formStyle}>
            <Box className={classes.formInputStyle} ><TextInput classNames={{
              input: classes.input,
            }}
              variant="unstyled" placeholder={`${translate("landingPageNine.namePlaceholder")}`} /></Box>
            <Box className={classes.formInputStyle} ><TextInput classNames={{
              input: classes.input,
            }} variant="unstyled" placeholder={`${translate("landingPageNine.emailPlaceholder")}`} /></Box>
            <Button mt={5} variant="outline" color={theme.white} w={151} h={36}>{translate("landingPageNine.sendButton")}</Button>
          </Flex>
        </div>
      </Container>
      <Container size={'xl'} className={classes.afterFooter}>
        <Text ta={'center'} c={theme.white} size="sm">
          {translate("landingPageNine.copyright")}
        </Text>
      </Container>
    </footer>
  );
}
