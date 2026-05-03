import React from 'react';
import {Badge, Box, Button, Container, Grid, Heading, HStack, Icon, List, ListIcon, ListItem, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {BiBadgeCheck, BiCheckCircle, BiDevices, BiDownload, BiLockAlt, BiRocket} from 'react-icons/bi';
import {AnimatedCircuit, OrbitSystem, PageBackdrop, Reveal} from './Visuals';

const plans = [
  {
    name: 'Viewer',
    price: '$9',
    text: 'For people building a weekly learning habit.',
    features: ['Ad-free watch room', 'Learning paths and notes', 'Offline-ready queue concept', 'Certificates and badges'],
  },
  {
    name: 'Creator',
    price: '$29',
    text: 'For makers publishing courses, series, and workshops.',
    featured: true,
    features: ['Upload studio', 'Project galleries and Q&A', 'Analytics dashboard', 'Paid series and bundles'],
  },
  {
    name: 'Studio',
    price: '$99',
    text: 'For teams running a branded video business.',
    features: ['Team roles', 'Custom channel pages', 'DRM-ready positioning', 'Priority launch support'],
  },
];

const Pricing = () => {
  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1240px">
        <Stack spacing="5" textAlign="center" align="center" pos="relative">
          <OrbitSystem pos="absolute" left={{base: '-60px', md: '0'}} top={{base: '-44px', md: '-62px'}} opacity="0.34" />
          <Badge bg="brand.300" color="ink.900" borderRadius="999px" px="4" py="2">Plans</Badge>
          <Heading fontSize={{base: '4xl', md: '7xl'}} lineHeight="0.9" textTransform="uppercase" letterSpacing="-0.04em" maxW="960px">Built to beat plain course sites and generic video hosting.</Heading>
          <Text color="whiteAlpha.700" fontSize="lg" maxW="720px">
            Viewer convenience, creator business tools, and studio-grade control are packaged as one premium product story.
          </Text>
        </Stack>

        <Reveal>
        <SimpleGrid columns={{base: 1, lg: 3}} gap="5" mt="12">
          {plans.map((plan) => (
            <Stack
              key={plan.name}
              spacing="6"
              bg={plan.featured ? 'white' : 'ink.800'}
              color={plan.featured ? 'ink.900' : 'white'}
              border="1px solid"
              borderColor={plan.featured ? 'brand.200' : 'whiteAlpha.200'}
              borderRadius="24px"
              p="7"
              transform={plan.featured ? {base: 'none', lg: 'translateY(-18px)'} : 'none'}
              boxShadow={plan.featured ? '0 30px 90px rgba(51,214,166,0.18)' : 'none'}
            >
              <Box>
                <HStack justify="space-between">
                  <Heading size="lg">{plan.name}</Heading>
                  {plan.featured && <Badge bg="brand.300" color="ink.900" borderRadius="999px">Best fit</Badge>}
                </HStack>
                <Text mt="4" color={plan.featured ? 'blackAlpha.700' : 'whiteAlpha.700'}>{plan.text}</Text>
              </Box>
              <HStack align="end">
                <Heading size="2xl">{plan.price}</Heading>
                <Text pb="2" color={plan.featured ? 'blackAlpha.600' : 'whiteAlpha.600'}>/mo</Text>
              </HStack>
              <List spacing="3">
                {plan.features.map((feature) => (
                  <ListItem key={feature}>
                    <ListIcon as={BiCheckCircle} color={plan.featured ? 'brand.600' : 'brand.200'} />
                    {feature}
                  </ListItem>
                ))}
              </List>
              <Button as={Link} to={plan.featured ? '/upload' : '/signup'} bg={plan.featured ? 'brand.500' : 'whiteAlpha.100'} color={plan.featured ? 'white' : 'white'} borderRadius="999px" _hover={{bg: plan.featured ? 'brand.600' : 'whiteAlpha.200'}}>
                Choose {plan.name}
              </Button>
            </Stack>
          ))}
        </SimpleGrid>
        </Reveal>

        <AnimatedCircuit variant="pink" />
        <Reveal>
        <Grid templateColumns={{base: '1fr', md: 'repeat(4, 1fr)'}} gap="4" mt="10">
          {[
            { icon: BiDownload, text: 'Downloads and background-style convenience' },
            { icon: BiDevices, text: 'Responsive web-first channel experience' },
            { icon: BiLockAlt, text: 'Private drafts and rights-aware publishing' },
            { icon: BiBadgeCheck, text: 'Badges, certificates, and progress proof' },
          ].map((item) => (
            <HStack key={item.text} bg="ink.800" border="1px solid" borderColor="whiteAlpha.200" borderRadius="18px" p="4" align="flex-start">
              <Icon as={item.icon || BiRocket} color="brand.200" boxSize="6" mt="1" />
              <Text color="whiteAlpha.800" fontWeight="700">{item.text}</Text>
            </HStack>
          ))}
        </Grid>
        </Reveal>
      </Container>
    </Box>
    </PageBackdrop>
  );
};

export default Pricing;
