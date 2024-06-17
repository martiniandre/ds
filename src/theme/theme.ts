import { extendTheme } from '@chakra-ui/react';
import * as Colors from './js/variables';

const theme = extendTheme({
  colors: {
    brand: {
      900: Colors.ColorBasePurpleA700,
      800: '#153e75',
      700: '#2a69ac',
    },
  },
});

export default theme;
