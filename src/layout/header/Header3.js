/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Fragment, useState } from "react";
import rtl from "../../rtl";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const Header3 = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <Fragment>
      <header className="template-header absolute-header navbar-left sticky-header">
        <div className=" topbar">
          <div className="container head_main">
            <div className=" head_left">
              <div className="">
                <a href="mailto:support@Tilkeinfo.com" className="contact_head">
                  hr@samptechnologies.com
                </a>
              </div>
              <div className="contact_head left-border"></div>
              <div className="">
                <a href="mailto:support@Tilkeinfo.com" className="contact_head">
                  support@samptechnologies.com
                </a>
              </div>
              <div className="contact_head left-border"></div>
              <div className="">
                <a href="tel:+01234567899" className="contact_head">
                  +91 9033906480
                </a>
              </div>
            </div>
            <div className="head_right">
              <ul className="social-links social_icon">
                <li></li>
                <li>
                  <a
                    target="new"
                    href="https://www.facebook.com/samptechnologies/"
                  >
                    <i className="fab fa-facebook-square " />
                  </a>
                </li>
                <li>
                  <a
                    target="new"
                    href="https://mobile.twitter.com/samptechnologie"
                  >
                    <i className="fab fa-twitter-square mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    target="new"
                    href="https://www.instagram.com/samptechnologies/"
                  >
                    <i className="fab fa-instagram " />
                  </a>
                </li>
                <li>
                  <a
                    target="new"
                    href="https://www.linkedin.com/company/samp-technologies/mycompany/"
                  >
                    <i className="fab fa-linkedin mx-2" />
                  </a>
                </li>
                <li>
                  <a
                    target="new"
                    href="https://in.pinterest.com/samptechnologiespvtltd/"
                  >
                    <i className="fab fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-9 head_left">
            <div className="col-lg-4">
              <a href="mailto:support@Tilkeinfo.com" className="contact_head">
                hr@samptechnologies.com
              </a>
            </div>
            <div className="col-lg-4">
              <a href="mailto:support@Tilkeinfo.com" className="contact_head">
                support@samptechnologies.com
              </a>
            </div>
            <div className="col-lg-4">
              <a href="tel:+01234567899" className="contact_head">
               
                +91 9033906480
              </a>
            </div>
          </div>
          
          <div className="col-lg-3 justify-content-end head_right">
          
          </div> */}

          {/* <p>Lets make something great together.</p> */}
        </div>
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="site-logo">
                {/* <Link href={`${rtl()}`}> */}
                <a>
                  <img
                    src="/assets/img/samp_logo.png"
                    className="logo_samp"
                    alt="logo"
                  ></img>
                </a>
                {/* </Link> */}
              </div>
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
      <MobileMenu active={mobileToggle} close={() => setMobileToggle(false)} />
    </Fragment>
  );
};
export default Header3;
