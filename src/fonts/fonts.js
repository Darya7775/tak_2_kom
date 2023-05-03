import { createGlobalStyle } from "styled-components";

import MontserratRegularWoff from "./Montserrat-Regular.woff";
import MontserratRegularWoff2 from "./Montserrat-Regular.woff2";

import MontserratLightWoff from "./Montserrat-Light.woff";
import MontserratLightWoff2 from "./Montserrat-Light.woff2";

import InterRegularWoff from "./Inter-Regular.woff";
import InterRegularWoff2 from "./Inter-Regular.woff2";

import InterMediumWoff from "./Inter-Medium.woff";
import InterMediumWoff2 from "./Inter-Medium.woff2";

import InterBoldWoff from "./Inter-Bold.woff";
import InterBoldWoff2 from "./Inter-Bold.woff2";

import InterBlackWoff from "./Inter-Black.woff";
import InterBlackWoff2 from "./Inter-Black.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-style: normal;
    font-weight: 300;
    font-family: "Montserrat";

    font-display: swap;
    src:
      url(${MontserratLightWoff}) format("woff2"),
      url(${MontserratLightWoff2}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Montserrat";

    font-display: swap;
    src:
      url(${MontserratRegularWoff}) format("woff2"),
      url(${MontserratRegularWoff2}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterRegularWoff}) format("woff2"),
      url(${InterRegularWoff2}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterMediumWoff}) format("woff2"),
      url(${InterMediumWoff2}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 700;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterBoldWoff}) format("woff2"),
      url(${InterBoldWoff2}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 900;
    font-family: "Inter";

    font-display: swap;
    src:
      url(${InterBlackWoff}) format("woff2"),
      url(${InterBlackWoff2}) format("woff");
  }
`;

