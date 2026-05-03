import React from 'react'
import {Box, Button, Container, HStack, Icon, Input, Link as ChakraLink, SimpleGrid, Stack, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BrandMark} from './Visuals'

const Footer = () => {
  return (
    <Box bg="ink.950" borderTop="1px solid" borderColor="whiteAlpha.200" color="white">
      <Container maxW="1240px" py="12">
        <SimpleGrid columns={{base: 1, md: 3}} gap="8">
          <Stack spacing="4">
            <BrandMark />
            <Text color="whiteAlpha.700">A polished home for cinematic learning, creator channels, and video publishing.</Text>
          </Stack>
          <Stack spacing="3">
            <Text fontWeight="900">Explore</Text>
            <ChakraLink as={Link} to="/videos" color="whiteAlpha.700">Watch library</ChakraLink>
            <ChakraLink as={Link} to="/creators" color="whiteAlpha.700">Creator network</ChakraLink>
            <ChakraLink as={Link} to="/analytics" color="whiteAlpha.700">Analytics suite</ChakraLink>
            <ChakraLink as={Link} to="/pricing" color="whiteAlpha.700">Plans</ChakraLink>
            <ChakraLink as={Link} to="/upload" color="whiteAlpha.700">Upload studio</ChakraLink>
          </Stack>
          <Stack spacing="4">
            <Text fontWeight="900">Weekly premieres</Text>
            <HStack border="1px solid" borderColor="whiteAlpha.200" bg="whiteAlpha.100" borderRadius="999px" p="2">
              <Input placeholder="Email address" border="none" _focus={{boxShadow: 'none'}} />
              <Button aria-label="Subscribe" bg="brand.300" color="ink.900" p="0" minW="10">
                <Icon as={AiOutlineSend} />
              </Button>
            </HStack>
          </Stack>
        </SimpleGrid>
        <Text mt="10" color="whiteAlpha.500" fontSize="sm">© 2026 Video Hub. Built for watchers and makers.</Text>
      </Container>
    </Box>
  )
}

export default Footer
