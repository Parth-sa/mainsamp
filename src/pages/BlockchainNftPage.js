/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { Fragment } from "react";
import FreeConsultation from "../components/FreeConsultation";
import PageTitle from "../layout/PageTitle";
import Link from "next/link";

const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const ServiceDetailsPage = () => {
  return (
    <Fragment>
      <section className="about-section section-gap overflow-hidden page_top">
        <div className="custom-container-fluid">
          <div className="row align-items-center justify-content-xl-start justify-content-center">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div className="about-contant content-mb-lg-80">
                <div className="section-heading mb-20">
                  <h2 className="title">
                    Blockchain/NFT Development Company in Surat
                  </h2>
                </div>
                <p>
                  Several different kinds of businesses throughout the world are
                  now operating differently because of blockchain technology.
                  Samp Technologies, one of the top blockchain development
                  companies in Surat, has the capacity to design ground-breaking
                  technologies. To provide competitive Blockchain app
                  development services, our experts in Blockchain developers are
                  well-versed in all cutting-edge blockchain technology. The
                  customer products built on blockchain technology serve as
                  verifiable evidence of our quality of work.
                </p>
                <ul className="circle-list mb-40 mt-30 wow fadeInUp">
                  <li>Professional Agency</li>
                  <li>Best Solutions Provider</li>
                  <li>Blockchain/NFT Development</li>
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
                      src="/assets/img/services/blockchain.png"
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
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-seo-2" />
                </div>
                <h4 className="title">React Js</h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <h4 className="title">Vue Js</h4>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-analysis" />
                </div>
                <h4 className="title">Angular Js</h4>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-8 col-11 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="fancy-iconic-box mt-30">
                <div className="icon">
                  <i className="flaticon-click" />
                </div>
                <h4 className="title">Node Js</h4>
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
                      Why Hire SAMP for Blockchain/NFT Development Services?
                    </h2>
                  </div>
                  <p>
                    Samp Technologies is a leading Blockchain Development
                    Company in India. We provide a blockchain-based solution
                    that is safe and transparent digital assets for every
                    business. Our clients have praised our blockchain-based
                    solution. We are a leading provider of NFT marketplace
                    development services, delivering exceptional NFT services at
                    competitive prices. All types of industry niches, such as
                    games, art, music, collectibles, and many more, will be
                    catered to by our NFT development services in Surat. In
                    terms of knowledge gathering and preservation, blockchain
                    technology is transforming the way people think about
                    digital information. We also provide NFT-based tokenization
                    services that are decentralized. We build full-stack
                    blockchain solutions and apps for a variety of businesses.
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
                  <ul className="feature-list"></ul>
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
                  <ul className="feature-list"></ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Pricing Sectioin End ======*/}
      </div>
    </Fragment>
  );
};
export default ServiceDetailsPage;
