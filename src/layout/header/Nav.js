import Link from "next/link";
import rtl from "../../rtl";
import { Contact, Services } from "./menu";
import { NavLink } from "react-bootstrap";
import { useEffect, useState } from "react";

const Nav = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <nav className="nav-menu d-none d-xl-block">
      <ul className="primary-menu">
        <li>
          <Link href="/" className="nav_link">
            <a
              className={`${
                location.split("/")[1] === "" ? "active-link-nav" : ""
              }`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <a
            href={`${rtl()}about`}
            className={`${location.includes("about") ? "active-link-nav" : ""}`}
          >
            About Us
            <span className="dd-trigger"></span>
          </a>
        </li>
        <li>
          <a
            className={`${
              location.includes("web-app-development") ||
              location.includes("mobile-app-development") ||
              location.includes("blockchain-nft") ||
              location.includes("game-development") ||
              location.includes("hire-dedicated-developers")
                ? "active-link-nav"
                : ""
            }`}
          >
            Services
            <span className="dd-trigger">
              <i className="fas fa-angle-down" />
            </span>
          </a>
          <ul className="submenu">
            <Services />
          </ul>
        </li>
        <li>
          <Link href="/portfolio">
            <a
              className={`${
                location.includes("portfolio") ? "active-link-nav" : ""
              }`}
            >
              Works
              <span className="dd-trigger"></span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog-standard">
            <a
              className={`${
                location.includes("blog") ? "active-link-nav" : ""
              }`}
            >
              Blog
              <span className="dd-trigger"></span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/career">
            <a
              className={`${
                location.includes("career") ? "active-link-nav" : ""
              }`}
            >
              Career
              <span className="dd-trigger"></span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
