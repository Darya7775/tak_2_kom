import { css } from "styled-components";

import bg from "../assets/bg.png";
import bg2x from "../assets/bg@2x.png";

export const Background = css`
  background-image: url(${bg});
  background-color: ${props => props.theme.colorBlack};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  background-attachment: fixed;

  @media(min-resolution: 144dpi), (min-resolution: 1.5dppx) {
    background-image: url(${bg2x});
  }

  @media(max-width: 47.94em) {
    background-image: none;
    background-size: 100%;
  }
`;

export const Montserrat300 = css`
  font-family: ${props => props.theme.ffMontserrat};
  font-style: normal;
  font-weight: 300;
`;

export const Montserrat400 = css`
  font-family: ${props => props.theme.ffMontserrat};
  font-style: normal;
  font-weight: 400;
`;

export const Inter400 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 400;
`;

export const Inter500 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 500;
`;

export const Inter700 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 700;
`;

export const Inter900 = css`
  font-family: ${props => props.theme.ffInter};
  font-style: normal;
  font-weight: 900;
`;

export const itemState = css`
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
      transition: opacity 1s;
    }
  }

  &:focus {
    opacity: 0.7;
  }

  &:active {
    color: ${props => props.theme.colorPurple};
    transition: color 1s;
  }
`;
