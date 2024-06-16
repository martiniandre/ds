import type { Preview } from "@storybook/react";
import { withChakra } from "./chakra-decorator";

export const decorators = [withChakra];

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
