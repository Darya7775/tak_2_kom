import React from "react";
import { useMactchMedia } from "../../../hooks/use-match-media";
import * as S from "./style";

const MainBlock: React.FC = () => {
  const {isMobile} = useMactchMedia() as {isMobile: boolean};

  return(
    <S.MainStyle>
      <S.MainContainer>
        <S.Wrapper>
          <h2>Зарабатывайте <br/> больше <br/></h2>
          <span>с WELBEX</span>
          <p>Развиваем и контролируем <br/> продажи за вас</p>
        </S.Wrapper>
        <S.WrapperRight>
          <p>Вместе с
            <span> бесплатной <br/> консультацией </span>
            мы дарим:
          </p>
          {isMobile ? (
            <S.List>
              <S.Item>
                <h3>Skype аудит</h3>
              </S.Item>
              <S.Item>
                <h3>30 виджетов</h3>
              </S.Item>
              <S.Item>
                <h3>Dashboard</h3>
              </S.Item>
              <S.Item>
                <h3>Месяц аmoCRM</h3>
              </S.Item>
            </S.List>
          ) : (
            <S.List>
              <S.Item>
                <h3>Виджеты</h3>
                <p>30 готовых <br/> решений</p>
              </S.Item>
              <S.Item>
                <h3>Dashboard</h3>
                <p>с показателями <br/> вашего бизнеса</p>
              </S.Item>
              <S.Item>
                <h3>Skype Аудит</h3>
                <p>отдела продаж <br/> и CRM системы</p>
              </S.Item>
              <S.Item>
                <h3>35 дней</h3>
                <p>использования <br/> CRM</p>
              </S.Item>
            </S.List>
          )}
          <S.Button type="button">Получить консультацию</S.Button>
        </S.WrapperRight>
      </S.MainContainer>
    </S.MainStyle>
  );
}

export default MainBlock;
