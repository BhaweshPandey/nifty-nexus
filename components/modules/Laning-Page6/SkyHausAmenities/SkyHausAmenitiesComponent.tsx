import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, Flex, Image, Box, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import classes from './SkyHausAmenitiesComponent.module.css';
import { Images } from '@/public';
import { translate } from '@/i18n';

export function SkyHausAmenitiesComponent() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box className={classes.container}>
      <Flex className={classes.modernLuxuryVillaContainer}>
        <Box className={classes.details}>
          <Text c={theme.white} fw={600} className={classes.heading}>{translate("landingPageNine.skyHaus")}</Text>
          <Text c={theme.white} fw={600} mt={"-15px"} className={classes.heading}>Amenities</Text>
          <Text mt={20} c={theme.white} className={classes.subHeading}>{translate("landingPageNine.propertyDescription2")}</Text>
          <Flex mt={20} gap={10}>
            <Box className={classes.featuresDetails}>
              <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.swimmingPool")}</Text>
              <Text c={theme.white} fw={600} className={classes.subHeading}>{translate("landingPageNine.swimmingPoolSize")}</Text>
            </Box>
            <Box className={classes.featuresDetails}>
              <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.largePlayGround")}</Text>
              <Text c={theme.white} fw={600} className={classes.subHeading}>{translate("landingPageNine.largePlayGroundSize")}</Text>
            </Box>
          </Flex>
          <Flex mt={20} gap={10}>
            <Box className={classes.featuresDetails}>
              <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.highSecurity")}</Text>
              <Text c={theme.white} fw={600} className={classes.subHeading}>{translate("landingPageNine.highSecurityDetails")}</Text>
            </Box>
            <Box className={classes.featuresDetails}>
              <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.waterStorage")}</Text>
              <Text c={theme.white} fw={600} className={classes.subHeading}>{translate("landingPageNine.waterStorageSize")}</Text>
            </Box>
          </Flex>
          <Flex mt={20} gap={10}>
            <Box className={classes.featuresDetails}>
              <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.basement")}</Text>
              <Text c={theme.white} fw={600} className={classes.subHeading}>{translate("landingPageNine.basementCount")}</Text>
            </Box>
            <Box className={classes.featuresDetails}>
              <Text c={theme.white} className={classes.subHeading}>{translate("landingPageNine.elevator")}</Text>
              <Text c={theme.white} fw={600} className={classes.subHeading}>{translate("landingPageNine.elevatorCount")}</Text>
            </Box>
          </Flex>
        </Box>
        <Image src={Images.frame_icons} radius={'22px'} alt='frame_icons' />
      </Flex>
    </Box>
  );
}