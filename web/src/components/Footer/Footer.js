import "../../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__text">
        &copy; The 90's developers 2023 ||{" "}
        <a
          href="https://https://adalab.es/"
          target="_blank"
          rel="noreferrer"
          className="footer__text--adalab"
        >
          Adalab
        </a>
      </small>
    </footer>
  );
}

export default Footer;
