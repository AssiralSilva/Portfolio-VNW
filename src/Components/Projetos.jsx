import Desafio_1 from './ImagensPortfolio/Desafio 1.mp4';
import Desafio_2 from './ImagensPortfolio/Desafio 2.png';
import Desafio_3 from './ImagensPortfolio/Desafio 3.png';
import Desafio_4 from './ImagensPortfolio/Desafio 4.mp4';
import Desafio_5 from './ImagensPortfolio/Desafio 5.png';
import Desafio_6 from './ImagensPortfolio/Desafio 6.png';
import Desafio_7 from './ImagensPortfolio/Desafio 7.jpg';
import Desafio_8 from './ImagensPortfolio/Desafio 8.jpg';
import Desafio_9 from './ImagensPortfolio/Desafio 9.png';
import * as S from './Style.jsx';

function Projetos() {
  return (
    <S.SectionProjetos>
      <S.Projetinhos>
        <video src= {Desafio_1} controls/>
        <h2> Desafio 1 </h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_2} alt="Desafio 2" />
        <h2>Desafio 2</h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_3} alt="Desafio 3" />
        <h2>Desafio 3</h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <video src= {Desafio_4} controls/>
        <h2> Desafio 4 </h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_5} alt="Desafio 5" />
        <h2>Desafio 5</h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_6} alt="Desafio 6" />
        <h2>Desafio 6</h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_7} alt="Desafio 7" />
        <h2>Desafio 7</h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_8} alt="Desafio 8" />
        <h2>Desafio 8</h2>
      </S.Projetinhos>

      <S.Projetinhos>
        <img src={Desafio_9} alt="Desafio 9" />
        <h2>Desafio 9</h2>
      </S.Projetinhos>
    </S.SectionProjetos>
  );
}

export default Projetos;
