/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../../layout/PageTitle";
import { portfolioslider } from "../../sliderProps";
import { HiPaperAirplane } from "react-icons/hi2";
import { TbSends } from "react-icons/tb";

const WorkoutPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Workout Website"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/workout_banner.png"
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
                    <span className="info">Workout</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">UI/UX</span>
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
                <h2 className="portfolio-title">Workout</h2>
                <p className="mb-30">
                  We have develop a App with the name Workout Website. This
                  project we got in the month of August 2022 and we have
                  delivered this attractive Mobile application to the client
                  within the time limit. Our Experts have taken all the
                  requirments of the clients under consideration and prepare
                  this wonderful app and uploaded that on the google play
                  storre. Let us share a glimpse of this wonderful Delivery Boy
                  app.
                </p>
                <p className="mb-30">
                  This Workout website provides you with daily workout routines
                  for all your main muscle groups. few minutes a day, you can
                  build muscles and keep yourself fit everywhere without going
                  to the gym. No equipment and coaches are required, You can
                  perform all the exercises with just your body weight shown on
                  the website. This website will guide you for workouts for your
                  abs, chest, legs, arms, and butt as well as full-body
                  workouts. All the workouts are designed by experts and by
                  highly trained people. It just takes a few minutes of the day,
                  and it can effectively tone your muscles and help you get
                  six-pack abs at home.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/workout1.png"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/workout2.png"
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
                    <p>You need to follow Warm-up and stretching routines</p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      You will start Records training progress automatically
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>The chart tracks your weight trends every day.</p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>You can Customize your workout reminders</p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>Use all the detailed video and animation guides</p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      You can also Lose weight with the help of a personal
                      trainer
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
export default WorkoutPage;
