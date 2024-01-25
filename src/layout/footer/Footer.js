import ContactUs from "./footerLinks/ContactUs";
import CopyRight from "./footerLinks/CopyRight";
import QuickLinks from "./footerLinks/QuickLinks";
import SampIntro from "./footerLinks/SampIntro";
import Services from "./footerLinks/Services";

const Footer = () => {
  return (
    <footer className="template-footer bg-color-secondary text-white-version">
      <div className="footer-cta-area">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <h2 className="cta-title">Are You Ready To Work Together ?</h2>
            </div>
            <div className="col-auto">
              <a href="contact" className="template-btn">
                Let’s Talk With Us <i className="fas fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer_main">
        <div className="footer-widgets-area">
          <div className="row footer_part">
            <div className="col-lg-4 col-md-6">
              <SampIntro />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <Services />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <QuickLinks />
            </div>
            <div className="col-lg-3 col-md-6">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <CopyRight />
      </div>
    </footer>
  );
};
export default Footer;
