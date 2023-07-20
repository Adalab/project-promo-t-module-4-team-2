import { Link } from "react-router-dom";
import cover from "../../../src/images/vibes-logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="text header__link">
        <img className="img__logo" src={cover} alt="Logo" />
      </Link>
    </header>
  );
};
export default Header;
