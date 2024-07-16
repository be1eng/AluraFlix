import styled from "styled-components";
import { Link } from "react-router-dom"
import logo from "./logo.png"
import CabeceraLink from "../CabeceraLink";
import { Header, LogoContainer, StyledLink, ButtonHome, ButtonNuevoVideo, Img } from './HeaderStyles';



function Cabecera() {
    return (
      <Header>
        <StyledLink to="/">
          <LogoContainer>
            <Img src={logo} alt="AluraFlix" />
          </LogoContainer>
        </StyledLink>
        <nav>
          <CabeceraLink url="./">
            <ButtonHome>
              HOME
            </ButtonHome>
          </CabeceraLink>
          <CabeceraLink url="./NuevoVideo">
            <ButtonNuevoVideo>
              NUEVO VIDEO
            </ButtonNuevoVideo>
          </CabeceraLink>
        </nav>
      </Header>
    );
  }
  
  export default Cabecera;
