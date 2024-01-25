/* eslint-disable @next/next/no-img-element */


import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../../rtl";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
// import samp_logo from "../../../public/assets/img/icon/SAMP.svg"
const Header = ({ dark }) => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header className="template-header absolute-header sticky-header">
        <div className="container-fluid container-1550">
          <div className="header-inner">
            <div className="header-left">
              <div className="site-logo">
                <Link href={`${rtl()}`}>
                  <a>
                    <img
                      src="/assets/img/samp_logo.png"
                      className="logo_samp"
                      alt="logo"
                    ></img>
                  </a>
                </Link>
              </div>
            </div>
            <div className="header-center">
              <Nav />
            </div>
            <div className="header-right">
              <ul className="header-extra">
                <li className="header-btns d-none d-md-block">
                  <a href="contact" className="template-btn">
                    Let’s Talk
                    <i className="far fa-long-arrow-right" />
                  </a>
                </li>
                <li className="d-none d-xl-block">
                  <a
                    href="#"
                    className="off-canvas-btn"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <span />
                    <span />
                    <span />
                  </a>
                </li>
                <li className="d-xl-none">
                  <div
                    className="navbar-toggler"
                    onClick={() => setMobileToggle(true)}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Sidebar active={sidebarToggle} close={() => setSidebarToggle(false)} />
      </header>
      <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} />
    </Fragment>
  );
};
export default Header;
