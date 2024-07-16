// InicioPageStyles.js

import styled from 'styled-components';

// Contenedor principal de la página de inicio
export const InicioContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: var(--dark-grey);
    width:100%;
  @media (max-width: 1200px) {
    box-sizing: border-box;
    width: auto;
    align-items: center;
    padding: 10px;
  }
`;

// Contenedor de cada categoría
export const Categoria = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
  @media (max-width: 1200px) {
    width: auto;
    margin-right: 10px;
  }
`;

// Nombre de cada categoría
export const Nombre = styled.h2`
  margin: 10px;
  border: none;
  border-radius: 10px;
  width: 432px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 800;
  line-height: 37.5px;
  color: var(--white);

  @media (max-width: 1200px) {
    width: 270px;
    height: auto;
    margin-left: 20px;
  }
`;

// Contenedor de los videos dentro de una categoría
export const Video = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width:100%;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

