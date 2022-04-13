import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #f0f0f5;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

   html, body, #root, #root>div {
     height: 100%
  }
   a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
