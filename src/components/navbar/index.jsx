import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { links } from "../../assets/js/links";
import "./navbar-style.scss";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        {links.map((i, index) => (
          <li key={index}>
            <Link to={i.path}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
