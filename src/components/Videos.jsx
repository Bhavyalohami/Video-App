import React, { useState } from 'react'
import {AspectRatio, Badge, Box, Button, Container, Flex, Grid, Heading, HStack, Icon, Image, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react'
import {BiBadgeCheck, BiBookOpen, BiCheckCircle, BiCommentDetail, BiDownload, BiNote, BiPlay, BiTimeFive} from 'react-icons/bi'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import {AnimatedCircuit, GraphicPoster, PageBackdrop, Reveal} from './Visuals';

const videos = [
  {
    title: 'Designing The Future Interface',
    category: 'Spatial',
    duration: '14 min',
    image: img1,
    src: 'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    description: 'A sharp look at VR interfaces, immersive navigation, and how attention changes when screens become spaces.',
  },
  {
    title: 'Gaming Culture Playbook',
    category: 'Gaming',
    duration: '11 min',
    image: img2,
    src: 'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    description: 'A creator-led breakdown of gaming communities, launch moments, and how video turns play into culture.',
  },
  {
    title: 'Console Setup Lab',
    category: 'Hardware',
    duration: '18 min',
    image: img3,
    src: 'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    description: 'Hardware, lighting, capture cards, and the small details that make a home studio feel production-ready.',
  },
  {
    title: 'Night Sessions: Story In Motion',
    category: 'Culture',
    duration: '9 min',
    image: img4,
    src: 'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    description: 'A kinetic short on nightlife footage, sound design, and editing energy without losing the human thread.',
  },
];

const Videos = () => {
  const [active, setActive] = useState(videos[0]);

  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1240px">
        <Stack spacing="8">
          <Flex justify="space-between" align={{base: 'flex-start', md: 'end'}} direction={{base: 'column', md: 'row'}} gap="4">
            <Box>
              <Badge bg="brand.300" color="ink.900" borderRadius="999px" px="4" py="2">Now playing</Badge>
              <Heading mt="4" fontSize={{base: '5xl', md: '7xl'}} lineHeight="0.88" textTransform="uppercase" letterSpacing="-0.04em">Watch room</Heading>
              <Text mt="3" color="whiteAlpha.700" maxW="680px">A cinematic learning space with curated lessons, fast playlist switching, and context beside the video.</Text>
            </Box>
            <HStack color="whiteAlpha.700">
              <Icon as={BiCheckCircle} color="brand.200" />
              <Text>{videos.length} hand-picked sessions</Text>
            </HStack>
          </Flex>

          <Reveal>
          <Grid templateColumns={{base: '1fr', xl: 'minmax(0, 1fr) 380px'}} gap="6">
            <Box border="1px solid" borderColor="whiteAlpha.200" bg="black" borderRadius="24px" overflow="hidden" boxShadow="0 30px 90px rgba(0,0,0,0.42)">
              <AspectRatio ratio={16 / 9}>
                <video key={active.src} controls controlsList="nodownload" src={active.src} poster={active.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </AspectRatio>
              <Stack p={{base: '5', md: '7'}} spacing="4" bg="ink.800">
                <HStack flexWrap="wrap">
                  <Badge bg="whiteAlpha.200" color="brand.100" borderRadius="8px">{active.category}</Badge>
                  <HStack color="whiteAlpha.700"><BiTimeFive /><Text>{active.duration}</Text></HStack>
                </HStack>
                <Heading size="xl">{active.title}</Heading>
                <Text color="whiteAlpha.700" fontSize="lg">{active.description}</Text>
              </Stack>
            </Box>

            <Stack spacing="4">
              <Heading size="md">Up next</Heading>
              {videos.map((item) => {
                const selected = item.title === active.title;
                return (
                  <Button
                    key={item.title}
                    h="auto"
                    p="0"
                    justifyContent="stretch"
                    variant="unstyled"
                    onClick={() => setActive(item)}
                    border="1px solid"
                    borderColor={selected ? 'brand.300' : 'whiteAlpha.200'}
                    bg={selected ? 'whiteAlpha.200' : 'ink.800'}
                    borderRadius="18px"
                    overflow="hidden"
                    _hover={{borderColor: 'brand.200', bg: 'whiteAlpha.100'}}
                  >
                    <HStack align="stretch" spacing="0" w="full">
                      <Box pos="relative" flex="0 0 126px" h="110px">
                        <Image src={item.image} alt={item.title} h="110px" w="126px" objectFit="cover" opacity="0.82" />
                        <Flex pos="absolute" inset="0" align="center" justify="center" bg="blackAlpha.400">
                          <Icon as={BiPlay} color="white" boxSize="8" />
                        </Flex>
                      </Box>
                      <VStack align="flex-start" spacing="2" p="4" textAlign="left">
                        <Text fontWeight="900" whiteSpace="normal">{item.title}</Text>
                        <HStack color="whiteAlpha.600" fontSize="sm">
                          <Text>{item.category}</Text>
                          <Text>{item.duration}</Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Button>
                );
              })}
            </Stack>
          </Grid>
          </Reveal>

          <AnimatedCircuit />
          <Reveal>
          <SimpleGrid columns={{base: 1, md: 3}} gap="5">
            {[
              { icon: BiNote, title: 'Smart notes', text: 'Timestamped notes stay connected to each lesson.' },
              { icon: BiCommentDetail, title: 'Q&A and feedback', text: 'Ask questions and see creator responses beside the course.' },
              { icon: BiBadgeCheck, title: 'Progress proof', text: 'Badges and certificates make completion feel valuable.' },
              { icon: BiBookOpen, title: 'Class project', text: 'Each session ends with a practical project prompt.' },
              { icon: BiDownload, title: 'Offline queue', text: 'A premium-style saved queue for planned learning.' },
              { icon: BiPlay, title: 'Speed controls', text: 'The player is positioned for speed, chapter, and resume features.' },
            ].map((item) => (
              <Stack key={item.title} p="5" border="1px solid" borderColor="whiteAlpha.200" bg="ink.800" borderRadius="18px" spacing="3">
                <Icon as={item.icon} color="brand.200" boxSize="6" />
                <Text fontWeight="900">{item.title}</Text>
                <Text color="whiteAlpha.700" fontSize="sm">{item.text}</Text>
              </Stack>
            ))}
          </SimpleGrid>
          </Reveal>
          <Reveal>
          <SimpleGrid columns={{base: 1, md: 3}} gap="5">
            <GraphicPoster label="Series" title="Creator Masterclass" tone="red" />
            <GraphicPoster label="Workshop" title="Motion Story Lab" tone="amber" />
            <GraphicPoster label="Sprint" title="7-Day Launch Queue" />
          </SimpleGrid>
          </Reveal>
        </Stack>
      </Container>
    </Box>
    </PageBackdrop>
  )
}

export default Videos
