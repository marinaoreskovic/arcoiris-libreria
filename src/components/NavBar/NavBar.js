import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header class="header">
      <nav class="navbar">
        <Link to="/category/inicio">Arcoíris</Link>
        <a href="#" class="nav-logo"></a>
        <ul class="nav-menu">
          <li class="nav-item">
            <Link to="/category/nostros">Nosotros</Link>
          </li>
          <li class="nav-item">
            <Link to="/">Productos</Link>
          </li>
          <li class="nav-item">
            <Link to="/category/contacto">Contacto</Link>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </header>
  );
};
