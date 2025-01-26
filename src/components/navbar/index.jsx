import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { links } from "../../assets/js/links";
import "./navbar-style.scss";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
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
