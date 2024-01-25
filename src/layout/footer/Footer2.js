import ContactUs from "./footerLinks/ContactUs";
import CopyRight from "./footerLinks/CopyRight";
import QuickLinks from "./footerLinks/QuickLinks";
import SampIntro from "./footerLinks/SampIntro";
import Services from "./footerLinks/Services";
const Footer2 = () => {
  return (
    <footer className="template-footer">
      <div className="container footer_main">
        <div className="footer-widgets-area">
          <div className="row footer_part">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <SampIntro logo={"samp_logo"} />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <Services />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <QuickLinks />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-box">
        <CopyRight />
      </div>
    </footer>
  );
};
export default Footer2;
