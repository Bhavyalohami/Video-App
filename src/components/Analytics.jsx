import React from 'react';
import {Badge, Box, Button, Container, Flex, Grid, Heading, HStack, Icon, Progress, SimpleGrid, Stack, Stat, StatHelpText, StatLabel, StatNumber, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiBarChartAlt2, BiDollarCircle, BiPieChartAlt2, BiRocket, BiUserVoice} from 'react-icons/bi';
import {AnimatedCircuit, FloatingBadges, OrbitSystem, PageBackdrop, Reveal} from './Visuals';

const stats = [
  { label: 'Watch-through rate', value: '74%', helper: '+12% this month' },
  { label: 'Subscriber growth', value: '18.4k', helper: '+2,180 new viewers' },
  { label: 'Creator revenue', value: '$42k', helper: 'SVOD + workshops' },
];

const journeys = [
  { title: 'Discovery', value: 82 },
  { title: 'Started lesson', value: 68 },
  { title: 'Project submitted', value: 46 },
  { title: 'Subscribed', value: 31 },
];

const Analytics = () => {
  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1240px">
        <Grid templateColumns={{base: '1fr', lg: '0.95fr 1.05fr'}} gap="8" alignItems="center">
          <Stack spacing="6">
            <Badge w="fit-content" bg="brand.300" color="ink.900" borderRadius="999px" px="4" py="2">Analytics suite</Badge>
            <Heading fontSize={{base: '5xl', md: '7xl'}} lineHeight="0.88" textTransform="uppercase" letterSpacing="-0.04em">Know what viewers love before they drift away.</Heading>
            <Text color="whiteAlpha.700" fontSize="lg">
              A competitive video platform needs more than playback. This dashboard imagines the business, audience, and learning signals creators expect from modern OTT and course tools.
            </Text>
            <HStack spacing="4" flexWrap="wrap">
              <Button as={Link} to="/upload" leftIcon={<BiRocket />} bg="brand.300" color="ink.900" borderRadius="999px" _hover={{bg: 'brand.200'}}>
                Improve Next Upload
              </Button>
              <Button as={Link} to="/pricing" variant="outline" color="white" borderColor="whiteAlpha.300" borderRadius="999px">
                View Plans
              </Button>
            </HStack>
          </Stack>

          <Box bg="white" color="ink.900" borderRadius="24px" p={{base: '5', md: '7'}} boxShadow="0 30px 90px rgba(0,0,0,0.35)" pos="relative" overflow="hidden">
            <OrbitSystem variant="ember" pos="absolute" right="-76px" top="-82px" opacity="0.22" />
            <SimpleGrid columns={{base: 1, md: 3}} gap="4">
              {stats.map((item) => (
                <Stat key={item.label} border="1px solid" borderColor="blackAlpha.200" borderRadius="8px" p="4">
                  <StatLabel color="blackAlpha.600">{item.label}</StatLabel>
                  <StatNumber>{item.value}</StatNumber>
                  <StatHelpText color="brand.700">{item.helper}</StatHelpText>
                </Stat>
              ))}
            </SimpleGrid>
            <Stack mt="7" spacing="5">
              {journeys.map((item) => (
                <Box key={item.title}>
                  <Flex justify="space-between" mb="2">
                    <Text fontWeight="800">{item.title}</Text>
                    <Text color="blackAlpha.600">{item.value}%</Text>
                  </Flex>
                  <Progress value={item.value} colorScheme="teal" borderRadius="8px" bg="blackAlpha.100" />
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>

        <AnimatedCircuit />
        <Reveal>
        <SimpleGrid columns={{base: 1, md: 3}} gap="5" mt="8">
          {[
            { icon: BiPieChartAlt2, title: 'Journey analytics', text: 'See what viewers watched before and after a lesson, then tighten weak transitions.' },
            { icon: BiDollarCircle, title: 'Monetization signals', text: 'Track subscriptions, bundles, workshops, and pay-per-view experiments in one place.' },
            { icon: BiUserVoice, title: 'Community health', text: 'Spot unanswered Q&A, project feedback gaps, and creators with rising engagement.' },
          ].map((item) => (
            <Stack key={item.title} bg="ink.800" border="1px solid" borderColor="whiteAlpha.200" borderRadius="18px" p="6" spacing="4">
              <Icon as={item.icon || BiBarChartAlt2} boxSize="7" color="brand.200" />
              <Heading size="md">{item.title}</Heading>
              <Text color="whiteAlpha.700">{item.text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
        </Reveal>
        <Box mt="8">
          <FloatingBadges items={['Retention radar', 'Revenue pulses', 'Community signals']} />
        </Box>
      </Container>
    </Box>
    </PageBackdrop>
  );
};

export default Analytics;
