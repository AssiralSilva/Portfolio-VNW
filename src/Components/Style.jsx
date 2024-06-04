import styled from 'styled-components';

//----Estilização da navegação

export const Nav = styled.nav`
border: solid violet;
margin-top: 0.1rem;
`;

export const Lista = styled.ul`
width: 100%;
display: flex;
justify-content: space-around;
list-style: none;
height: 20vh;
align-items: center;
@media (min-width: 320px) and (max-width: 768px){
    display: flex; 
    flex-direction: column;
    height: 40vh;
    border: solid red;
}

a{
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: violet;
}

`;

//Estilização Inicio

export const Perfil = styled.img`
    width: 20vw;
    height: 40vh;
    border-radius: 50%;
`;

export const ContainerInicio = styled.main`
display: flex;
justify-content:space-evenly;
align-items: center;
padding-top: 3rem;

@media (min-width: 320px) and (max-width: 768px){
  display: flex;
  flex-direction: column;

  img{
    width: 50vw;
  }
}
`;

//------------ teste na navegação

export const Header = styled.header`
/* background-image: url("https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg");
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 80vh; */
`;

//Estilização Sobre
export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
`;

export const SectionDoSobre = styled.section`
height: 50vh;
width: 25vw;
margin-top: 3rem;
border: solid  violet 5px;
border-radius: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    font-size: 1.5rem;
}
h3{
    font-size: 1.3rem;
    color: violet;
}

`;

export const Card = styled.section`
display: flex;
flex-direction: column;
align-items: center;
height: 40vh;
width: 20vw;
`;

export const DivCard = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 20vh; 
`;

export const DivCard2 = styled.div`
width: 70%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
height: 70vh;
img{
    height: 5vh;
}
div{
    display: flex;
    align-items: center;
}
`;

//--ESTILIZAÇÃO PROJETOS

export const SectionProjetos = styled.section`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
text-align: center;
height: 60vh;
margin-top:50px;
`;

export const Projetinhos = styled.div`
width: 40vw;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    font-size: 1.2rem;
}
h3{
    width: 30vw;
    font-size: 1rem;
}
`;
