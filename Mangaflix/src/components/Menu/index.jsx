import React from "react";
import styled from "styled-components";

// Estilos para o menu nav
const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;

      &:hover {
        color: #007bff;
      }
    }

    ul {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 10px;

      li {
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
        font-weight: normal;

        &:last-child {
          margin-bottom: 0;
        }

        a {
          color: #333;

          &:hover {
            color: #007bff;
          }
        }
      }
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }
`;

const Menu = () => {
  return (
    <StyledNav>
      <ul className="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Mangas</a>
          <ul>
            <li>
              <a href="#">Lançamento</a>
            </li>
            <li>
              <a href="#">Famosos</a>
            </li>
            <li>
              <a href="#">Legendados</a>
            </li>
            <li>
              <a href="#">Dublados</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Categorias</a>
          <ul>
            <li>
              <a href="#">Ação</a>
            </li>
            <li>
              <a href="#">Suspense</a>
            </li>
            <li>
              <a href="#">Aventura</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;
