const ContactUs = ({ noIcon, btnClass }) => {
  return (
    <div className="widget newsletters-widget pl-xl-4 ">
      <h4 className="widget-title">Contact us</h4>
      <div className="contact-content">
        <div className="mb-2">
          416 4th floor, Avloan business hub, 
          <br /> Near ambatalavadi, Katargam, <br />
          Surat, Gujarat, 395004 <br />
        </div>

        <div className="phone-number mb-2">
          <a href="tel:+919737235151">+91 9737235151</a>
        </div>
        <a href="mailto:support@Tilkeinfo.com">hr@samptechnologies.com</a>
        <a href="mailto:support@Tilkeinfo.com">support@samptechnologies.com</a>
      </div>
      {!noIcon && (
        <ul className="social-links">
          <li>
            <span>Follow</span>
          </li>
          <li>
            <a target="new" href="https://www.facebook.com/samptechnologies/">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a target="new" href="https://mobile.twitter.com/samptechnologie">
              <i className="fab fa-twitter-square" />
            </a>
          </li>
          <li>
            <a target="new" href="https://www.instagram.com/samptechnologies/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              target="new"
              href="https://www.linkedin.com/company/samp-technologies/mycompany/"
            >
              <i className="fab fa-linkedin" />
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
      )}
    </div>
  );
};
export default ContactUs;
