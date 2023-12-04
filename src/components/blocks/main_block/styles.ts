import styled from "styled-components";

import Container from "../../ui/container/container";

import backMobile from "../../../assets/bg_mobile.png";
import backMobile2x from "../../../assets/bg_mobile@2x.png";
import backMobile2xWebp from "/src/assets/bg_mobile@2x.webp";

import * as M from "../../../styles/mixins";

export const MainStyle = styled.section`
  width: 100%;

  ${M.Background};

  @media(max-width: 47.94em) {
    background-image: url(${backMobile});

    @media (min-resolution: 144dpi), (min-resolution: 1.5dppx) {
      background-image: url(${backMobile2x});
    }

    @media (min-resolution: 144dpi), (min-resolution: 1.5dppx) {
      background-image: url(${backMobile2xWebp});
    }
  }
`;

export const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  padding-bottom: 60px;
  padding-top: 43px;

  @media(max-width: 47.94em) {
    padding-top: 42px;
    flex-direction: column;
    row-gap: 45px;
  }
`;

export const Wrapper = styled.div`
  h2 {
    ${M.Inter400};
    font-size: 48px;
    line-height: 58px;

    margin: 0;

    @media(max-width: 47.94em) {
      font-size: 36px;
      line-height: 44px;

      margin: 0;
    }
  }

  span {
    ${M.Inter900};
    font-size: 48px;
    line-height: 58px;

    display: inline-flex;
    margin-bottom: 30px;

    background: linear-gradient(92deg, #fcd045 27.14%, #ff3f78 121.36%), #e4e5ea;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media(max-width: 47.94em) {
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 14px;
    }
  }

  p {
    margin: 0;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const WrapperRight = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media(max-width: 47.94em) {
    align-items: flex-start;
  }

  p {
    ${M.Inter500};
    text-align: right;
    margin-bottom: 40px;
    padding-top: 15px;

    @media(max-width: 47.94em) {
      text-align: left;
      margin-bottom: 20px;
      padding-top: 0;
    }
  }

  span {
    ${M.Inter700};
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    display: inline;

    @media(max-width: 47.94em) {
      font-size: 18px;
      line-height: 22px;
      text-transform: none;
      letter-spacing: 0;
    }
  }
`;

export const List = styled.ul`
  margin: 0 0 61px;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media(max-width: 47.94em) {
    row-gap: 14px;
    column-gap: 0;

    margin-bottom: 0;
  }
`;

export const Item = styled.li`

  h3 {
    ${M.Inter500};
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    margin: 0 0 6px;

    @media(max-width: 47.94em) {
      ${M.Montserrat400};
      font-size: 13px;
      line-height: 16px;
      text-align: left;

      margin: 0;
    }
  }

  p {
    margin: 0;

    ${M.Montserrat400};
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    padding-top: 0;
  }

  @media(max-width: 47.94em) {
    position: relative;
    padding-left: 15px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;

      width: 10px;
      height: 1px;
      background: linear-gradient(#fcb045 100%, #fd1d1d 100%);
    }
  }
`;

export const Button = styled.button`
  width: 87.7%;
  border: none;
  padding: 20px;
  background-color: ${props => props.theme.colorBlue};

  ${M.Inter500};
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.colorWhite};

  cursor: pointer;
  user-select: none;

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
    background-color: ${props => props.theme.colorPurple};
    transition: background-color 1s;
  }

  @media(max-width: 47.94em) {
    display: none;
  }
`;
