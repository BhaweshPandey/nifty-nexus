import {
  Group,
  Button,
  UnstyledButton,
  Text, ThemeIcon, Divider, Box,
  Burger,
  Drawer, ScrollArea,
  rem,

  useMantineTheme,
  Image,
  Autocomplete,
  useMantineColorScheme,
  Flex,
  Tooltip,

} from '@mantine/core';

import { useDisclosure, useHotkeys } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,

  IconCoin,
  IconChevronDown,
  IconSearch,
  IconBrightnessDownFilled,
  IconBrightness,
  IconBrightnessDown,
  IconLanguage,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import { Images } from '@/public';
import { forwardRef, useContext, useEffect, useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io5";
import I18nContext from '@/context/i18nContext';
import { translate } from '@/i18n';

const Language = {
  en:"en",
  ar:"ar"
}
type LanguageType = keyof typeof Language;



export function HeaderMegaMenu() {
 const mockdata = [
  {
    icon: IconCode,
    title: { en: 'Open source', ar: 'مفتوح المصدر' },
    description: { en: 'This Pokémon’s cry is very loud and distracting', ar: 'صراخ هذا البوكيمون عالٍ جدًا ومشتت للانتباه' },
  },
  {
    icon: IconCoin,
    title: { en: 'Free for everyone', ar: 'مجاني للجميع' },
    description: { en: 'The fluid of Smeargle’s tail secretions changes', ar: 'يتغير سائل إفرازات ذيل سمارجل' },
  },
  {
    icon: IconBook,
    title: { en: 'Documentation', ar: 'توثيق' },
    description: { en: 'Yanma is capable of seeing 360 degrees without', ar: 'يانما قادر على رؤية 360 درجة دون' },
  },
  {
    icon: IconFingerprint,
    title: { en: 'Security', ar: 'الأمان' },
    description: { en: 'The shell’s rounded shape and the grooves on its.', ar: 'الشكل المستدير للصدفة والأخاديد عليها.' },
  },
  {
    icon: IconChartPie3,
    title: { en: 'Analytics', ar: 'تحليلات' },
    description: { en: 'This Pokémon uses its flying ability to quickly chase', ar: 'يستخدم هذا البوكيمون قدرته على الطيران للمطاردة بسرعة' },
  },
  {
    icon: IconNotification,
    title: { en: 'Notifications', ar: 'إشعارات' },
    description: { en: 'Combusken battles with the intensely hot flames it spews', ar: 'يتقاتل كومبوسكن مع اللهب الحار الذي يطلقه' },
  },
];

  const { setColorScheme, clearColorScheme, toggleColorScheme } = useMantineColorScheme();
  
  useHotkeys(
    [['ctrl+J', () => toggleColorScheme()]],
  );
  const ToggleTheme = forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref} {...props}>
      <Button variant='default' onClick={() => { toggleColorScheme() }} style={{ border: "none" }}> <IconBrightnessDown style={{ width: rem(18), height: rem(18), }} stroke={1.5} /></Button>
    </div>
  ));

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  
  const theme = useMantineTheme();

  const { colorScheme } = useMantineColorScheme();

  const context = useContext(I18nContext);
  const [isClient, setIsClient] = useState(false)
 
 
  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;
 
  useHotkeys(
    [['alt+shift+L', () => changeLanguage()]],
  )

  const LangButton = forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref} {...props}>
      <Button onClick={() => {
        changeLanguage()
          ;
      }} variant='default' style={{ border: "none" }} >
        <IconLanguage />
      </Button>
    </div>


  ));

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title.en} aria-label={item.title.en}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title[language as LanguageType]}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description[language as LanguageType]}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Flex className={classes.logoStyle} align={'center'}>
            <Text fw={700} fz={'24px'}>{translate("landingPageNine.soudemy")}</Text>
            <Flex className={classes.links}>
              <IoLogoInstagram />
              <FaTwitter />
              <FaFacebook />
            </Flex>
          </Flex>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              {translate("landingPageNine.home")}
            </a>
            <a href="#" className={classes.link}>
              {translate("landingPageNine.about")}
            </a>
            <a href="#" className={classes.link}>
              {translate("landingPageNine.highlights")}
            </a>
            <a href="#" className={classes.link}>
              
              {translate("landingPageNine.amenities")}
            </a>
            <a href="#" className={classes.link}>
              {translate("landingPageNine.team")}
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Box>
              <IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Box>
            <Tooltip label={ `${translate("landingPageNine.ctrlJToToggleThemes")}`} withArrow><ToggleTheme/></Tooltip>
            

            {/* <Button variant="default">Log in</Button>
            <Button>Sign up</Button> */}

            <Tooltip label={ `${translate("landingPageNine.altShiftLToSwitchToArabic")}`}aria-label='lang-toggle' withArrow>
              <LangButton />
            </Tooltip>



          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" aria-label="menu" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
              {translate("landingPageNine.home")}
            </a>
            <a href="#" className={classes.link}>
              {translate("landingPageNine.about")}
            </a>
            <a href="#" className={classes.link}>
              {translate("landingPageNine.highlights")}
            </a>
            <a href="#" className={classes.link}>
              
              {translate("landingPageNine.amenities")}
            </a>
            <a href="#" className={classes.link}>
              {translate("landingPageNine.team")}
            </a>
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">{translate("landingPageNine.logIn")}</Button>
            <Button>{translate("landingPageNine.signUp")}</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
