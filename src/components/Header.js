import "../styles/Header.scss";

function Header() {
  return (
    <div id="nav">
      <nav className="navbar">
        <div className="navbar-header">
          <a href="/" className="logo-name">
            <div className="logo"></div>
            Typing App
          </a>
        </div>
        <div class="links">
          <ul>
            <li>
              <a href="/">Comencemos</a>
            </li>
            <li>
              <a href="/">Lecciones</a>
            </li>
            <li>
              <a href="/">Acerca de</a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <a className="button-login" href="/">
                Iniciar Sesion
              </a>
            </li>
            <li>
              <a className="button-sigup" href="/">
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
