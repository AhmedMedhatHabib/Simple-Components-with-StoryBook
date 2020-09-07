import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, SetGlobalStyle, Button } from './index';

class Demo extends Component {
  constructor(props) {
    super(props);

    SetGlobalStyle();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button
          color="primaryBlue"
          disabled={false}
          iconWidth={15}
          isLoading={false}
          onClick={() => {}}
          primary
          reverse={false}
        >
          Button
        </Button>
      </ThemeProvider>
    );
  }
}

export default Demo;

