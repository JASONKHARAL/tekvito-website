
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link className="logo" to="/">
        tekvito<span>·</span>
      </Link>

      <p>Technology. Talent. Possibility.</p>

      <span>
        © {new Date().getFullYear()} Tekvito LLC. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
