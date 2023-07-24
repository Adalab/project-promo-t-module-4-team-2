import { Link } from "react-router-dom";
import Logo from "../../images/90s.jpg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="text header__link">
        <img src={Logo} className="img__logo" alt="Logo" />
      </Link>
    </header>
  );
};
export default Header;
