import React from "react";

import { NavStyle, NavListStyle, LinkStyle } from "./style";

function Nav() {
  return(
    <NavStyle>
      <NavListStyle>
        <li>
          <LinkStyle href="#">Услуги</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Виджеты</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Интеграции</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Кейсы</LinkStyle>
        </li>
        <li>
          <LinkStyle href="#">Сертификаты</LinkStyle>
        </li>
      </NavListStyle>
    </NavStyle>
  );
}

export default Nav;
