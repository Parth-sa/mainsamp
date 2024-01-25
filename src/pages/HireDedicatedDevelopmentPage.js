/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Fragment } from "react";
import {FaReact,FaVuejs,FaAngular,FaNodeJs,FaPython, FaUnity} from "react-icons/fa"
import {DiLaravel,DiAndroid} from "react-icons/di"
import {SiFlutter} from "react-icons/si"
import {AiFillApple} from "react-icons/ai"
const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const HireDedicatedDevelopment = () => {
  return (
    <Fragment>
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
      <section className="about-section section-gap overflow-hidden page_top ">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">Hire Dedicated Developers from SAMP</h2>
                </div>
                <p>
                  Free up your in-house experts to focus on your core business.
                  Global companies are hiring dedicated developers from Samp
                  Technologies for completing their projects easier and more
                  cost-effective. Samp Technologies provides the dedicated
                  developer of different technologies through which many other
                  companies can manage the workflow from anywhere in the world
                  directly.
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                  <li>Professional Agency</li>
                  <li>Best Solutions Provider</li>
                  <li>Hire Dedicated Developers</li>
                </ul>
                <a href="contact" className="template-btn bordered-btn">
                  Start a Project <i className="fas fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-10 col-md-10">
              <div className="fancy-image-gallery-two">
                <div className="row align-items-center">
                  <div className="wow fadeInUp">
                    <img
                      className="mb-30"
                      src="/assets/img/services/Hire.png"
                      alt="About Image"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Area End ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section section-gap bg-color-primary-7 bg-cover-center">

        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Hire Web Developers</h2>
          </div>
          <div className="row service-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaReact />

                </div>
                <h4 className="title">
                React Js
                    
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaVuejs />

                </div>
                <h4 className="title">
                    Vue Js
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaAngular />

                </div>
                <h4 className="title">
                  
                    Angular Js
                  
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaNodeJs/>

                </div>
                <h4 className="title">
                  Node Js
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaPython />

                </div>
                <h4 className="title">
                  Python
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <DiLaravel />
                </div>
                <h4 className="title">
                  PHP/Laravel 
                </h4>
              </div>
            </div>

            <a href="apply-now" className="template-btn mt-5">
              Hire Now{" "}
            </a>
          </div>
        </div>
      </section>

      <br />
      <section className="service-section section-gap bg-color-primary-7 bg-cover-center mb-30"
        style={{ backgroundImage: "url(assets/img/service-bg.jpg)" }}
        >
        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Hire App Developers</h2>
          </div>
          <div className="row service-boxes justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <SiFlutter />

                </div>
                <h4 className="title">
                  Flutter
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaReact />

                </div>
                <h4 className="title">
                  React Native
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <DiAndroid />

                </div>
                <h4 className="title">
                    Android
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <AiFillApple />

                </div>
                <h4 className="title">
                    IOS
                </h4>
              </div>
            </div>

            <a href="apply-now" className="template-btn mt-5">
              Hire Now{" "}
            </a>
          </div>
        </div>
      </section>
      <br />
      <section className="service-section section-gap bg-color-primary-7 bg-cover-center mb-30">
        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Hire Game Developers</h2>
          </div>
          <div className="row service-boxes justify-content-center">
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaUnity />

                </div>
                <h4 className="title">
                  Unity
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                <img src="/assets/img/icon/UI-UX.png" alt="ui-ux"></img>

                </div>
                <h4 className="title">
                  UI/UX
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                <img src="/assets/img/icon/AR-VR.png" alt="ar-vr"></img>

                </div>
                <h4 className="title">
                   AR/VR
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                <img src="/assets/img/icon/games.png" alt="games"></img>

                </div>
                <h4 className="title">
                    2D & 3D
                </h4>
              </div>
            </div>
            <a href="apply-now" className="template-btn mt-5">
              Hire Now{" "}
            </a>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      <div className="section-blob-bg-three">
        {/*====== Skills Section Start ======*/}
        <section className="skill-section section-gap">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="skill-image text-lg-left text-center content-mb-md-50">
                  <img
                    src="/assets/img/skill-image-2.jpg"
                    alt="Image"
                    className="animate-float-bob-y"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-10">
                <div className="skill-content content-r-spacing">
                  <div className="section-heading mb-20">
                    <h2 className="title">
                      Why Hire Dedicated Developers From SAMP?
                    </h2>
                    {/* <span className="tagline">
                      Best Digital Agency Solutions
                    </span> */}
                  </div>
                  <p>
                    Hire the Top foremost fit developer as per your needs. Samp
                    Technologies is taking responsibility, you take the
                    advantages At Samp Technologies, we provide the best web and
                    mobile app development team. It is a flexible outsourcing
                    method for improving team productivity in exclusive,
                    long-term outsourcing relationships. We are providing a
                    team, which is experts, has hands-on experience, and also
                    has specialization in all the latest technologies.
                    <br />
                    We provide a committed developer of many technologies for
                    every client project. They will handle every difficulty and
                    change till completion. Every element developed by our
                    developers, starting from navigation to imagery, will serve
                    a specific purpose on the website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Skills Section End ======*/}
        {/*====== Pricing Sectioin Start ======*/}
        <section className="pricing-section pricing-section-line section-gap-bottom">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">Best Pricing For Business</h2>
              <span className="tagline">Best SEO Optimization Agency</span>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table mt-30">
                  <h4 className="plan-name">Basic Plan</h4>
                  <p>
                    Amet consectetu adipiscing elit sedie eiusmod tempor incidie
                    labore
                  </p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">29.57</span>
                  </div>
                  <a href="#" className="template-btn bordered-btn">
                    Choose Package <i className="far fa-long-arrow-right" />
                  </a>
                  <p>
                    Quis autem vel eumcur reprehenderit ea voluptate velit esse
                    quam
                  </p>
                  <ul className="feature-list">
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table featured-plan mt-30">
                  <h4 className="plan-name">Standard Plan</h4>
                  <p>
                    Amet consectetu adipiscing elit sedie eiusmod tempor incidie
                    labore
                  </p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">49.86</span>
                  </div>
                  <a href="#" className="template-btn bordered-btn">
                    Choose Package <i className="far fa-long-arrow-right" />
                  </a>
                  <p>
                    Quis autem vel eumcur reprehenderit ea voluptate velit esse
                    quam
                  </p>
                  <ul className="feature-list">
                    
                    <li className="disabled">
                      <i className="far fa-check" /> 6 Months Support &amp;
                      Update
                    </li>
                  </ul>
                  <span className="featured-label">Popular</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table mt-30">
                  <h4 className="plan-name">Premium Plan</h4>
                  <p>
                    Amet consectetu adipiscing elit sedie eiusmod tempor incidie
                    labore
                  </p>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="price">99.57</span>
                  </div>
                  <a href="#" className="template-btn bordered-btn">
                    Choose Package <i className="far fa-long-arrow-right" />
                  </a>
                  <p>
                    Quis autem vel eumcur reprehenderit ea voluptate velit esse
                    quam
                  </p>
                  <ul className="feature-list">
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Pricing Sectioin End ======*/}
      </div>
      {/*====== Call To Action Start ======*/}
    </Fragment>
  );
};
export default HireDedicatedDevelopment;

