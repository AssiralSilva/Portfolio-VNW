import Foto from './ImagensPortfolio/foto.jpg';
import * as S from './Style.jsx';

function Inicio() {
  return (
    <S.ContainerInicio>
      <S.Perfil src={Foto} alt="" />

      <div>
        <h2>Olá, me chamo Larissa</h2>
        <h2>Venham navegar pelo o meu portólio.</h2>
      </div>
    </S.ContainerInicio>
  );
}

export default Inicio;
