import React from "react";
import { createGlobalStyle } from 'styled-components';
import { fonts } from "../../utils/fonts"

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    font-family: ${fonts.main};
    max-width: 100%;
    margin: 0 auto;
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
