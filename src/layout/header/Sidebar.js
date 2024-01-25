/* eslint-disable @next/next/no-img-element */

const Sidebar = ({ active, close }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${active ? "show-panel" : ""}`}
    >
      <div className="panel-overlay" onClick={() => close()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          
          <img src="/assets/img/samp_logo.png" className="logo_samp" alt="logo"></img>
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            Samp Technologies have leveraged at affordable price across the
            globe and also has 90% retention of clients. Join hands with the
            best software Development Company in Surat.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt add_icon" />
              639-640, 6th Floor, <br />
              Laxmi Enclave 2,
              <br /> Near Gajera School,
              <br /> Katargam, Surat, <br />
              Gujarat, 395004 <br />
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:info@Qolle.com">hr@samptechnologies.com</a>
              <a href="mailto:support@Qolle.com">
                support@samptechnologies.com
              </a>
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">+91 9033906480</a>
              <br />
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => close()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
