import { Badge, Box, Button, Container, FormControl, FormLabel, Grid, Heading, HStack, Icon, Input, Select, SimpleGrid, Stack, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { BiBulb, BiCalendar, BiCaptions, BiDollarCircle, BiShield, BiVideoPlus } from 'react-icons/bi'
import {AnimatedCircuit, OrbitSystem, PageBackdrop, Reveal} from './Visuals'

const Upload = () => {
  const [fileName, setFileName] = useState('');
  const fieldStyle = { bg: 'white', borderColor: 'blackAlpha.300', _hover: { borderColor: 'blackAlpha.400' } };

  return (
    <PageBackdrop>
    <Box pt="28" pb="16">
      <Container maxW="1240px">
        <Reveal>
        <Grid templateColumns={{base: '1fr', lg: '0.9fr 1.1fr'}} gap="8" alignItems="stretch">
          <Stack spacing="6" bg="ink.800" border="1px solid" borderColor="whiteAlpha.200" borderRadius="24px" p={{base: '6', md: '8'}} pos="relative" overflow="hidden">
            <OrbitSystem variant="ember" pos="absolute" right="-78px" top="-72px" opacity="0.28" />
            <Badge w="fit-content" bg="brand.300" color="ink.900" borderRadius="999px" px="4" py="2">Creator studio</Badge>
            <Heading fontSize={{base: '5xl', md: '7xl'}} lineHeight="0.88" textTransform="uppercase" letterSpacing="-0.04em">Publish with intention.</Heading>
            <Text color="whiteAlpha.700" fontSize="lg">
              Package a video with the details viewers need before it lands in the library: title, category, description, and a clean source file.
            </Text>
            <VStack align="stretch" spacing="4">
              {[
                { icon: BiVideoPlus, title: 'High quality video intake', text: 'Designed for lessons, episodes, shorts, and creator explainers.' },
                { icon: BiBulb, title: 'Discovery-ready metadata', text: 'Every upload is structured for collections and recommendations.' },
                { icon: BiShield, title: 'Private before publish', text: 'Creators can prepare content before sharing it with viewers.' },
              ].map((item) => (
                <HStack key={item.title} align="flex-start" spacing="4" p="4" bg="whiteAlpha.100" borderRadius="8px">
                  <Icon as={item.icon} color="brand.200" boxSize="6" mt="1" />
                  <Box>
                    <Text fontWeight="900">{item.title}</Text>
                    <Text color="whiteAlpha.700" fontSize="sm">{item.text}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Stack>

          <Box as="form" onSubmit={(event) => event.preventDefault()} bg="white" color="ink.900" borderRadius="24px" p={{base: '6', md: '8'}} boxShadow="0 28px 80px rgba(0,0,0,0.35)">
            <Stack spacing="6">
              <VStack
                spacing="4"
                align="center"
                justify="center"
                minH="220px"
                border="1px dashed"
                borderColor="blackAlpha.300"
                bg="blackAlpha.50"
                borderRadius="8px"
                p="6"
              >
                <Icon as={AiOutlineCloudUpload} boxSize="20" color="brand.600" />
                <Box textAlign="center">
                  <Text fontWeight="900" fontSize="lg">{fileName || 'Drop a video file into the studio'}</Text>
                  <Text color="blackAlpha.600">MP4, MOV, or WebM up to your project limits</Text>
                </Box>
                <Input
                  required
                  type="file"
                  accept="video/*"
                  maxW="360px"
                  {...fieldStyle}
                  onChange={(event) => setFileName(event.target.files?.[0]?.name || '')}
                />
              </VStack>

              <Grid templateColumns={{base: '1fr', md: '1fr 1fr'}} gap="5">
                <FormControl isRequired>
                  <FormLabel>Video title</FormLabel>
                  <Input placeholder="Console Setup Lab" {...fieldStyle} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select placeholder="Choose category" {...fieldStyle}>
                    <option>Spatial</option>
                    <option>Gaming</option>
                    <option>Hardware</option>
                    <option>Culture</option>
                  </Select>
                </FormControl>
              </Grid>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea minH="130px" placeholder="Tell viewers what they will learn, why it matters, and where to go next." {...fieldStyle} />
              </FormControl>

              <HStack justify="space-between" flexWrap="wrap" gap="3">
                <Text color="blackAlpha.600" fontSize="sm">Drafts stay private until your publishing backend is connected.</Text>
                <Button type="submit" bg="brand.500" color="white" borderRadius="999px" _hover={{bg: 'brand.600'}}>
                  Prepare Upload
                </Button>
              </HStack>

              <SimpleGrid columns={{base: 1, md: 3}} gap="3">
                {[
                  { icon: BiCaptions, text: 'Captions and transcript checklist' },
                  { icon: BiDollarCircle, text: 'Paid series and bundle setup' },
                  { icon: BiCalendar, text: 'Premiere scheduling controls' },
                ].map((item) => (
                  <HStack key={item.text} border="1px solid" borderColor="blackAlpha.200" borderRadius="8px" p="3">
                    <Icon as={item.icon} color="brand.700" />
                    <Text fontSize="sm" fontWeight="800">{item.text}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
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

export default Upload
