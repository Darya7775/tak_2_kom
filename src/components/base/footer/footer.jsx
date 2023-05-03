import React from "react";
import { useMactchMedia } from "/src/hooks/use_match_media";

import Social from "/src/components/blocks/social/social";
import * as S from "./style";

function Footer() {
  const {isMobile} = useMactchMedia();

  let social;

  if(isMobile) {
    social = {
      telegram: {width: 24, height: 24},
      viber: {width: 24, height: 24},
      whatsapp: {width: 24, height: 24},
    };
  } else {
    social = {
      telegram: {width: 20, height: 20},
      viber: {width: 20, height: 20},
      whatsapp: {width: 20, height: 20},
    };
  }


  return(
    <S.FooterStyle>
      <S.ContainerStyle>
        <S.Wrapper>
          <h3>О компании</h3>
          <S.ListCompany>
            <li>
              <S.LinkFooter href="#">Партнёрская программа</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Вакансии</S.LinkFooter>
            </li>
          </S.ListCompany>
        </S.Wrapper>
        <S.Wrapper>
          <h3>Меню</h3>
          <S.ListMenu>
            <li>
              <S.LinkFooter href="#">Расчёт стоимости</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Благодарственные письма</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Услуги</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Кейсы</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Виджеты</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Сертификаты</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Интеграции</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Блог на Youtube</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Наши клиенты</S.LinkFooter>
            </li>
            <li>
              <S.LinkFooter href="#">Вопрос / Ответ</S.LinkFooter>
            </li>
          </S.ListMenu>
        </S.Wrapper>
        <S.WrapperContacts>
          <h3>Контакты</h3>
          <S.WrapperTel>
            <S.Tel href="tel:+75555555555">+7 555 555-55-55</S.Tel>
          </S.WrapperTel>
          <Social social={social} />
          <S.Address>Москва, Путевой проезд 3с1, к 902</S.Address>
        </S.WrapperContacts>
        <S.WrapperCopyright>
          <S.Copyright>©WELBEX 2022. Все права защищены.</S.Copyright>
          <S.LinkCopyright href="#">Политика конфиденциальности</S.LinkCopyright>
        </S.WrapperCopyright>
      </S.ContainerStyle>
    </S.FooterStyle>
  );
}

export default Footer;
