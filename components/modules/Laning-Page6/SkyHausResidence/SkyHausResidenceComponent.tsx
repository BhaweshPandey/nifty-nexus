import cx from 'clsx';
import { Title, Text, Container, Button, Overlay, Flex, Image, Box, useMantineTheme, useMantineColorScheme, Stack, Divider } from '@mantine/core';
import classes from './SkyHausResidenceComponent.module.css';
import { Images } from '@/public';
import { translate, TxKeyPath } from '@/i18n';

export function SkyHausResidenceComponent() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const ViewCard = (props: { heading: any, details: any }) => {
    return (
      <Flex justify={'center'} className={classes.viewCard}>
        <Image width={375} height={450} src={Images.skyhaus_highlights} alt='skyhaus_highlights' radius={'18px'} />
        <Box className={classes.viewCardDetails}>
          <Text c={theme.black} fw={600} ta={'center'} className={classes.viewCardDetailsHeading}>{props.heading}</Text>
          <Text c={theme.black} fw={400} ta={'center'} className={classes.viewCardDetailsSubHeading}>{props.details}</Text>
        </Box>
      </Flex>
    )
  }

  return (
    <Stack className={classes.modernLuxuryVillaContainer} justify={'center'} align={'center'}>
      <Flex className={classes.residenceBox}>
        <Stack justify={'center'} className={classes.details}>
          <Text  className={classes.heading}>{translate("landingPageNine.skyHausResidence")}</Text>
          <Text  className={classes.subHeading}>{translate("landingPageNine.propertyDescription")}</Text>
          <Flex mt={20} gap={20}>
            <Flex gap={15} className={classes.detailsStyle}>
              <Image src={Images.beds} width={50} alt='beds' height={50} fit={'contain'} />
              <Box>
                <Text className={classes.detailsTextStyle} >{translate("landingPageNine.beds")}</Text>
                <Text fw={600}>5</Text>
              </Box>
            </Flex>
            <Flex gap={15} className={classes.detailsStyle}>
              <Image src={Images.baths} alt='beds' width={50} height={50} fit={'contain'} />
              <Box>
                <Text className={classes.detailsTextStyle}>{translate("landingPageNine.baths")}</Text>
                <Text fw={600}>7</Text>
              </Box>
            </Flex>
          </Flex>
          <Divider />
          <Flex gap={20} >
            <Flex gap={15} className={classes.detailsStyle}>
              <Image src={Images.garages} alt='garages' width={50} height={50} fit={'contain'} />
              <Box>
                <Text className={classes.detailsTextStyle}>{translate("landingPageNine.garages")}</Text>
                <Text fw={600}>4</Text>
              </Box>
            </Flex>
            <Flex gap={15} className={classes.detailsStyle}>
              <Image src={Images.kitchens} alt='kitchens' width={50} height={50} fit={'contain'} />
              <Box>
                <Text className={classes.detailsTextStyle}>{translate("landingPageNine.kitchens")}</Text>
                <Text fw={600}>2</Text>
              </Box>
            </Flex>
          </Flex>
        </Stack>
        <Image src={Images.skyhause_bedroom} alt='skyhause_bedroom' radius={'18px'} />
      </Flex>
      <Flex className={classes.propertyBox}>
        <Text  fw={600} className={classes.propertyHeading}>{translate("landingPageNine.propertyHighlights")}</Text>
        <Text  className={classes.propertySubHeading}>{translate("landingPageNine.propertyHighlightsDescription")}</Text>
      </Flex>
      <Flex mt={20} className={classes.propertyHighlightsBox} gap={20}>
        <ViewCard heading={translate("landingPageNine.amazingView")} details={translate("landingPageNine.amazingViewDetails")} />
        <ViewCard heading={translate("landingPageNine.quietNeighbour")} details={translate("landingPageNine.amazingViewDetails")} />
        <ViewCard heading={translate("landingPageNine.housingSecurity")} details={translate("landingPageNine.housingSecurityDetails")} />
      </Flex>
    </Stack>
  );
}