import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="text header__link">
        Proyectos Molones
      </Link>
    </header>
  );
};
export default Header;
