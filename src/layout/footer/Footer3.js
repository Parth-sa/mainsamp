/* eslint-disable @next/next/no-img-element */

import ContactUs from "./footerLinks/ContactUs";
import CopyRight from "./footerLinks/CopyRight";
import QuickLinks from "./footerLinks/QuickLinks";
import Services from "./footerLinks/Services";

const Footer3 = () => {
  return (
    <footer className="template-footer">
      <div className="container footer_main">
        <div className="footer-top-area">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo text-lg-center text-center m-lg-0 mb-50">
                <img src="/assets/img/logo-2.png" alt="Qolle" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="contact-info">
                <li>
                  <div className="icon">
                    <img src="/assets/img/icon/alarm.png" alt="Alarm" />
                  </div>
                  <div className="content">
                    <span className="title">Free Consultations?</span>
                    <a href="#">hotline@gmail.com</a>
                    <br />
                    <a href="#" className="number">
                      +012 (345) 678
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img src="/assets/img/icon/map.png" alt="Alarm" />
                  </div>
                  <div className="content">
                    <span className="title">Office Location</span>
                    <a href="#">55 Main Street, 2nd Block New York City</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-widgets-area">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ContactUs icons />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <Services />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <QuickLinks />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <ContactUs noIcon btnClass={"bg-fourth"} />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-box m-0">
        <CopyRight />
      </div>
    </footer>
  );
};
export default Footer3;
