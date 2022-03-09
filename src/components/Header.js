import styled from "styled-components";
// import { typeScale } from "../utils";
import { PrimaryButton, SwitchButton } from "./Buttons";

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.backgroundInvertedColor};
  padding: 1rem;
  color: red;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;

        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
          color: ${(props) => props.theme.neutralCien};
        }
      }
    }
    .navbar-header {
      a {
        color: ${(props) => props.theme.neutralCien};
        display: block;
        padding: 6px 12px;
        text-decoration: none;
        font-weight: bold;
      }
    }

    .links {
      ul {
        display: flex;
        column-gap: 1.5rem;
      }
    }

    .buttons {
      ul {
        display: flex;
        align-items: center;
        justify-conetent: center;
        li {
          padding: 0.2rem;
          margin-left: 1rem;
        }
      }
    }
  }
`;

function Header({ setUseDarkTheme, useDarkTheme }) {
  return (
    <HeaderWrapper>
      <nav className="navbar">
        <div className="navbar-header">
          <a href="/" className="logo-name">
            <div className="logo"></div>
            Typing App
          </a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/lessons">Lecciones</a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <SwitchButton
                color={(props) => props.theme.primaryHoverColor}
                setUseDarkTheme={setUseDarkTheme}
                useDarkTheme={useDarkTheme}
              />
            </li>

            <li>
              <PrimaryButton>Iniciar Sesion</PrimaryButton>
            </li>
            <li>
              <PrimaryButton>Registrarse</PrimaryButton>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
