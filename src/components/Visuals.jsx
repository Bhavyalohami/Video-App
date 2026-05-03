import React from 'react';
import {Badge, Box, Flex, HStack, Icon, Image, SimpleGrid, Stack, Text} from '@chakra-ui/react';
import {BiBadgeCheck, BiCameraMovie, BiCaptions, BiCommentDetail, BiDownload, BiGame, BiPlay, BiRadar, BiVideoRecording} from 'react-icons/bi';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

export const Reveal = ({ children, delay = 0, y = 42, once = true, ...props }) => {
  const {ref, inView} = useInView({ triggerOnce: once, threshold: 0.16, rootMargin: '-40px 0px' });
  const resting = { opacity: 0.94, y: Math.min(y, 18), scale: 0.995 };

  return (
    <Box
      ref={ref}
      as={motion.div}
      initial={resting}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : resting}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Box>
  );
};

export const BrandMark = ({ compact = false }) => (
  <HStack spacing="3" minW="0">
    <Flex
      w={{base: '10', md: '12'}}
      h={{base: '10', md: '12'}}
      align="center"
      justify="center"
      border="2px solid"
      borderColor="brand.300"
      color="brand.200"
      bg="blackAlpha.500"
      borderRadius="8px"
      pos="relative"
      _before={{content: '""', pos: 'absolute', inset: '2', border: '1px solid', borderColor: 'brand.400', borderRadius: '6px', opacity: 0.35}}
    >
      <Icon as={BiPlay} boxSize="6" />
    </Flex>
    {!compact && (
      <Box lineHeight="1" minW="0">
        <Text fontWeight="950" fontSize={{base: 'md', md: 'lg'}} noOfLines={1}>Video Hub</Text>
        <Text fontSize="xs" color="brand.200" letterSpacing="0.18em" fontWeight="800" noOfLines={1}>STREAM STUDIO</Text>
      </Box>
    )}
  </HStack>
);

export const PageBackdrop = ({ children }) => (
  <Box
    bg="ink.900"
    color="white"
    minH="100vh"
    pos="relative"
    overflow="hidden"
    _before={{
      content: '""',
      pos: 'absolute',
      inset: 0,
      bg: 'radial-gradient(circle at 78% 16%, rgba(215,255,56,0.14), transparent 28%), radial-gradient(circle at 12% 38%, rgba(255,79,31,0.17), transparent 24%), radial-gradient(circle at 58% 72%, rgba(242,56,184,0.1), transparent 28%), linear-gradient(180deg, #12100d 0%, #070605 100%)',
      pointerEvents: 'none',
    }}
  >
    <Box pos="relative">{children}</Box>
  </Box>
);

