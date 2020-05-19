import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import Item from "./components/Item/Item";

const Root = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <Root>
          <Item title="Item 1" />
          <Item dp={4} title="Item 2" buttonType="success" />
          <Item dp={6} title="Item 3" buttonType="alert" />
          <Item dp={4} title="Item 4" buttonType="warning" />
          <Item dp={3} title="Item 5" buttonType="warning" />
          <Item title="Item 6" buttonType="success" />
        </Root>
      </ThemeProvider>
  );
}
