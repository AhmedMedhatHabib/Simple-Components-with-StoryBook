import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/base/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (story) => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  )
];