import React from "react";

import Telegram from "/src/assets/svg/telegram.svg";
import Viber from "/src/assets/svg/viber.svg";
import Whatsapp from "/src/assets/svg/whatsapp.svg";

import { SocialStyle, LinkSocial } from "./style";

function Social({ social }) {
  const { telegram, viber, whatsapp } = social;

  return(
    <SocialStyle>
      <li>
        <LinkSocial href="#">
          <img src={Telegram} alt="telegram" width={telegram.width} height={telegram.height} />
        </LinkSocial>
      </li>
      <li>
        <LinkSocial href="#">
          <img src={Viber} alt="viber" width={viber.width} height={viber.height} />
        </LinkSocial>
      </li>
      <li>
        <LinkSocial href="#">
          <img src={Whatsapp} alt="whatsapp" width={whatsapp.width} height={whatsapp.height} />
        </LinkSocial>
      </li>
    </SocialStyle>
  );
}

export default Social;
