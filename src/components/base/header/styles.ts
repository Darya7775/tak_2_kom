import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../../ui/container/container";
import * as M from "../../../styles/mixins";

export const HeaderStyle = styled.header`
  width: 100%;

  ${M.Background};
`;

export const ContainerStyle = styled(Container)`
  display: grid;
  grid-template-columns: 15.2% 1fr 16% 11%;

  padding-top: 60px;
  padding-bottom: 50px;
  gap: 20px;

  .social {
    column-gap: 28px;
    row-gap: 10px;

    @media(max-width: 72.44em) {
      display: none;
    }
  }

  @media(max-width: 89.94em) {
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
  }

  @media(max-width: 72.44em) {
    grid-template-columns: 14% 1fr auto;
    gap: 15px;
  }

  @media(max-width: 63.94em) {
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 25px;
  }

  @media(max-width: 47.94em) {
    grid-template-columns: 1fr;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const WrapLogoStyle = styled.div`
  width: 86%;

  @media(max-width: 47.94em) {
    display: none;
  }
`;

export const LogoStyle = styled(Link)`
  display: block;
  margin-bottom: 10px;

  @media(max-width: 72.44em) {
    margin-bottom: 0;
  }
`;

export const LogoTextStyle = styled.span`
  ${M.Montserrat300};
  font-size: 10px;
  line-height: 12px;

  display: block;

  @media(max-width: 72.44em) {
    display: none;
  }
`;

export const TelWrapStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  padding-top: 4px;

  @media(max-width: 47.94em) {
    display: none;
  }
`;

export const TelStyle = styled.a`
  ${M.Inter500};
  line-height: 19px;

  ${M.itemState};
`;
