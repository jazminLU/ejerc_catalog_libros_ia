import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/acerca-de">Acerca de</Link>
      </nav>
    </>
  );
};

export default Menu;
