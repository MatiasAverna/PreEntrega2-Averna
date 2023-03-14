import CardWidget from "./CardWidget";

function Navbar() {
    return (
      <nav>
        <ul>
         <h1>TIENDA RFK</h1>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Remeras">Remeras</a>
          </li>
          <li>
            <a href="/Pantalones">Pantalones</a>
          </li>
          <li>
            <a href="/Zapatillas">Zapatillas</a>
          </li>
        </ul>
        < CardWidget/>
      </nav>
    );
  }
  export default Navbar;