/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Counter from "../components/Counter";
import Slider from "react-slick";
import { lifeSampDown, lifeSampUp } from "../sliderProps";

const AboutPage = () => {
  return (
    <Fragment>
      {/* <PageTitle pageName={"About us"} /> */}
      <section className="section-gap overflow-hidden page_top">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="feature-text-block content-r-spacing">
                <div className="section-heading mb-50">
                  <h2 className="title">
                    Why SAMP stands as the best web development company?
                  </h2>
                </div>
                <div className="feature-lists">
                  <div className="simple-icon-box icon-left wow fadeInUp mb-30">
                    <div className="content">
                      <p>
                        With more than half of the population of this world
                        having access to the internet, businesses must have an
                        online presence as it is essential for today’s time.
                        Samp Technologies LLP is one of the leading digital
                        presence IT solutions providing company in Surat. We
                        strive to provide the best IT solutions to our valuable
                        clients. We take pride in being the best web development
                        and mobile app development solution providing company in
                        Surat. Choose our professional web developer and mobile
                        app developer to take your business to the next level at
                        very affordable pricing & build your online presence
                        with us with high ROI.
                      </p>
                    </div>
                  </div>
                 
                </div>
                <a href="contact" className="template-btn mt-10">
                  Start a Project <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="feature-img text-lg-right text-center content-mt-md-50">
                <img
                  src="/assets/img/illustrations/feature-illustration.png"
                  alt="Image"
                  className="animate-float-bob-y"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}
      <div className="service-with-team">
        {/*====== Service Section Start ======*/}
        <section className="service-section section-gap Choose_us">
          <div className="container">
            <div className="section-heading heading-white text-center mb-30">
              <div>
                <h2 className="title mt-5">Why Choose Us</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 wow fadeInUp ">
                <div className="iconic-box icon-left bg-white mt-30 default-box-shadow">
                 
                  <div className="content">
                    <div className="icon mb-2 choose_icon">
                      <img src="/assets/img/icon/Web.png" alt="web"></img>

                    </div>
                    <h5 className="title">
                      
                      <p>Fully Customized Website</p>
                    </h5>
                    <p>
                      {" "}
                      We are taking responsibility to build your website and App
                      from the scratch by using efficient technologies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp ">
                <div className="iconic-box icon-left bg-white mt-30 default-box-shadow">
                  <div className="content">
                    <div className="icon mb-2 choose_icon">
                      <img src="/assets/img/icon/All-service.png" alt="service"></img>

                    </div>
                    <h5 className="title">
                      <p>All Services At One Place</p>
                    </h5>
                    <p>
                      We are one-stop solution for your business and offer you
                      end-to-end Web & Mobile App development services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp ">
                <div className="iconic-box icon-left bg-white mt-30 default-box-shadow">
                  
                  <div className="content">
                    <div className="icon mb-2 choose_icon">

                      <img src="/assets/img/icon/Skilled Team.png" alt="team"></img>

                    </div>
                    <h5 className="title">
                      
                      <p>Highly Skilled In-Line Team</p>
                    </h5>
                    <p>
                      {" "}
                      Our expert team have hands-on experience which they use
                      for creativity in web & mobile app development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp ">
                <div className="iconic-box icon-left bg-white mt-30 default-box-shadow">
                  
                  <div className="content">
                    <div className="icon mb-2 choose_icon">
                      <img src="/assets/img/icon/project-Delivery.png" alt="project"></img>

                    </div>
                    <h5 className="title">
                      
                      <p>On-Time Project Delivery</p>
                    </h5>
                    <p>
                      We take responsibility of the projects to executed it on
                      time with high quality and preventing delivery delays.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp ">
                <div className="iconic-box icon-left bg-white mt-30 default-box-shadow">
                  
                  <div className="content">
                    <div className="icon mb-2 choose_icon">
                      <img src="/assets/img/icon/brain.png" alt="brain"></img>

                    </div>
                    <h5 className="title">
                     
                      <p>Creative BrainStorming</p>
                    </h5>
                    <p>
                      Brainstorming is a mandated and essential and To curate it
                      viable, these are conducted across departments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp ">
                <div className="iconic-box icon-left bg-white mt-30 default-box-shadow">
                 
                  <div className="content">
                    <div className="icon mb-2 choose_icon">
                      <img src="/assets/img/icon/alliance.png" alt="alliance"></img>

                    </div>
                    <h5 className="title">
                      
                      <p>Long-Term Team Alliance</p>
                    </h5>
                    <p>
                      We are a growing repository of services and expertise-we
                      work as your outsourced team, to grow your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Service Section End ======*/}
        {/*====== Team Section Start ======*/}
        <section className="team-section section-gap-bottom">
          <div className="about">
            <div className="box1_about">

              <h2 className="name mb-3 text-center">Vission</h2>
              <p className="text-left">
                Our Vision is to make Samp Technologies India’s most valuable
                corporation through ultimate performance and uniqueness in every
                single project we do! We work hard to offer our clients
                top-notch web and Mobile app development solutions. We provide a
                cost-effective solution. Our vision is to bring our clients into
                the modern era through innovative technologies. We make you
                out-stand your competition in web and mobile app development
                services.
              </p>
            </div>
            <div className="box1_about">
              <h2 className="name mb-3 text-center">Mission</h2>
              <p className="text-left">
                Our mission is to provide business focused on innovative
                solutions in the area of Website Development & mobile app
                development services around the globe to become the most ethical
                company with top-notch quality and services. Samp Technologies
                Mission is to enhance the wealth-generating capability of the
                business in a globalizing environment by exhibiting our
                efficiency and adopting the innovative “more-than-enough”
                methodology in our work.
              </p>
            </div>
          </div>
        </section>
        {/*====== Team Section End ======*/}
        <div className="animate-icon d-none d-lg-block">
          <img
            src="/assets/img/shape/gradient-pipe.png"
            alt="icon"
            className="animate-rotate-me"
          />
        </div>
      </div>
      {/*====== Counter Section Start ======*/}
      <section className="counter-section counter-boxed">
        <div className="container_div bg-color-primary section-wave-bg">
          <div className="counter-items row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-sm-5">
              <div className="counter-item counter-white mt-40">
                <div className="counter-wrap">
                  <Counter end={319} />
                  <span className="suffix">+</span>
                </div>
                <h6 className="title">Total Project</h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-5">
              <div className="counter-item counter-white mt-40">
                <div className="counter-wrap">
                  <Counter end={250} />
                  <span className="suffix">+</span>
                </div>
                <h6 className="title">Project Complete</h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-5">
              <div className="counter-item counter-white mt-40">
                <div className="counter-wrap">
                  <Counter end={73} />
                  <span className="suffix">+</span>
                </div>
                <h6 className="title">Active Clients</h6>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-5">
              <div className="counter-item counter-white mt-40">
                <div className="counter-wrap">
                  <Counter end={30} />
                  <span className="suffix">+</span>
                </div>
                <h6 className="title">Country Served</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter Section End ======*/}
      {/*====== Faq Section Start ======*/}
      <section className=" section-gap">
        <div className="row justify-content-center align-items-center">
          <h2 className="title">Life @ SAMP</h2>
        </div>
        <Slider {...lifeSampUp} className="testimonial-slider-two row images">
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife2.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife3.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife1.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife2.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife3.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife2.jpg" alt="img"></img>
          </div>
        </Slider>
        <Slider {...lifeSampDown} className="testimonial-slider-two row images">
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife1.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife2.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife3.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife1.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife2.jpg" alt="img"></img>
          </div>
          <div className="img_box">
            <img className="image_box" src="/assets/img/samplife3.jpg" alt="img"></img>
          </div>
        </Slider>

      </section>
    </Fragment>
  );
};
export default AboutPage;
