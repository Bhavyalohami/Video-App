import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Arial Narrow', 'Inter', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#111318',
        color: 'white',
        overflowX: 'hidden',
      },
      '::selection': {
        bg: '#d7ff38',
        color: '#141008',
      },
    },
  },
  radii: {
    card: '8px',
  },
  colors: {
    brand: {
      50: '#fbffe5',
      100: '#f1ffad',
      200: '#e7ff72',
      300: '#d7ff38',
      400: '#c0ed16',
      500: '#9fc600',
      600: '#7a9900',
      700: '#596f00',
      800: '#394700',
      900: '#202900',
    },
    ember: {
      300: '#ffb36b',
      400: '#ff7a3d',
      500: '#ff4f1f',
      600: '#d63212',
    },
    pulse: {
      300: '#ff6bd6',
      400: '#f238b8',
      500: '#c90088',
    },
    ink: {
      950: '#070605',
      900: '#12100d',
      800: '#1d1a16',
      700: '#29251f',
      600: '#3a3329',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontWeight: 700,
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'brand.300',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'brand.300',
      },
    },
  },
});

export default theme;