export const HeroShowcase = () => (
  <Box pos="relative" minH={{base: '380px', lg: '560px'}} display={{base: 'none', md: 'block'}}>
    <Box
      pos="absolute"
      inset={{md: '8 0 0 0', lg: '0'}}
      borderRadius="32px"
      bg="linear-gradient(145deg, rgba(215,255,56,0.18), rgba(255,79,31,0.13) 42%, rgba(18,16,13,0.92))"
      border="1px solid"
      borderColor="whiteAlpha.200"
      boxShadow="0 40px 120px rgba(0,0,0,0.45)"
      overflow="hidden"
    >
      <Text pos="absolute" top="3" left="5" fontSize={{md: '7xl', lg: '8xl'}} lineHeight="0.82" fontWeight="950" color="whiteAlpha.200" letterSpacing="-0.04em">
        VIDEO
      </Text>
      <Text pos="absolute" top={{md: '82px', lg: '100px'}} left="5" fontSize={{md: '7xl', lg: '8xl'}} lineHeight="0.82" fontWeight="950" color="transparent" sx={{WebkitTextStroke: '1px rgba(215,255,56,0.65)'}} letterSpacing="-0.04em">
        HUB
      </Text>

      <Flex pos="absolute" inset="0" align="center" justify="center" pt="20">
        <Box pos="relative" w={{md: '250px', lg: '330px'}} h={{md: '330px', lg: '420px'}}>
          <Box pos="absolute" left="50%" top="9%" transform="translateX(-50%)" w="54%" h="25%" bg="brand.100" borderRadius="50% 50% 42% 42%" border="3px solid" borderColor="whiteAlpha.500" />
          <Box pos="absolute" left="50%" top="22%" transform="translateX(-50%)" w="78%" h="28%" bg="rgba(18,16,13,0.88)" borderRadius="42% 42% 48% 48%" border="2px solid" borderColor="brand.200" boxShadow="0 0 35px rgba(215,255,56,0.45)" />
          <Box pos="absolute" left="50%" top="41%" transform="translateX(-50%)" w="82%" h="42%" bg="linear-gradient(180deg, #fbffe5, #d7ff38)" clipPath="polygon(20% 0, 80% 0, 100% 100%, 0 100%)" borderRadius="28px" />
          <Box pos="absolute" left="13%" top="50%" w="74%" h="6" bg="blackAlpha.600" transform="rotate(-35deg)" borderRadius="full" />
          <Flex pos="absolute" left="50%" top="49%" transform="translateX(-50%)" w="88px" h="88px" align="center" justify="center" bg="ink.950" color="brand.200" border="1px solid" borderColor="brand.300" borderRadius="full">
            <Icon as={BiVideoRecording} boxSize="11" />
          </Flex>
        </Box>
      </Flex>

      <SimpleGrid pos="absolute" right="6" bottom="6" columns="2" spacing="3" w="220px">
        {['Retention 84%', 'Notes live', '4K ready', 'Q&A active'].map((item) => (
          <Box key={item} bg="blackAlpha.500" border="1px solid" borderColor="whiteAlpha.200" borderRadius="8px" p="3">
            <Text fontWeight="900" fontSize="sm">{item}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
);

export const SignalRibbon = () => (
  <Box pos="relative" h={{base: '92px', md: '130px'}} my={{base: '8', md: '14'}}>
    <HStack
      pos="absolute"
      left="-8%"
      right="-8%"
      top="28%"
      h="58px"
      spacing="8"
      justify="center"
      bg="brand.300"
      color="ink.900"
      transform="rotate(-3deg)"
      boxShadow="0 26px 70px rgba(88,241,208,0.18)"
    >
      {[BiGame, BiCameraMovie, BiCaptions, BiDownload, BiCommentDetail, BiBadgeCheck, BiRadar, BiGame, BiCameraMovie].map((item, index) => (
        <Icon key={index} as={item} boxSize="7" opacity={index % 2 ? 0.55 : 0.95} />
      ))}
    </HStack>
    <HStack
      pos="absolute"
      left="-8%"
      right="-8%"
      top="45%"
      h="54px"
      spacing="8"
      justify="center"
      bg="rgba(255,79,31,0.72)"
      color="ink.950"
      transform="rotate(3deg)"
    >
      {['WATCH', 'CREATE', 'LEARN', 'LAUNCH', 'ANALYZE', 'GROW'].map((item) => (
        <Text key={item} fontWeight="950" letterSpacing="0.16em">{item}</Text>
      ))}
    </HStack>
  </Box>
);

export const GraphicPoster = ({ label, title, tone = 'teal', image }) => {
  const accent = tone === 'red' ? '#ff4f1f' : tone === 'amber' ? '#ff9f45' : tone === 'pink' ? '#f238b8' : '#d7ff38';

  return (
    <Box bg="ink.800" border="1px solid" borderColor="whiteAlpha.200" borderRadius="18px" overflow="hidden" pos="relative">
      <Box h="210px" pos="relative" bg={`radial-gradient(circle at 45% 38%, ${accent}55, transparent 34%), linear-gradient(145deg, #08090c, #22232b)`}>
        {image ? (
          <Image src={image} alt={title} w="full" h="full" objectFit="cover" opacity="0.72" />
        ) : (
          <Flex h="full" align="center" justify="center">
            <Flex w="82px" h="82px" align="center" justify="center" borderRadius="full" bg={accent} color="ink.950">
              <Icon as={BiPlay} boxSize="10" />
            </Flex>
          </Flex>
        )}
        <Badge pos="absolute" top="4" left="4" bg={accent} color="ink.950" borderRadius="8px">{label}</Badge>
      </Box>
      <Stack p="5" spacing="3">
        <Text fontWeight="950" fontSize="lg">{title}</Text>
        <Text color="whiteAlpha.650" fontSize="sm">Chaptered video, project prompts, creator notes, and viewer progress built into one cinematic card.</Text>
      </Stack>
    </Box>
  );
};

export const MotionGlyphs = () => (
  <Box display={{base: 'none', md: 'block'}} pos="absolute" inset="0" pointerEvents="none" overflow="hidden">
    <Box
      as={motion.svg}
      viewBox="0 0 900 520"
      pos="absolute"
      right={{base: '-320px', lg: '-120px'}}
      top={{base: '80px', lg: '60px'}}
      w={{base: '760px', lg: '900px'}}
      h="520px"
      opacity="0.72"
      animate={{ rotate: [0, 2, -1, 0], y: [0, -12, 8, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.path
        d="M114 268C212 82 424 22 608 104C762 173 816 335 690 418C550 510 340 468 206 392C123 345 78 338 114 268Z"
        fill="none"
        stroke="#d7ff38"
        strokeWidth="2"
        strokeDasharray="10 18"
        animate={{ pathLength: [0.2, 1, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M176 320C306 176 472 148 630 224C718 266 758 344 706 396C620 482 416 456 254 388"
        fill="none"
        stroke="#ff4f1f"
        strokeWidth="3"
        strokeDasharray="4 14"
        animate={{ pathLength: [1, 0.25, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle cx="664" cy="206" r="10" fill="#f238b8" animate={{ scale: [1, 1.6, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="198" cy="354" r="8" fill="#d7ff38" animate={{ scale: [1.5, 1, 1.5] }} transition={{ duration: 4, repeat: Infinity }} />
    </Box>
  </Box>
);

export const OrbitSystem = ({ variant = 'lime', ...props }) => {
  const primary = variant === 'ember' ? '#ff4f1f' : variant === 'pink' ? '#f238b8' : '#d7ff38';
  const secondary = variant === 'ember' ? '#d7ff38' : '#ff4f1f';

  return (
    <Box
      as={motion.svg}
      viewBox="0 0 360 360"
      w={{base: '180px', md: '260px'}}
      h={{base: '180px', md: '260px'}}
      opacity="0.82"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      pointerEvents="none"
      aria-hidden="true"
      {...props}
    >
      <motion.circle cx="180" cy="180" r="116" fill="none" stroke={primary} strokeWidth="2" strokeDasharray="12 18" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.circle cx="180" cy="180" r="72" fill="none" stroke={secondary} strokeWidth="3" strokeDasharray="5 14" animate={{ scale: [1.08, 1, 1.08] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.path d="M72 184C118 92 242 84 292 174C326 235 270 294 184 292C100 290 40 246 72 184Z" fill="none" stroke="rgba(255,255,255,0.36)" strokeWidth="1.5" />
      {[0, 1, 2, 3].map((item) => (
        <motion.circle
          key={item}
          cx={[180, 280, 94, 232][item]}
          cy={[64, 180, 220, 104][item]}
          r={item % 2 ? 8 : 11}
          fill={item % 2 ? secondary : primary}
          animate={{ scale: [1, 1.45, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.8 + item * 0.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <circle cx="180" cy="180" r="24" fill="rgba(255,255,255,0.08)" stroke={primary} />
    </Box>
  );
};

export const AnimatedCircuit = ({ variant = 'lime' }) => {
  const primary = variant === 'ember' ? '#ff4f1f' : variant === 'pink' ? '#f238b8' : '#d7ff38';
  const secondary = variant === 'ember' ? '#d7ff38' : '#ff4f1f';

  return (
    <Box
      as={motion.svg}
      viewBox="0 0 720 220"
      w="full"
      h={{base: '110px', md: '150px'}}
      opacity="0.78"
      animate={{ x: [0, -18, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.path
        d="M12 126H132L178 74H296L340 126H474L520 56H706"
        fill="none"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="12 18"
        animate={{ pathLength: [0.35, 1, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M38 164H204L250 120H386L430 166H612"
        fill="none"
        stroke={secondary}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 16"
        animate={{ pathLength: [1, 0.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {[132, 296, 474, 520, 204, 386, 612].map((cx, index) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={index < 4 ? [126, 74, 126, 56][index] : [164, 120, 166][index - 4]}
          r={index % 2 ? 7 : 10}
          fill={index % 2 ? secondary : primary}
          animate={{ scale: [1, 1.5, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </Box>
  );
};

export const FloatingBadges = ({ items }) => (
  <SimpleGrid columns={{base: 1, md: 3}} gap="4">
    {items.map((item, index) => (
      <Box
        key={item}
        as={motion.div}
        bg={index % 2 ? 'ember.500' : 'brand.300'}
        color="ink.950"
        borderRadius="18px"
        p="4"
        fontWeight="950"
        animate={{ y: [0, index % 2 ? 10 : -10, 0], rotate: [0, index % 2 ? -1 : 1, 0] }}
        transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {item}
      </Box>
    ))}
  </SimpleGrid>
);
