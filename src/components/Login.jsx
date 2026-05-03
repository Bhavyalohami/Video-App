import {Box, Button, Container, FormControl, FormLabel, Grid, Heading, HStack, Image, Input, Link as ChakraLink, Stack, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import img4 from '../assets/4.jpg';
import {AnimatedCircuit, OrbitSystem, PageBackdrop, Reveal} from './Visuals';

const Login = () => {
  const fieldStyle = { bg: 'white', borderColor: 'blackAlpha.300', _hover: { borderColor: 'blackAlpha.400' } };
  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1080px">
        <Reveal>
        <Grid templateColumns={{base: '1fr', lg: '1fr 1fr'}} overflow="hidden" border="1px solid" borderColor="whiteAlpha.200" borderRadius="24px" bg="ink.800">
          <Box p={{base: '6', md: '10'}} bg="white" color="ink.900">
            <Stack as="form" onSubmit={(event) => event.preventDefault()} spacing="6">
              <Box>
                <Text color="brand.700" fontWeight="900">Welcome back</Text>
                <Heading mt="2" fontSize={{base: '4xl', md: '6xl'}} lineHeight="0.9" textTransform="uppercase">Jump into your queue.</Heading>
                <Text mt="3" color="blackAlpha.700">Continue watching, manage uploads, and keep your creator workspace moving.</Text>
              </Box>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="you@example.com" type="email" {...fieldStyle} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Enter your password" type="password" {...fieldStyle} />
              </FormControl>
              <HStack justify="space-between">
                <ChakraLink as={Link} to="/signup" color="brand.700" fontWeight="800">Create account</ChakraLink>
                <ChakraLink as={Link} to="/login" color="blackAlpha.700">Forgot password?</ChakraLink>
              </HStack>
              <Button type="submit" bg="brand.500" color="white" borderRadius="999px" _hover={{bg: 'brand.600'}}>Log In</Button>
            </Stack>
          </Box>
          <Box pos="relative" minH={{base: '260px', lg: 'auto'}}>
            <Image src={img4} alt="Creator event" pos="absolute" inset="0" w="full" h="full" objectFit="cover" />
            <Box pos="absolute" inset="0" bg="linear-gradient(0deg, rgba(7,16,19,0.88), rgba(7,16,19,0.24))" />
            <OrbitSystem variant="ember" pos="absolute" right="-70px" top="-58px" opacity="0.42" />
            <Stack pos="absolute" bottom="8" left="8" right="8" spacing="2">
              <Text color="brand.100" fontWeight="900">Tonight on Video Hub</Text>
              <Heading size="lg">Night Sessions: Story In Motion</Heading>
              <Text color="whiteAlpha.800">Pick up where you left off with curated culture, gaming, hardware, and spatial video lessons.</Text>
            </Stack>
          </Box>
        </Grid>
        </Reveal>
        <AnimatedCircuit variant="ember" />
      </Container>
    </Box>
    </PageBackdrop>
  )
}

export default Login
