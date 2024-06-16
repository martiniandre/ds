import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../src/theme/theme";

export const withChakra = (StoryFn) => (
  <ChakraProvider theme={theme}>
    <StoryFn />
  </ChakraProvider>
);

export const decorators = [withChakra];
