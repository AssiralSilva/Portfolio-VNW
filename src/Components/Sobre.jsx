// import React from 'react';
import * as S from './Style.jsx';
import Vnw from './ImagensPortfolio/vnw.png';
import Css from './ImagensPortfolio/css.png';
import Js from './ImagensPortfolio/js.png';
import Html from './ImagensPortfolio/html.png';

function Sobre() {
  return (
    <S.MainSobre>
      <S.SectionDoSobre>
        <h2>ESTUDOS</h2>
        <S.Card>
        <S.DivCard>
            <h3>Técnica em Informática</h3>
            <h3>Jul/2015 - Dez/2016</h3>
          </S.DivCard>

          <S.DivCard>
            <h3>Desenvolvimento front-end</h3>
            <h3>Jul/2023 - Mai/2024</h3>
            <img src={Vnw} alt="Logo do vnw" />
          </S.DivCard>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionDoSobre>
        <h2>HABILIDADES</h2>
        <S.Card>
          <S.DivCard2>
            <div>
              <h3>CSS</h3>
              <img src={Css} alt="logo css" />
            </div>

            <div>
              <h3>Js</h3>
              <img src={Js} alt="logo javascript" />
            </div>

            <div>
              <h3>HTML</h3>
              <img src={Html} alt="logo html5" />
            </div>
          </S.DivCard2>
        </S.Card>
      </S.SectionDoSobre>

      <S.SectionDoSobre>
        <h2>PROFISSIONAL</h2>
        <S.Card>
          <S.DivCard>
            <h3>Técnica em Informática para Internet</h3>
            <h3>Desenvolvedora Front-End</h3>
            <h3>Cantora</h3>
          </S.DivCard>
        </S.Card>
      </S.SectionDoSobre>
    </S.MainSobre>
  );
}

export default Sobre;
