import "../../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; The 90's developers 2023 
        </p>
        <a
          href="https://adalab.es/"
          target="_blank"
          rel="noreferrer"
          className="footer__text--adalab"
        >
          Adalab - Promo Trótula
        </a>
      
    </footer>
  );
}

export default Footer;
