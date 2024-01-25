/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";
import {FaReact,FaVuejs,FaAngular,FaNodeJs,FaPython} from "react-icons/fa"
import {DiLaravel} from "react-icons/di"
const WebAppDevelopment = () => {
  return (
    <Fragment>
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
      <section className="about-section section-gap overflow-hidden page_top">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    Website Development Company in Surat
                  </h2>
                </div>
                <p>
                Samp Technologies as a top web development company in Surat is the most preferred choice among those looking for 
                top-quality website development services. Our expert team consists of highly creative professionals who are specialized 
                in their horizons and work hard to deliver unique designs. It doesn’t matter to our team which services you are interested in 
                or opt from us; our professional and expert endeavor will always deliver you a unique solution.
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                  <li>Professional Agency</li>
                  <li>Best Solutions Provider</li>
                  <li>Web &amp; Design Solutions</li>
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
                      src="/assets/img/services/Web.png"
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
      <section
        className="service-section section-gap bg-color-primary-7 bg-cover-center"
        style={{ backgroundImage: "url(assets/img/service-bg.jpg)" }}
      >
        <div className="container">
          <div className="section-heading mb-30 text-center">
            <h2 className="title">Technologies We Work On</h2>
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
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaNodeJs />
                  
                </div>
                <h4 className="title">
                  Node Js
                </h4>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.6s"
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
              data-wow-delay="0.7s"
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
                      Why Hire SAMP for Web Development Services?
                    </h2>
                    
                  </div>
                  <p>
                  Samp is a leading website development company that creates result-driven website for your company. 
                  Samp provide scalable progressive website with the help of modern web frameworks. 
                  Our ultimate goal is to provide all clients with high-quality and user-friendly websites. 
                  
                  
                  Samp Technologies have become the top website development company in Surat. 
                  We offer creative and unique web development solutions to expand the clients products and services 
                  to an extensive reach. With our user-centric website development solution, the client can engage and 
                  attract customers to their website easily. 
                  <br/>
                  Our valuable clients trust us because we are delivering dynamic and unique experiences to the 
                  customer in website development.
                  Working with the Samp Technologies team can help you in achieve optimum growth by utilizing the right technology stacks.
                  Samp custom website development services guarantee quality and timely delivery.
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
              <span className="tagline">Best Web and Mobile App Development Company</span>
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
export default WebAppDevelopment;
