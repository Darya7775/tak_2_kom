import styled, { css } from "styled-components";
import Container  from "/src/components/ui/container/container";
import * as M from "/src/style/mixins";

const footerList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FooterStyle = styled.footer`
  width: 100%;
`;

export const ContainerStyle = styled(Container)`
  padding-top: 65px;
  padding-bottom: 15px;

  display: grid;
  grid-template-columns: 25.5% 1fr 30%;

  @media(max-width: 89.94em) {
    padding-top: 40px;
    padding-bottom: 60px;
  }

  @media(max-width: 58.69em) {
    grid-template-columns: 1fr;
    gap: 27px;
  }

  .WuXpE {
    margin-bottom: 18px;
    gap: 10px;

    @media(max-width: 58.69em) {
      justify-content: flex-start;
      margin-bottom: 12px;
    }

    @media(max-width: 47.94em) {
      margin-bottom: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  h3 {
    margin: 0 0 17px;

    ${M.Inter700};
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: $color-gray;

    @media(max-width: 47.94em) {
      font-size: 12px;
      line-height: 15px;

      margin: 0 0 17px;
    }
  }
`;

export const WrapperContacts = styled(Wrapper)`
  text-align: right;

  @media(max-width: 58.69em) {
    text-align: left;
  }
`;

export const ListCompany = styled.ul`
  ${footerList};

  display: flex;
  flex-direction: column;
  gap: 4px;

  @media(max-width: 58.69em) {
    gap: 2px;
  }
`;

export const ListMenu = styled.ul`
  ${footerList};

  display: grid;
  grid-template-columns: 39% 1fr;
  row-gap: 5px;

  @media(max-width: 47.94em) {
    grid-template-columns: 42% 1fr;
    column-gap: 25px;
    row-gap: 4px;
  }
`;

export const LinkFooter = styled.a`
  ${M.Inter400};

  display: inline-flex;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    color: ${props => props.theme.colorPurple};
  }

  @media(max-width: 47.94em) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const WrapperTel = styled.div`
  margin-bottom: 17px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 10px;
  justify-content: flex-end;

  @media(max-width: 58.69em) {
    justify-content: flex-start;
  }

  @media(max-width: 47.94em) {
    margin-bottom: 9px;
    line-height: 20px;
  }
`;

export const Tel = styled.a`
  letter-spacing: 0.06em;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    color: ${props => props.theme.colorPurple};
  }

  @media(max-width: 47.94em) {
    letter-spacing: 0.05em;
  }
`;

export const Address = styled.address`
  ${M.Inter400};

  @media(max-width: 47.94em) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const WrapperCopyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-column: 1/-1;

  margin-top: 32px;
  text-align: right;

  @media(max-width: 58.69em) {
    margin-top: 22px;
    text-align: left;
  }
`;

export const Copyright = styled.span`
  display: block;

  font-size: 12px;
  line-height: 15px;
`;

export const LinkCopyright = styled.a`
  display: block;
  text-decoration: underline;
  align-self: flex-end;

  font-size: 12px;
  line-height: 15px;

  @media(max-width: 58.69em) {
    align-self: flex-start;
  }
`;
