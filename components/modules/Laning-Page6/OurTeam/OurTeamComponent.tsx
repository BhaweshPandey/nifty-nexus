import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, Flex, Image, Box, useMantineTheme, useMantineColorScheme, TextInput } from '@mantine/core';
import classes from './OurTeamComponent.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';

export function OurTeamComponent() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex className={classes.modernLuxuryVillaContainer}>
      <Box >
        <Text fw={600} className={classes.heading}>{translate("landingPageNine.ourTeam")}</Text>
        <Flex className={classes.teamDetailsStyle}>
          <Flex justify={'center'} className={classes.teamCard}>
            <Image src={Images.skyhaus_member3} alt='skyhaus_member3' radius={'10px'} />
            <Box className={classes.teamCardDetails}>
              <Text c={theme.black} fw={500} ta={'center'} className={classes.teamCardDetailsHeading}>{translate("landingPageNine.seanWalker")}</Text>
              <Text c={"#888888"} ta={'center'} className={classes.teamCardDetailsSubHeading}>{translate("landingPageNine.rentingAgent")}</Text>
            </Box>
          </Flex>
          <Flex justify={'center'} className={classes.teamCard}>
            <Image src={Images.skyhaus_member} alt='skyhaus_member' radius={'10px'} />
            <Box className={classes.teamCardDetails}>
              <Text c={theme.black} fw={500} ta={'center'} className={classes.teamCardDetailsHeading}>{translate("landingPageNine.jenishDesai")}</Text>
              <Text c={"#888888"} ta={'center'} className={classes.teamCardDetailsSubHeading}>{translate("landingPageNine.seo")}</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex direction={'column'} className={classes.formStyle}>
        <Text fw={500} className={classes.subHeading}>{translate("landingPageNine.buildingFutureMessage")}</Text>
        <Box className={classes.formInputStyle} mt={10}><TextInput classNames={{ input: classes.input }} variant="unstyled" placeholder={`${translate("landingPageNine.namePlaceholder")}`}/></Box>
        <Box className={classes.formInputStyle} mt={10}><TextInput classNames={{ input: classes.input }} variant="unstyled" placeholder={`${translate("landingPageNine.emailPlaceholder")}`} /></Box>
        <Box className={classes.formInputStyle} mt={10}><TextInput classNames={{ input: classes.input }} variant="unstyled" placeholder={`${translate("landingPageNine.telephonePlaceholder")}`} /></Box>
        <Box className={classes.formInputStyle} mt={10}><TextInput classNames={{ input: classes.input }} variant="unstyled" placeholder={`${translate("landingPageNine.titlePlaceholder")}`} /></Box>
        <Button mt={10} variant="outline" color={colorScheme === "dark" ? theme.white : theme.black} w={186} h={49}>{translate("landingPageNine.sendButton")}</Button>
      </Flex>
    </Flex>
  );
}