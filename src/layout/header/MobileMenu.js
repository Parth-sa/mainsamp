/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Blog, Contact, Home, Pages, Services, Works } from "./menu";
import rtl from "../../rtl";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const MobileMenu = ({ active, close }) => {
  const [location, setLocation] = useState("");

  const [activeMenu, setActiveMenu] = useState("");
  const router = useRouter();
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeIcon = (value) => (value === activeMenu ? "submenu-opened" : ""),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <div
      className={`slide-panel mobile-slide-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="panel-logo">
          <img
            src="/assets/img/samp_logo.png"
            className="logo_samp"
            alt="img"
          />
        </div>
        <nav className="mobile-menu">
          <ul className="primary-menu">
            <li>
              <a
                href={`${rtl()}`}
                className={`${
                  router.pathname.split("/")[1] === "" ? "active-link-nav" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={`${rtl()}about`}
                className={`${
                  router.pathname.includes("about") ? "active-link-nav" : ""
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${
                  router.pathname.includes("web-app-development") ||
                  router.pathname.includes("mobile-app-development") ||
                  router.pathname.includes("blockchain-nft") ||
                  router.pathname.includes("game-development") ||
                  router.pathname.includes("hire-dedicated-developers")
                    ? "active-link-nav"
                    : ""
                }`}
              >
                Services
                <span
                  className={`dd-trigger ${activeIcon("Services")}`}
                  onClick={() => activeMenuSet("Services")}
                >
                  <i className="fas fa-angle-down" />
                </span>
              </a>
              <ul className="submenu" style={activeLi("Services")}>
                <Services />
              </ul>
            </li>
            <li>
              <a
                href={`${rtl()}portfolio`}
                className={`${
                  router.pathname.includes("portfolio") ? "active-link-nav" : ""
                }`}
              >
                Works
              </a>
            </li>
            <li>
              <a
                href={`${rtl()}blog-standard`}
                className={`${
                  router.pathname.includes("blog") ? "active-link-nav" : ""
                }`}
              >
                Blog
              </a>
            </li>
            <li></li>
            <li>
              <a
                href={`${rtl()}career`}
                className={`${
                  router.pathname.includes("career") ? "active-link-nav" : ""
                }`}
              >
                Career
              </a>
            </li>
            <li>
              <Contact />
            </li>
          </ul>
        </nav>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default MobileMenu;
