import {Badge, Box, Button, Container, Flex, Grid, Heading, Icon, Image, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import {BiBadgeCheck, BiBarChartAlt2, BiCloudUpload, BiCommentDetail, BiDownload, BiDollarCircle, BiPlay, BiRocket, BiTrendingUp} from 'react-icons/bi';
import {FaClosedCaptioning, FaFilm, FaUsers} from 'react-icons/fa';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import {AnimatedCircuit, FloatingBadges, GraphicPoster, MotionGlyphs, PageBackdrop, Reveal, SignalRibbon} from './Visuals';
import ThreeStage from './ThreeStage';

const stats = [
  { label: 'Curated films', value: '240+' },
  { label: 'Creator hours', value: '8.6k' },
  { label: 'Weekly drops', value: '36' },
];

const collections = [
  { title: 'Future Interfaces', image: img1, meta: 'VR, product design, spatial stories' },
  { title: 'Play Culture', image: img2, meta: 'Gaming docs, esports breakdowns' },
  { title: 'Console Craft', image: img3, meta: 'Hardware, setup tours, reviews' },
  { title: 'After Dark', image: img4, meta: 'Music, nightlife, creator diaries' },
];

const features = [
  { icon: FaFilm, title: 'Cinema-grade library', text: 'Organized playlists, quick previews, and featured channels make discovery feel intentional.' },
  { icon: FaClosedCaptioning, title: 'Built for learning', text: 'Descriptions, chapters, transcripts, and creator notes sit close to the player.' },
  { icon: BiCloudUpload, title: 'Creator-ready upload', text: 'A focused studio flow helps creators package every video before publishing.' },
];

const competitiveUpgrades = [
  { icon: BiDownload, title: 'Queue and offline-first thinking', text: 'Inspired by premium video apps: save, resume, and keep a learning queue visible.' },
  { icon: BiCommentDetail, title: 'Project galleries and Q&A', text: 'Borrowing the best of course communities so every class has feedback loops.' },
  { icon: BiBarChartAlt2, title: 'Creator analytics', text: 'A creator can see retention, subscriber growth, revenue, and project activity.' },
  { icon: BiDollarCircle, title: 'Monetization controls', text: 'Support subscriptions, paid series, workshops, and bundles as the product grows.' },
  { icon: BiBadgeCheck, title: 'Certificates and badges', text: 'Reward progress with visible proof instead of making video watching feel passive.' },
  { icon: FaUsers, title: 'Community-native channels', text: 'Channels are more than playlists: they become homes for creators and members.' },
];

const Home = () => {
  return (
    <PageBackdrop>
      <MotionGlyphs />
      <Box minH={{base: 'auto', lg: '92vh'}} pos="relative" display="flex" alignItems="center" pt={{base: '28', md: '28'}} pb={{base: '12', md: '12'}}>
        <Text pos="absolute" top={{base: '120px', lg: '132px'}} left={{base: '4', lg: '8'}} fontSize={{base: '5xl', md: '8xl', lg: '10rem'}} lineHeight="0.78" fontWeight="950" color="whiteAlpha.100" letterSpacing="-0.05em" pointerEvents="none">
          VIDEO
        </Text>
        <Container maxW="1240px" pos="relative">
          <Grid templateColumns={{base: '1fr', lg: '1.05fr 0.95fr'}} gap="12" alignItems="center">
            <Stack spacing="7" maxW={{base: '360px', md: '760px'}}>
              <Badge w="fit-content" bg="whiteAlpha.200" color="brand.100" borderRadius="999px" px="4" py="2">
                Premium video learning hub
              </Badge>
              <Heading as="h1" fontSize={{base: '5xl', md: '7xl', lg: '8xl'}} lineHeight="0.86" maxW="760px" letterSpacing="-0.04em" textTransform="uppercase">
                Stream better stories. Build better skills.
              </Heading>
              <Text color="whiteAlpha.800" fontSize={{base: 'lg', md: 'xl'}} maxW="640px">
                Video Hub brings cinematic courses, creator channels, and upload tools into one polished place for people who learn by watching.
              </Text>
              <Stack direction={{base: 'column', md: 'row'}} spacing="4" align="stretch" maxW={{base: '350px', md: '520px'}}>
                <Button as={Link} to="/videos" size="lg" leftIcon={<BiPlay />} bg="brand.300" color="ink.900" borderRadius="999px" _hover={{bg: 'brand.200'}}>
                  Start Watching
                </Button>
                <Button as={Link} to="/upload" size="lg" variant="outline" borderColor="whiteAlpha.400" color="white" borderRadius="999px" _hover={{bg: 'whiteAlpha.100'}}>
                  Upload a Video
                </Button>
              </Stack>
              <SimpleGrid columns={{base: 1, md: 3}} maxW={{base: '350px', md: '620px'}} gap="3">
                {stats.map((item) => (
                  <Box key={item.label} border="1px solid" borderColor="whiteAlpha.200" bg="whiteAlpha.100" borderRadius="18px" p={{base: '4', md: '4'}}>
                    <Text fontSize={{base: '2xl', md: '3xl'}} fontWeight="900">{item.value}</Text>
                    <Text color="whiteAlpha.700" fontSize="sm">{item.label}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>

            <Box display={{base: 'none', md: 'block'}} pos="relative">
              <ThreeStage />
              <SimpleGrid columns="2" spacing="3" pos="absolute" right={{md: '4', xl: '8'}} bottom={{md: '10', xl: '16'}} w="230px">
                {['3D lessons', 'Live cuts', 'AI notes', 'Studio queue'].map((item, index) => (
                  <Box key={item} bg={index === 1 ? 'ember.500' : 'blackAlpha.600'} color={index === 1 ? 'white' : 'white'} border="1px solid" borderColor="whiteAlpha.200" borderRadius="14px" p="3">
                    <Text fontWeight="950" fontSize="sm">{item}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Grid>
        </Container>
      </Box>

      <SignalRibbon />

      <Container maxW="1240px" py={{base: '12', md: '20'}}>
        <Reveal>
        <Stack spacing="8">
          <Flex justify="space-between" align={{base: 'flex-start', md: 'end'}} direction={{base: 'column', md: 'row'}} gap="4">
            <Box>
              <Text color="brand.200" fontWeight="800">Featured collections</Text>
              <Heading mt="2" size="2xl">A front row for every kind of viewer</Heading>
            </Box>
            <Button as={Link} to="/videos" rightIcon={<BiPlay />} variant="outline" color="white" borderColor="whiteAlpha.300" borderRadius="999px">
              Browse Library
            </Button>
          </Flex>
          <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap="5">
            {collections.map((item, index) => (
              <GraphicPoster key={item.title} label={item.meta.split(',')[0]} title={item.title} image={item.image} tone={index === 1 ? 'red' : index === 2 ? 'amber' : 'teal'} />
            ))}
          </SimpleGrid>
        </Stack>
        </Reveal>
      </Container>

      <Box bg="white" color="ink.900">
        <Container maxW="1180px" py={{base: '16', md: '24'}}>
          <Reveal>
          <Grid templateColumns={{base: '1fr', lg: '0.9fr 1.1fr'}} gap="12" alignItems="center">
            <Box>
              <Image src={img5} alt="Streaming workspace illustration" maxH="420px" mx="auto" />
            </Box>
            <Stack spacing="7">
              <Text color="brand.700" fontWeight="900">Why Video Hub</Text>
              <Heading size="2xl">A platform that treats watching like a craft.</Heading>
              <Text color="blackAlpha.700" fontSize="lg">
                The redesign gives Video Hub a sharper identity: a place for curated video education, creator publishing, and focused discovery instead of a generic video list.
              </Text>
              <SimpleGrid columns={{base: 1, md: 3}} gap="4">
                {features.map((item) => (
                  <Stack key={item.title} border="1px solid" borderColor="blackAlpha.200" borderRadius="8px" p="5" spacing="3">
                    <Flex w="11" h="11" align="center" justify="center" bg="brand.100" color="brand.800" borderRadius="8px">
                      <Icon as={item.icon} boxSize="5" />
                    </Flex>
                    <Heading size="sm">{item.title}</Heading>
                    <Text color="blackAlpha.700" fontSize="sm">{item.text}</Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </Stack>
          </Grid>
          </Reveal>
        </Container>
      </Box>

      <Container maxW="1240px" py={{base: '16', md: '24'}}>
        <Reveal>
        <Stack spacing="8">
          <Box maxW="760px">
              <Text color="brand.200" fontWeight="900">Competition-beating feature stack</Text>
              <Heading mt="2" size="2xl" textTransform="uppercase">The best ideas from streaming, learning, and creator commerce in one hub.</Heading>
          </Box>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} gap="5">
            {competitiveUpgrades.map((item) => (
              <Stack key={item.title} bg="ink.800" border="1px solid" borderColor="whiteAlpha.200" borderRadius="18px" p="6" spacing="4">
                <Flex w="12" h="12" align="center" justify="center" bg="whiteAlpha.100" color="brand.200" borderRadius="8px">
                  <Icon as={item.icon} boxSize="6" />
                </Flex>
                <Heading size="md">{item.title}</Heading>
                <Text color="whiteAlpha.700">{item.text}</Text>
              </Stack>
            ))}
          </SimpleGrid>
          <AnimatedCircuit variant="ember" />
          <FloatingBadges items={['Interactive transcripts', 'Creator revenue loops', 'Adaptive playlists']} />
        </Stack>
        </Reveal>
      </Container>

      <Container maxW="1240px" pb={{base: '16', md: '24'}}>
        <Reveal>
        <SimpleGrid columns={{base: 1, md: 3}} gap="5">
          {[
            { icon: BiTrendingUp, title: 'Personal queues', text: 'Stack the next lesson, episode, or series without leaving the player.' },
            { icon: FaUsers, title: 'Creator channels', text: 'Creator profiles can grow into hubs for series, uploads, and community drops.' },
            { icon: BiRocket, title: 'Launch-ready studio', text: 'The upload path now feels like a production console instead of a file picker.' },
          ].map((item) => (
            <VStack key={item.title} align="flex-start" spacing="4" bg="ink.800" border="1px solid" borderColor="whiteAlpha.200" borderRadius="18px" p="6">
              <Flex w="12" h="12" align="center" justify="center" bg="whiteAlpha.100" color="brand.200" borderRadius="8px">
                <Icon as={item.icon} boxSize="6" />
              </Flex>
              <Heading size="md">{item.title}</Heading>
              <Text color="whiteAlpha.700">{item.text}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        </Reveal>
      </Container>
    </PageBackdrop>
  );
};

export default Home
