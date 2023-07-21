import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="text header__link">
        <img className="img__logo" src="" alt="Logo" />
      </Link>
    </header>
  );
};
export default Header;
