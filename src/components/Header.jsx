import React from 'react'
import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Link as ChakraLink, useDisclosure, VStack} from "@chakra-ui/react";
import {Link, NavLink} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"
import {BrandMark} from "./Visuals";

const links = [
  { label: 'Home', to: '/' },
  { label: 'Watch', to: '/videos' },
  { label: 'Creators', to: '/creators' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Upload', to: '/upload' },
];

const NavItem = ({ to, children, onClick }) => (
  <ChakraLink
    as={NavLink}
    to={to}
    end={to === '/'}
    onClick={onClick}
    className={({isActive}) => isActive ? 'active' : undefined}
    px="3"
    py="2"
    borderRadius="999px"
    color="whiteAlpha.800"
    fontWeight="700"
    _hover={{ color: 'white', bg: 'whiteAlpha.100', textDecoration: 'none' }}
    _activeLink={{ color: 'ink.950', bg: 'brand.300' }}
    sx={{
      '&.active': {
        color: 'var(--chakra-colors-ink-950)',
        background: 'var(--chakra-colors-brand-300)',
      },
    }}
  >
    {children}
  </ChakraLink>
);

const authActiveSx = {
  '&.active': {
    color: 'var(--chakra-colors-ink-950)',
    background: 'var(--chakra-colors-brand-300)',
  },
};

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure()

  return <>
   <Box pos="fixed" top="0" left="0" right="0" zIndex="overlay" px={{base: '3', md: '8'}} py={{base: '3', md: '4'}}>
    <Flex
      align="center"
      justify={{base: 'flex-start', lg: 'space-between'}}
      maxW="1240px"
      mx="auto"
      px={{base: '3', md: '4'}}
      pr={{base: '3', lg: '4'}}
      py={{base: '3', md: '3'}}
      border="1px solid"
      borderColor="whiteAlpha.200"
      bg="rgba(17, 19, 24, 0.78)"
      backdropFilter="blur(18px)"
      borderRadius="999px"
      boxShadow="0 18px 50px rgba(0,0,0,0.28)"
      gap="4"
      pos="relative"
    >
      <ChakraLink as={Link} to="/" _hover={{ textDecoration: 'none' }} flex={{base: '0 1 auto', lg: '1'}} minW="0">
        <BrandMark />
      </ChakraLink>

      <HStack display={{base: 'none', lg: 'flex'}} spacing="1" bg="whiteAlpha.100" border="1px solid" borderColor="whiteAlpha.100" borderRadius="999px" p="1" minW="0">
        {links.map((item) => <NavItem key={item.to} to={item.to}>{item.label}</NavItem>)}
      </HStack>

      <HStack display={{base: 'none', xl: 'flex'}} spacing="3" flex="0 0 auto">
        <Button as={NavLink} to="/login" className={({isActive}) => isActive ? 'active' : undefined} variant="ghost" color="whiteAlpha.900" borderRadius="999px" _hover={{bg: 'whiteAlpha.100'}} _activeLink={{color: 'ink.950', bg: 'brand.300'}} sx={authActiveSx}>
          Log In
        </Button>
        <Button as={NavLink} to="/signup" className={({isActive}) => isActive ? 'active' : undefined} bg="brand.300" color="ink.900" borderRadius="999px" _hover={{bg: 'brand.200'}} _activeLink={{color: 'ink.950', bg: 'brand.300'}} sx={authActiveSx}>
          Sign Up
        </Button>
      </HStack>

      <IconButton
        display={{base: 'inline-flex', lg: 'none'}}
        aria-label="Open navigation"
        icon={<BiMenuAltLeft size="24" />}
        onClick={onOpen}
        flexShrink={0}
        borderRadius="full"
        bg="brand.300"
        color="ink.950"
        border="1px solid"
        borderColor="brand.100"
        boxShadow="0 0 0 4px rgba(215,255,56,0.16), 0 16px 40px rgba(0,0,0,0.35)"
        _hover={{bg: 'brand.200'}}
      />
    </Flex>
   </Box>

   <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}> 
    <DrawerOverlay />
    <DrawerContent bg="ink.800" color="white">
      <DrawerCloseButton />
      <DrawerHeader><BrandMark /></DrawerHeader>
      <DrawerBody>
        <VStack alignItems={'stretch'} spacing="3">
          {links.map((item) => <NavItem key={item.to} to={item.to} onClick={onClose}>{item.label}</NavItem>)}
        </VStack>

        <HStack pos={'absolute'} bottom={'10'} left={'0'} px="6" w={'full'} justifyContent={'space-between'}> 
          <Button as={NavLink} to="/login" onClick={onClose} className={({isActive}) => isActive ? 'active' : undefined} variant="ghost" color="white" borderRadius="999px" _activeLink={{color: 'ink.950', bg: 'brand.300'}} sx={authActiveSx}>
            Log In
          </Button>
          <Button as={NavLink} to="/signup" onClick={onClose} className={({isActive}) => isActive ? 'active' : undefined} bg="brand.300" color="ink.900" borderRadius="999px" _activeLink={{color: 'ink.950', bg: 'brand.300'}} sx={authActiveSx}>
            Sign Up
          </Button>
        </HStack>
      </DrawerBody>
    </DrawerContent>
   </Drawer> 
 </>;
}

export default Header;
