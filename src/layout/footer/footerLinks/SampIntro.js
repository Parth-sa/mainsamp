/* eslint-disable @next/next/no-img-element */


const SampIntro = ({ logo, icons }) => {
  return (
    <div className="widget contact-widget">
      <div className="contact-content">
        {!icons && (
          
          <img src="/assets/img/samp_logo.png" className="logo_footer" alt="logo"></img>
        )}
      </div>
      <p className="text-justify">
        Having specialists who develop innovative solutions to deliver user
        friendly and perfectly organized products for every project. Our Website
        and Mobile App Development service includes web based, Frontend,
        Backend, API Integration & Testing. We put highly qualified developers
        in our company to offer a seamless working experience. Join hands with
        the Best Web Development and Mobile App Development Company in Surat.
      </p>
    </div>
  );
};
export default SampIntro;
