import React from "react";
import styled from "styled-components";
import { AiOutlineBars, AiOutlineSearch } from "react-icons/ai";
import Logo from "../../assets/images/mangaflix.png";
import EstilosGlobais from "../EstilosGlobais/index";

const Header = styled.header`
  background-color: #1f1f1f;
  color: white;
  padding: 10px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 250px; /* Tamanho do logo */
    margin-right: 10px;
    position: relative;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  li {
    margin-right: 20px;
    a {
      text-decoration: none;
      color: white;
      font-family: 'GandhiSansRegular', Arial, sans-serif; /* Usando a fonte personalizada */
      font-size: 16px; /* Tamanho da fonte */
      display: flex;
      align-items: center;
      p {
        margin-left: 5px;
      }
    }
  }
  input[type="search"] {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    padding: 5px;
    font-family: 'GandhiSansRegular', Arial, sans-serif; /* Usando a fonte personalizada */
    font-size: 16px; /* Tamanho da fonte */
  }
  button {
    background-color: #a200ff; /* Cor de destaque do botão */
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'GandhiSansRegular', Arial, sans-serif; /* Usando a fonte personalizada */
    font-size: 16px; /* Tamanho da fonte */
    &:hover {
      background-color: #a200ff; /* Cor de destaque ao passar o mouse */
    }
  }
`;

const BtnLogin = styled.div`
  .btn-login {
    a {
      text-decoration: none;
      button {
        background-color: #a200ff; /* Cor de destaque do botão */
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: 'GandhiSansRegular', Arial, sans-serif; /* Usando a fonte personalizada */
        font-size: 16px; /* Tamanho da fonte */
        &:hover {
          background-color: #a200ff; /* Cor de destaque ao passar o mouse */
        }
      }
    }
  }
`;

const Menu = () => {
  return (
    <>
      <EstilosGlobais /> {/* Inclua os estilos globais aqui */}
      <Header>
        <Container>
          <LogoContainer>
            <img src={Logo} alt="logo-Mangaflix" title="Voltar ao inicio" />
          </LogoContainer>
          <Nav>
            <ul>
              <li>
                <a href="#">
                  <p>Procurar</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <input type="search" id="pesquisa" placeholder="Pesquisar" />
                  <button>
                    <AiOutlineSearch />
                  </button>
                </a>
              </li>
            </ul>
          </Nav>
          <BtnLogin>
            <a href="#">
              <button>LOGIN</button>
            </a>
          </BtnLogin>
        </Container>
      </Header>
    </>
  );
};

export default Menu;
