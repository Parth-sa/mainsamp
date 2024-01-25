/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";
import {FaUnity,FaHeadset} from "react-icons/fa"
import {GiGamepad} from "react-icons/gi"
import {MdDesignServices} from "react-icons/md"
const GameAppDevelopment = () => {
  return (
    <Fragment>
      {/* <PageTitle pageName={"Game Development"} /> */}
      {/*====== Page Title Area End ======*/}
      {/*====== About Area Start ======*/}
      <section className="about-section section-gap overflow-hidden page_top">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    Game Development Company in Surat
                  </h2>
                </div>
                <p>
                We are here for you. Samp Technologies, the best mobile game development company, 
                has years of experience making user-friendly 2D and 3D games for various Android, 
                iOS, and Native platforms. Our expertise is in creating attractive, animated game solutions with 
                cutting-edge graphics capabilities, high-definition screens, and other crucial elements. 
                Be it games for learning or board games, action games, casino games, racing and shooting games,
                 and sports games Samp Technologies has completed everything and it came a long way.
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                  <li>Professional Agency</li>
                  <li>Best Solutions Provider</li>
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
                      src="/assets/img/services/Game.png"
                      alt="About Image"
                    />
                  </div>
                  {/* <div className="col-sm-6 wow fadeInUp">
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/06.jpg"
                      alt="About Image"
                    />
                    <img
                      className="mb-30"
                      src="/assets/img/fancy-gallery/07.jpg"
                      alt="About Image"
                    />
                  </div> */}
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
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaUnity />
                  
                </div>
                <h4 className="title">
                  Unity Games
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
                  UI & UX Designing
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
                  AR & VR Games
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <GiGamepad />

                </div>
                <h4 className="title">
                  2D & 3D Games
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <MdDesignServices />

                </div>
                <h4 className="title">
                  Customized Games
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                <img src="/assets/img/icon/Singal-Multi.png" alt="single-multi"></img>

                </div>
                <h4 className="title">
                  Single & Multiplayer 
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                <img src="/assets/img/icon/animate.png" alt="animate"></img>

                </div>
                <h4 className="title">
                  Art, Design, & Animation
                </h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <FaHeadset/>

                </div>
                <h4 className="title">
                  Game Support & Maintenance
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
                      Why Hire SAMP for Game Development Services?
                    </h2>
                    
                  </div>
                  <p>
                  Samp Technologies provides end-to-end game development services at very affordable prices. 
                  Our team has proven expertise working on the best streaming games in the market, including VR, 
                  multi-player RPGs, and hyper-casual games. We have created games for mobile, PC, and web over the 
                  past 6 years using cutting-edge development tools like Unity3D, Cocos2d-X, and Unreal. 
                  Every game has positives and negatives. We choose the ideal candidate for your required or preferred game. 
                  One might want to make their thoughts a reality given the rapid development of the Internet and technologies. 
                  We value our relationships with customers.
                  <br />
                  Samp Technologies provides end-to-end solutions in both native and cross-platform for those seeking to hire App, and game development 
                  businesses skilled in Unreal, Unity3D, Play Canvas, blockchain, development frameworks, and specialized in game design, VR, NFT, 
                  metaverse, & solutions.
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
export default GameAppDevelopment;
