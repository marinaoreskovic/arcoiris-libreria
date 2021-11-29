import "./NavBar.css";

export const NavBar = () => {
  return (
    <header class="header">
      <nav class="navbar">
        <a href="#" class="nav-logo">
          Arcoíris
        </a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Productos
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Nosotros
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Contacto
            </a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
  );
};
