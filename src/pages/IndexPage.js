/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FaUnity, FaMobile } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BsFillMegaphoneFill } from "react-icons/bs";
import Counter from "../components/Counter";
import FaqAccordion from "../components/FaqAccordion";
import FreeConsultation from "../components/FreeConsultation";
import TestimonialTwoSlider from "../components/TestimonialTwoSlider";
import { BiCodeAlt } from "react-icons/bi";
// import Groups2Sharp from "@mui/icons-material"
const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const IndexPage = () => {
  //   $(".btn_link").hover(function() {
  //     $(".main_icn").addClass("show-long-text");
  // }, function () {
  //     $(".long-text").removeClass("show-long-text");
  // });
  const [style, setStyle] = useState({ display: "none" });
  return (
    <Fragment>
      <section
        className="hero-area-two have-animate-icons"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-content wow fadeInUp" data-wow-delay="0.3s">
                {/* <span className="tagline">Best Digital Agency</span> */}
                <h1 className="hero-title">
                  Digital Solutions Agency For Growth Business
                </h1>
                <p>
                  {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam aperiam eaque abillo
                  inventore veritatis */}
                  {/* We focus on strategic planning and utilizing technology to satisfy 
                  business needs to create efficient processes. */}
                  Samp Technologies are having specialists who develop
                  innovative solutions to deliver user-friendly and perfectly
                  organized products for every project.
                  {/* Being a top Mobile app and Web development company, we help Startups, Mid-Size, 
                  and Enterprise businesses to get their digital products done the right way on time, in budget. */}
                  {/* As top Mobile app and Web development company, Samp Technologies helps Startups, Mid-Size, 
                  and Enterprise businesses to get their digital products done the right way on time, in budget. */}
                </p>
                <a href="contact" className="template-btn">
                  Discuss Your Project
                  <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="hero-img wow fadeInDown" data-wow-delay="0.4s">
                <img
                  src="/assets/img/hero/hero-illustration-two.png"
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="animate-icons">
          <img
            src="/assets/img/shape/gradient-pipe.png"
            alt="particles"
            className="icon-one animate-rotate-me"
          />
          <img
            src="/assets/img/shape/wave-line.png"
            alt="particles"
            className="icon-two animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/stars.png"
            alt="particles"
            className="icon-three animate-float-bob-x"
          />
          <img
            src="/assets/img/shape/triangle.png"
            alt="particles"
            className="icon-four animate-float-bob-y"
          />
          <img
            src="/assets/img/shape/triangle-2.png"
            alt="particles"
            className="icon-five animate-rotate-me"
          />
          <img
            src="/assets/img/shape/circle.png"
            alt="particles"
            className="icon-six animate-zoom-fade"
          />
          <img
            src="/assets/img/shape/circle-small.png"
            alt="particles"
            className="icon-seven animate-float-bob-y"
          />
        </div>
        <div
          className="follow_part"
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          {/* <div > */}
          <button className="btn_link">Follow</button>
          {/* </div> */}

          <ul className="social-links social_icon">
            <li></li>
            <li>
              <a
                style={{ fontSize: "30px" }}
                target="new"
                href="https://www.facebook.com/samptechnologies/"
              >
                <i className="fab fa-facebook-square " />
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "30px" }}
                target="new"
                href="https://mobile.twitter.com/samptechnologie"
              >
                <i className="fab fa-twitter-square mx-2" />
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "30px" }}
                target="new"
                href="https://www.instagram.com/samptechnologies/"
              >
                <i className="fab fa-instagram " />
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "30px" }}
                target="new"
                href="https://www.linkedin.com/company/samp-technologies/mycompany/"
              >
                <i className="fab fa-linkedin mx-2" />
              </a>
            </li>
            <li>
              <a
                style={{ fontSize: "30px" }}
                target="new"
                href="https://in.pinterest.com/samptechnologiespvtltd/"
              >
                <i className="fab fa-pinterest" />
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
        <div
          className="main_icn"
          style={style}
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <div className="social_part">
            <ul className="social-links social_icon">
              <li></li>
              <li>
                <a
                  style={{ fontSize: "30px" }}
                  target="new"
                  href="https://www.facebook.com/samptechnologies/"
                >
                  <i className="fab fa-facebook-square " />
                </a>
              </li>
              <li>
                <a
                  style={{ fontSize: "30px" }}
                  target="new"
                  href="https://mobile.twitter.com/samptechnologie"
                >
                  <i className="fab fa-twitter-square mx-2" />
                </a>
              </li>
              <li>
                <a
                  style={{ fontSize: "30px" }}
                  target="new"
                  href="https://www.instagram.com/samptechnologies/"
                >
                  <i className="fab fa-instagram " />
                </a>
              </li>
              <li>
                <a
                  style={{ fontSize: "30px" }}
                  target="new"
                  href="https://www.linkedin.com/company/samp-technologies/mycompany/"
                >
                  <i className="fab fa-linkedin mx-2" />
                </a>
              </li>
              <li>
                <a
                  style={{ fontSize: "30px" }}
                  target="new"
                  href="https://in.pinterest.com/samptechnologiespvtltd/"
                >
                  <i className="fab fa-pinterest" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*====== End Hero Area ======*/}
      {/*====== Service Section Start ======*/}
      <section className="service-section section-gap">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Services We Provide</h2>
            <span className="tagline">
              Variety of web and mobile app solutions with the latest
              technologies in one place
            </span>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <BiCodeAlt />
                  {/* <i className="fa fa-code" /> */}
                  {/* <img src="/assets/img/icon/code.png" alt="Icon" /> */}
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="web-app-development">
                      <a>Web App Development</a>
                    </Link>
                  </h5>
                  <p>
                    A web solution that is High-performing and secure is built
                    by Samp which serves people globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <FaMobile />
                  {/* <i className="fa fa-mobile"></i> */}
                  {/* <img src="/assets/img/icon/mobile_app_dev.png" alt="Icon" /> */}
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="mobile-app-development">
                      <a>Mobile App Devlopment</a>
                    </Link>
                  </h5>
                  <p>
                    We are a Mobile App Development company that builds mobile
                    applications for different platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  {/* <i className="fa fa-hexagon-vertical-nft"></i> */}
                  <img src="/assets/img/icon/nft.png" alt="Icon" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="blockchain-nft">
                      <a>Blockchain/NFT/ Cryptocurrency</a>
                    </Link>
                  </h5>
                  <p>
                    Hire a Blockchain developer to boost your business with a
                    blockchain-based solution that is safe and transparent.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <FaUnity />
                  {/* <img src="/assets/img/icon/Game_Dev.png" alt="Icon" /> */}
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="game-development">
                      <a>Unity Game Devlopment</a>
                    </Link>
                  </h5>
                  <p>
                    We offers end-to-end solutions and experienced Unreal,
                    Unity3D and specialized in game design.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 wow fadeInUp">
              <div className="iconic-box icon-left mt-30">
                <div className="icon">
                  <BsFillMegaphoneFill />
                  {/* <img src="/assets/img/icon/mike.png" alt="Icon" /> */}
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link href="hire-dedicated-developers">
                      <a>Hire Dedicated Devlopers</a>
                    </Link>
                  </h5>
                  <p>
                    Samp Technologies is taking responsibility, you take the
                    advantages. Hire foremost fit developer as per your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Service Section End ======*/}
      <div className="section-blob-bg">
        {/*====== Feature Section Start ======*/}
        <section className="feature-section section-gap-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-images row align-items-center content-mb-md-50">
                  <div className="col-100">
                    <img
                      src="/assets/img/web_design.png"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div>
                  {/* <div className="col-13">
                    <img
                      src="/assets/img/web_design.png"
                      alt="Image"
                      className="animate-float-bob-y"
                    />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block content-l-spacing">
                  <div className="section-heading mb-50">
                    <h2 className="title">Why Choose Samp Technology</h2>
                    <span className="tagline">
                      Modernistic web and mobile app solutions for complex
                      business challenges!!
                    </span>
                  </div>
                  <div className="feature-lists">
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        {/* <i className="flaticon-crop" /> */}
                        <img
                          className="icon_tech"
                          src="/assets/img/icon/Fully Customized Website.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">Fully Customized Website</h4>
                        <p>
                          {/* The outcome of your dreams becomes reality when you own a business.  */}
                          It is our responsibility to convert your dream
                          business to the web. We are taking responsibility to
                          build your website and App from the scratch by using
                          efficient technologies.
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        {/* <i className="flaticon-crop" /> */}
                        <img
                          className="icon_tech"
                          src="/assets/img/icon/customer-service.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">All Services At One Place</h4>
                        <p>
                          Samp Technologies is the one-stop solution for your
                          business. We are capable of offer to you end-to-end
                          web development and Mobile App Development Services
                          collectively.
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-30">
                      <div className="icon">
                        {/* <i className="fa fa-code-square"></i> */}
                        {/* <Groups2Sharp /> */}
                        <RiTeamFill />
                        {/* <img
                          className="icon_tech"
                          src="/assets/img/icon/group.png"
                          alt="Icon"
                        /> */}
                        {/* <i className="flaticon-crop" /> */}
                      </div>
                      <div className="content">
                        <h4 className="title">Highly Skilled In-Line Team</h4>
                        <p>
                          Our expert team members have hands-on experience with
                          different technologies and they implement their
                          experience with their creativity and uniqueness in
                          website development and mobile app development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="contact" className="template-btn mt-10">
                    Start a Project <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Feature Section End ======*/}
        {/*====== Counter Section Start ======*/}
        <section className="counter-section counter-boxed">
          <div className="container_div bg-color-primary section-wave-bg">
            <div className="counter-items row justify-content-center">
              <div className="col-xl-2 col-lg-3 col-sm-5 justify-content-center">
                <div className="counter-item counter-white mt-40">
                  <div className="counter-wrap">
                    <Counter end={319} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Total Projects</h6>
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
        {/*====== Portfolio Section Start ======*/}
        <section className="portfolio-section section-gap">
          <div className="container">
            <div className="section-heading text-center mb-50">
              <h2 className="title">
                The Work which Defines Samp Technologies
              </h2>
              <span className="tagline">
                Have a Glance at our professional and creative work which we
                have delivered within the time limit and with 100% client
                satisfaction.
              </span>
            </div>
            <LatestProjectsIsotop />
          </div>
        </section>
        {/*====== Portfolio Section End ======*/}
      </div>
      {/*====== Consultation Section Start ======*/}
      <section
        className="consultation-section section-gap bg-cover-center triangle-pattern-left have-blob-image overflow-hidden"
        style={{ backgroundImage: "url(assets/img/consultation-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-lg-between align-items-center justify-content-center">
            <div className="col-lg-5 col-md-10">
              <div className="consultation-form-area">
                <FreeConsultation />
              </div>
            </div>
            <div className="col-lg-7 col-md-10">
              <div className="fancy-image-gallery content-l-spacing content-mt-md-50">
                <div className="images-wrap">
                  <div className="image-one wow fadeInUp" data-wow-delay="0.1s">
                    <img src="/assets/img/fancy-gallery/01.jpg" alt="Image" />
                  </div>
                  <div className="image-two wow fadeInUp" data-wow-delay="0.2s">
                    <img src="/assets/img/fancy-gallery/02.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-three wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <img src="/assets/img/fancy-gallery/03.jpg" alt="Image" />
                  </div>
                  <div
                    className="image-four wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img src="/assets/img/fancy-gallery/04.jpg" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blob-image">
          <img src="/assets/img/shape/blob-white.png" alt="" />
        </div>
      </section>
      {/*====== Consultation Section End ======*/}
      {/*====== Call To Action Start ======*/}
      <section className="call-to-action style-two bg-color-primary">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div className="cta-content">
                <h2 className="title">
                  Ready To Get Our Professional Developers For Your Business
                  Solutions ?{" "}
                </h2>
                <p className="subtitle">
                  {/* 25 Years Of Experience We Provide SEO Services */}
                  Years Of Expireance, We Provide Web & Mobile App Solutions
                </p>
              </div>
            </div>
            <div className="col-auto">
              <p className="cta-note">Get Every Single Updates</p>
              <a
                href="contact"
                className="template-btn bordered-btn bordered-white"
              >
                Let’s Talk to Expertise{" "}
                <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="cta-shape">
          <img src="/assets/img/shape/cta-shape.png" alt="Shape" />
        </div>
      </section>
      {/*====== Call To Action End ======*/}
      <div className="section-blob-bg-two">
        {/*====== Testimonial Section Start ======*/}
        <section className="testimonial-section section-gap">
          <div className="container">
            <div className="testimonial-area">
              <div className="section-heading text-center mb-50">
                <h2 className="title">
                  {/* What’s Clients Say */}
                  Meet our happy clients
                </h2>
                <span className="tagline">
                  Have a look at our happy clients and what they have to say
                  about our work.{" "}
                </span>
              </div>
              <TestimonialTwoSlider />
            </div>
          </div>
        </section>
        {/*====== Testimonial Section End ======*/}
        {/*====== Faq Section Start ======*/}
        <section className="faq-section">
          <div className="container">
            <div className="content-boxed">
              <div className="content-left">
                <div
                  className="qolle-video"
                  style={{ backgroundImage: "url(/assets/img/samplife2.jpg)" }}
                >
                  <a
                    href="/assets/img/IMG_4626.MP4"
                    className="video-popup"
                    data-lity=""
                    target="new"
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
              <div className="content-right">
                <div className="section-heading mb-30">
                  <h2 className="title">Frequently Asked Questions</h2>
                  <span className="tagline">
                    Here are the answers to your questions concerning our
                    services, past endeavours, and methodology.
                  </span>
                </div>
                <FaqAccordion display={4} />
              </div>
            </div>
          </div>
        </section>
        {/*====== Faq Section End ======*/}
        {/*====== Pricing Sectioin Start ======*/}
        <section className="pricing-section pricing-section-line section-gap">
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
                    {/* <li>
                      <i className="far fa-check" /> 15 Days Money Back
                      Guarantee
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="pricing-table mt-30">
                  {/* featured-plan */}
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
                    {/* <li>
                      <i className="far fa-check" /> 15 Days Money Back
                      Guarantee
                    </li> */}
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
                    {/* <li>
                      <i className="far fa-check" /> 15 Days Money Back
                      Guarantee
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Pricing Sectioin End ======*/}
      </div>
      {/*====== Latest New Section Start ======*/}
      <section className="bg-color-primary-7 section-gap triangle-pattern-right">
        <div className="container">
          <div className="section-heading text-center mb-30">
            <h2 className="title">Latest Blog &amp; News</h2>
            <span className="tagline">
              Stay Updated On The Latest Technologies And Tools
            </span>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 wow fadeInUp">
              <div className="latest-post-box thumbnail-left mt-30">
                <div className="post-thumb blog_image">
                  <img
                    src="/assets/img/blog/dynamic_web_home.png"
                    alt="dynamic web"
                  />
                </div>
                <div className="post-content blog_content">
                  <h4 className="post-title">
                    <a href="dynamic-website">
                      The Necessity of a Dynamic Website
                    </a>
                  </h4>
                  <div className="post-meta">
                    <a href="#">
                      <i className="far fa-calculator" />
                      24 December 2021
                    </a>
                  </div>
                  <p>
                    In the current Techno-oriented world, numerous websites are
                    offering products and services.
                    {/* Sed ut perspiciatis unde omnis natus error sit voluptate
                    santium doloremque laudantium */}
                  </p>
                  <a
                    href="dynamic-website"
                    className="template-btn bg-primary-10"
                  >
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 wow fadeInUp">
              <div className="latest-post-box thumbnail-left mt-30">
                <div className="post-thumb">
                  <img
                    src="/assets/img/blog/mobile_app_home.png"
                    alt="mobile app"
                  />
                </div>
                <div className="post-content blog_content">
                  <h4 className="post-title">
                    <a href="mobile-app">Latest Trends in Mobile Application</a>
                  </h4>
                  <div className="post-meta">
                    <a href="#">
                      <i className="far fa-calculator" />
                      17 March 2022
                    </a>
                  </div>
                  <p>
                    In todays time the Mobile App industry is flourishing, with
                    3.2 billion smartphone users.
                  </p>
                  <a href="mobile-app" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-10 wow fadeInUp">
              <div className="latest-post-box thumbnail-left mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/Blog/mobile_app_home.png" alt="" />
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Latest Trends in Mobile Application</a>
                  </h4>
                  <div className="post-meta">
                    <a href="#">
                      <i className="far fa-calculator" />
                      25 September 2021
                    </a>
                  </div>
                  <p>
                  In todays time the Mobile App industry is flourishing, 
                  with 3.2 billion smartphone users.
                  </p>
                  <a href="mobile-app" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 wow fadeInUp">
              <div className="latest-post-box thumbnail-left mt-30">
                <div className="post-thumb">
                  <img src="/assets/img/Blog/mobile_app_home.png" alt="" />
                </div>
                <div className="post-content">
                  <h4 className="post-title">
                    <a href="#">Latest Trends in Mobile Application</a>
                  </h4>
                  <div className="post-meta">
                    <a href="#">
                      <i className="far fa-calculator" />
                      25 September 2021
                    </a>
                  </div>
                  <p>
                  In todays time the Mobile App industry is flourishing, 
                  with 3.2 billion smartphone users.
                  </p>
                  <a href="mobile-app" className="template-btn bg-primary-10">
                    Read More <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default IndexPage;
