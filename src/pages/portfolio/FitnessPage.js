/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../../layout/PageTitle";
import { portfolioslider } from "../../sliderProps";
import { HiPaperAirplane } from "react-icons/hi2";

const FitnessPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Fitness"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/fitness_banner.png"
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
                    <span className="info">Fitness</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Mobile App Development</span>
                  </li>
                  <li>
                    <span className="info-title">Project Date</span>
                    <span className="info">25 September 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-details-content wow fadeInUp">
                <h2 className="portfolio-title">Fitness App</h2>
                <p className="mb-30">
                  We have develop a App with the name Delivery Boy App. This
                  project we got in the month of August 2022 and we have
                  delivered this attractive Mobile application to the client
                  within the time limit. Our Experts have taken all the
                  requirments of the clients under consideration and prepare
                  this wonderful app and uploaded that on the google play
                  storre. Let us share a glimpse of this wonderful Delivery Boy
                  app.
                </p>
                <p className="mb-30">
                  You can track your progress toward your dietary, physical
                  fitness, weight loss, and hydration objectives with this
                  website. Its like having a nutrition coach, meal planner, and
                  food journal with you all the time when you use this
                  all-in-one food tracker, calorie counter, macro tracker,
                  health app, and activity tracker. This website is not a new
                  fad in restrictive eating. You can use this daily planner and
                  health and nutrition website to learn about your eating
                  patterns, improve your food choices, discover inspiration and
                  support, and achieve your health objectives.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/fitness1.png"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/fitness2.png"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                </div>
                <h3 className="mb-30">Features</h3>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon ">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      This website is an Easy-to-use planner tool that makes
                      food tracking quick and simple
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      On this fitness website you can Track Activity, Add
                      workouts and steps.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      You can customize Your Goals like Weight loss, weight
                      gain, weight maintenance, nutrition & fitness
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      You can see Your Progress at Track at a glance & analyze
                      your diet’s nutrition & calories in detail
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      You Can Learn From a Registered Dietitian about Meal Plans
                      & customized target calories and macros.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      whether you’re into weight loss or weight gaining, you can
                      check in our Meal Planner and macro tracker tools
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      You will always Stay Inspired & will get 500+ healthy
                      recipes for a healthy diet and 50 workouts to keep
                      routines fresh and fun.
                    </p>
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
export default FitnessPage;
