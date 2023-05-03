import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body,
  html {
    margin: 0;
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.ffMontserrat};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorBlack};
    scrollbar-color: rgba(131, 58, 180, 0.5) rgba(131, 58, 180, 0.2);
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
      height: 5px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: rgba(131, 58, 180, 0.2);
      border-radius: 10px;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb:vertical {
      height: 30px;
      background-color: rgba(131, 58, 180, 0.5);
      border-radius: 10px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: ${(props) => props.theme.colorWhite};
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }
`;
