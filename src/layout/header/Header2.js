/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../../rtl";
import Nav from "./Nav";

const Header2 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="template-header absolute-header navbar-left header-gradient-bg sticky-header">
        <div className="container-fluid container-1450">
          <div className="header-inner header_blog">
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
              <Nav />
            </div>
            <div className="header-right">
              <ul className="header-extra">
                <li className="header-btns d-none d-md-block">
                  <a href="#" className="template-btn bordered-btn">
                    Sign In
                    <i className="far fa-long-arrow-right" />
                  </a>
                  <a href="contact" className="template-btn">
                    Let’s Talk
                    <i className="far fa-long-arrow-right" />
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
      </header>
      {/* <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} /> */}
    </Fragment>
  );
};
export default Header2;
