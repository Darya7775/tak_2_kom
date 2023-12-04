import React from "react";
import LogoImg from "/src/assets/svg/logo_welbex.svg";
import Nav from "../../blocks/nav";
import Social from "../../blocks/social";
import * as S from "./styles";

const Header: React.FC = () => {
  const social = {
    telegram: { width: 20, height: 20 },
    viber: { width: 20, height: 19 },
    whatsapp: { width: 20, height: 20 },
  };

  return (
    <S.HeaderStyle>
      <S.ContainerStyle>
        <S.WrapLogoStyle>
          <S.LogoStyle to="/">
            <img src={LogoImg} alt="логотип" width={140} height={24} />
          </S.LogoStyle>
          <S.LogoTextStyle>крупный интегратор CRM <br /> в Росcии и ещё 8 странах</S.LogoTextStyle>
        </S.WrapLogoStyle>
        <Nav />
        <S.TelWrapStyle>
          <S.TelStyle href="tel:+75555555555">+7 555 555-55-55</S.TelStyle>
        </S.TelWrapStyle>
        <Social social={social} />
      </S.ContainerStyle>
    </S.HeaderStyle>
  );
}

export default Header;
