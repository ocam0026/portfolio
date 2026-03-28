import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__copy">
        © {new Date().getFullYear()} Diana Ocampo — UI/UX Designer
      </p>
      <a href="#top" className="footer__back" aria-label="Back to top of page">
        Back to top ↑
      </a>
    </footer>
  );
}
