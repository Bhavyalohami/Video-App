import {Box, Button, Container, FormControl, FormLabel, Grid, Heading, HStack, Image, Input, Link as ChakraLink, Select, Stack, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from 'react'
import img2 from '../assets/2.jpg';
import {AnimatedCircuit, OrbitSystem, PageBackdrop, Reveal} from './Visuals';

const SignUp = () => {
  const fieldStyle = { bg: 'white', borderColor: 'blackAlpha.300', _hover: { borderColor: 'blackAlpha.400' } };
  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1080px">
        <Reveal>
        <Grid templateColumns={{base: '1fr', lg: '0.9fr 1.1fr'}} overflow="hidden" border="1px solid" borderColor="whiteAlpha.200" borderRadius="24px" bg="ink.800">
          <Box pos="relative" minH={{base: '260px', lg: 'auto'}}>
            <Image src={img2} alt="Gaming creators" pos="absolute" inset="0" w="full" h="full" objectFit="cover" />
            <Box pos="absolute" inset="0" bg="linear-gradient(0deg, rgba(7,16,19,0.9), rgba(7,16,19,0.18))" />
            <OrbitSystem variant="pink" pos="absolute" left="-64px" top="-58px" opacity="0.42" />
            <Stack pos="absolute" bottom="8" left="8" right="8" spacing="2">
              <Text color="brand.100" fontWeight="900">Join the studio</Text>
              <Heading size="lg">Turn your next video into a channel people return to.</Heading>
            </Stack>
          </Box>
          <Box p={{base: '6', md: '10'}} bg="white" color="ink.900">
            <Stack as="form" onSubmit={(event) => event.preventDefault()} spacing="5">
              <Box>
                <Text color="brand.700" fontWeight="900">Create account</Text>
                <Heading mt="2" fontSize={{base: '4xl', md: '6xl'}} lineHeight="0.9" textTransform="uppercase">Start your Video Hub.</Heading>
              </Box>
              <Grid templateColumns={{base: '1fr', md: '1fr 1fr'}} gap="4">
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your name" {...fieldStyle} />
                </FormControl>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Select placeholder="Choose role" {...fieldStyle}>
                    <option>Viewer</option>
                    <option>Creator</option>
                    <option>Studio team</option>
                  </Select>
                </FormControl>
              </Grid>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="you@example.com" type="email" {...fieldStyle} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Create a password" type="password" {...fieldStyle} />
              </FormControl>
              <Button type="submit" bg="brand.500" color="white" borderRadius="999px" _hover={{bg: 'brand.600'}}>Sign Up</Button>
              <HStack justify="flex-end">
                <Text color="blackAlpha.700">Already have an account?</Text>
                <ChakraLink as={Link} to="/login" color="brand.700" fontWeight="800">Log In</ChakraLink>
              </HStack>
            </Stack>
          </Box>
        </Grid>
        </Reveal>
        <AnimatedCircuit variant="pink" />
      </Container>
    </Box>
    </PageBackdrop>
  )
}

export default SignUp
