import React from "react";
import { createGlobalStyle } from 'styled-components';
import { fonts } from "../../utils/fonts"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.main};
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
