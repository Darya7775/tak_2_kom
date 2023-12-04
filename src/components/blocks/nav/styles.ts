import styled from "styled-components";
import * as M from "../../../styles/mixins";

export const NavStyle = styled.nav`
  width: 100%;
  height: auto;

  @media(max-width: 47.94em) {
    justify-self: center;
  }

  @media(max-width: 34.34em) {
    width: 293px;
    height: 24px;
    overflow: hidden;
  }
`;

export const NavListStyle = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 30px;
  row-gap: 10px;

  @media(max-width: 63.94em) {
    column-gap: 20px;
  }

  @media(max-width: 47.94em) {
    column-gap: 16px;
    justify-content: center;
  }

  @media(max-width: 34.34em) {
    justify-content: flex-start;
  }
`;

export const LinkStyle = styled.a`
  ${M.Inter500};
  line-height: 19px;

  ${M.itemState};

  @media(max-width: 63.94em) {
    font-size: 14px;
  }

  @media(max-width: 47.94em) {
    font-size: 12.1px;
    line-height: 15px;
    text-transform: uppercase;
  }
`;
