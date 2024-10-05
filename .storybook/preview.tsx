import React from "react";
import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="flex h-full w-full items-center justify-center pt-40">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export default preview;
