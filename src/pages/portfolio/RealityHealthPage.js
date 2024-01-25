/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../../layout/PageTitle";
import { portfolioslider } from "../../sliderProps";

const RealityHealthPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Reality Health Website"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/Health_Banner.png"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 order-lg-last">
              <div className="portfolio-info-box wow fadeInUp">
                <h4 className="box-title">Project Info</h4>
                <ul>
                  <li>
                    <span className="info-title">Project Name</span>
                    <span className="info">Reality Health</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Website Development</span>
                  </li>
                  <li>
                    <span className="info-title">Project Date</span>
                    <span className="info">14 February 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-details-content wow fadeInUp">
                <h2 className="portfolio-title">Reality Health</h2>
                <p className="mb-30">
                  We have develop a App with the name Reality Health Website.
                  This project we got in the month of September 2022 and we have
                  delivered this attractive Mobile application to the client
                  within the time limit. Our Experts have taken all the
                  requirments of the clients under consideration and prepare
                  this wonderful app and uploaded that on the google play
                  storre. Let us share a glimpse of this wonderful Crypto app.
                </p>
                <div>
                  <h5 className="mb-3">The biggest challenging parts are</h5>
                  <ul style={{ "list-style-type": "disc" }} className="mx-5">
                    <li>
                      Implementing React JS application for admins and company
                      employees.{" "}
                    </li>
                    <li> Implementing React JS application for users.</li>
                    <li> Security and Permissions</li>
                    <li> Export Dynamic Reports</li>
                    <li> Token-Based API</li>
                    <li> Track Users and Admins activities</li>
                    <li> Implement microservices design</li>
                  </ul>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/Health1.png"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/Health2.png"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className=" feature-lists mt-30">
                    <div>
                      <h4>Solution</h4>
                      <ul
                        style={{ "list-style-type": "disc" }}
                        className="mx-5"
                      >
                        <li>
                          We have developed a web application created in React
                          Js with Java spring boot.
                        </li>
                        <li> Unique Features.</li>
                        <li> Manage admins and permissions</li>
                        <li>
                          {" "}
                          Manage product licenses, discounts, and coupons
                        </li>
                        <li> User-friendly UI</li>
                        <li> Add Users</li>
                        <li> Highly Secured Login</li>
                        <li>Manage Product</li>
                        <li> Generate reports</li>
                        <li> Dynamic preferences settings</li>
                        <li> Role-Based Access Control</li>
                      </ul>
                    </div>
                  </div>
                  <div className=" feature-lists mt-30">
                    <h4>Result</h4>
                    <ul style={{ "list-style-type": "disc" }} className="mx-5">
                      <li>
                        Client has successfully developed the automated robust
                        system and enhanced their business as well as saved
                        time.
                      </li>
                      <li>
                        {" "}
                        Web application comes with the clients 100% requirement
                        and has given them a high level of satisfaction.
                      </li>
                      <li>
                        {" "}
                        Developer assured 100% adherence to the client for
                        requirements.
                      </li>
                      <li>
                        {" "}
                        The client was very happy with the mobile app layout and
                        features that we provided to him.
                      </li>
                      <li>
                        {" "}
                        Although the client has some idea of what he wanted to
                        achieve, he has less clarity of how it would work in
                        terms of the web application. Our team went above and
                        beyond to ideate a solution that the client had only
                        just imagined.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Portfolio Area End ======*/}
      {/*====== Related Portfolio Start ======*/}
      <section className="related-portfolio bg-color-primary-7 section-gap">
        <div className="container">
          <div className="section-heading text-center mb-60">
            <h2 className="title">Related Projects</h2>
            <span className="tagline">Best SEO Optimization Agency</span>
          </div>
          <Slider {...portfolioslider} className="row portfolio-slider">
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/05.jpg" alt="Image" />
                <Link href="/portfolio-details">
                  <a className="portfolio-link" />
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    <a>Digital Agency Template</a>
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/06.jpg" alt="Image" />
                <Link href="/portfolio-details">
                  <a className="portfolio-link" />
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    <a>Chatbot Web Template</a>
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/07.jpg" alt="Image" />
                <Link href="/portfolio-details">
                  <a className="portfolio-link" />
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    <a>Digital Products Design</a>
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/08.jpg" alt="Image" />
                <Link href="/portfolio-details">
                  <a className="portfolio-link" />
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    <a>Digital Agency Template</a>
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/09.jpg" alt="Image" />
                <Link href="/portfolio-details">
                  <a className="portfolio-link" />
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    <a>Fitness Program Template</a>
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
            <div className="portfolio-items-two">
              <div className="portfolio-thumb">
                <img src="../assets/img/portfolio/10.jpg" alt="Image" />
                <Link href="/portfolio-details">
                  <a className="portfolio-link" />
                </Link>
              </div>
              <div className="portfolio-content">
                <h4 className="title">
                  <Link href="/portfolio-details">
                    <a>E-Wallet Template</a>
                  </Link>
                </h4>
                <div className="categories">
                  <a href="#">Marketing Strategy</a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Fragment>
  );
};
export default RealityHealthPage;
