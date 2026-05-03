import React from 'react';
import {Badge, Box, Button, Container, Flex, Grid, Heading, HStack, Icon, Image, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiBarChartAlt2, BiBroadcast, BiCloudUpload, BiDollarCircle, BiMessageDots, BiRocket} from 'react-icons/bi';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import {AnimatedCircuit, FloatingBadges, OrbitSystem, PageBackdrop, Reveal} from './Visuals';

const CreatorCard = ({ icon, title, text }) => (
  <Stack border="1px solid" borderColor="whiteAlpha.200" bg="ink.800" borderRadius="18px" p="6" spacing="4">
    <Flex w="12" h="12" align="center" justify="center" bg="whiteAlpha.100" color="brand.200" borderRadius="8px">
      <Icon as={icon} boxSize="6" />
    </Flex>
    <Heading size="md">{title}</Heading>
    <Text color="whiteAlpha.700">{text}</Text>
  </Stack>
);

const Creators = () => {
  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1240px">
        <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}} gap="10" alignItems="center">
          <Stack spacing="6">
            <Badge w="fit-content" bg="brand.300" color="ink.900" borderRadius="999px" px="4" py="2">Creator network</Badge>
            <Heading fontSize={{base: '5xl', md: '7xl'}} lineHeight="0.88" textTransform="uppercase" letterSpacing="-0.04em">A better home for serious video makers.</Heading>
            <Text color="whiteAlpha.700" fontSize="lg">
              Video Hub is shaped around creators who publish learning series, culture films, setup walkthroughs, and premium channels.
            </Text>
            <HStack spacing="4" flexWrap="wrap">
              <Button as={Link} to="/upload" leftIcon={<BiCloudUpload />} bg="brand.300" color="ink.900" borderRadius="999px" _hover={{bg: 'brand.200'}}>
                Open Studio
              </Button>
              <Button as={Link} to="/videos" variant="outline" borderColor="whiteAlpha.300" color="white" borderRadius="999px">
                View Library
              </Button>
            </HStack>
          </Stack>
          <Box pos="relative" minH="420px">
            <OrbitSystem variant="pink" pos="absolute" right={{base: '4', md: '12'}} top={{base: '8', md: '2'}} />
            <Image src={img2} alt="Creator workspace" pos="absolute" top="0" left="0" w="76%" h="300px" objectFit="cover" borderRadius="24px" boxShadow="0 28px 80px rgba(0,0,0,0.4)" />
            <Image src={img3} alt="Studio hardware" pos="absolute" right="0" bottom="0" w="58%" h="250px" objectFit="cover" borderRadius="24px" border="6px solid" borderColor="ink.900" />
          </Box>
        </Grid>

        <AnimatedCircuit variant="pink" />
        <Reveal>
        <SimpleGrid columns={{base: 1, md: 3}} gap="5" mt="8">
          <CreatorCard icon={BiBroadcast} title="Series-first channels" text="Group uploads into repeatable shows with a clear identity and viewing rhythm." />
          <CreatorCard icon={BiBarChartAlt2} title="Audience context" text="Present duration, category, and learning outcomes before someone presses play." />
          <CreatorCard icon={BiRocket} title="Launch workflow" text="Move from raw file to polished upload page with fewer distractions." />
        </SimpleGrid>
        </Reveal>

        <Reveal>
        <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}} gap="5" mt="5">
          <CreatorCard icon={BiDollarCircle} title="Revenue experiments" text="Creators can imagine subscriptions, paid series, live sessions, and workshop bundles without leaving the platform." />
          <CreatorCard icon={BiMessageDots} title="Community layer" text="Project feedback, discussions, and Q&A give creator channels the engagement tools missing from basic video hosts." />
        </Grid>
        </Reveal>
        <Box mt="8">
          <FloatingBadges items={['Launch rooms', 'Member projects', 'Creator drops']} />
        </Box>
      </Container>
    </Box>
    </PageBackdrop>
  );
};

export default Creators;
