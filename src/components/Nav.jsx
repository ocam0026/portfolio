import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrolled } from "../hooks";
import "./Nav.css";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/simplecontact", label: "Contact" },
];

export default function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav
      className={`nav${scrolled ? " scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <a href="/" className="nav__logo">
        Diana Ocampo
      </a>

      <button
        className="nav__toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="nav-links"
        className={`nav__links${open ? " open" : ""}`}
        role="list"
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            role="listitem"
            className={
              pathname === href || pathname.startsWith(href + "/")
                ? "active"
                : ""
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
