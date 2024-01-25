/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../../layout/PageTitle";
import { portfolioslider } from "../../sliderProps";
import { HiPaperAirplane } from "react-icons/hi2";

const DrivrIoPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"DriveIo"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/portfolio-details.jpg"
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
                    <span className="info">Drive.io</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Mobile Applications</span>
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
                <h2 className="portfolio-title">
                  Drive.io App (Delivery Boy App)
                </h2>
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
                  This application offers a feature that creates a connection
                  between the delivery boy and the administrator. The
                  administrator can designate a delivery person for each order
                  and track them using this application. This aids in providing
                  a better shipping service because everything is overseen by
                  admin, and that too with the use of a mobile app. There is no
                  separate registration for delivery guys for security reasons;
                  instead, the admin/store owner will create an account for
                  delivery people and assign the orders through the admin panel.
                  Only delivery guys can use this app to accept delivery orders
                  sent to them by administrators or store owners. The delivery
                  boy can use this app to update the progress of the delivery at
                  various points after the order has been accepted. This
                  programme also makes it simple for the Admin and Customer to
                  communicate, which will boost customer satisfaction as they
                  are kept up to date on the delivery boys activities.
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/portfolio-details-01.jpg"
                      alt="Image"
                      className="mb-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/portfolio-details-02.jpg"
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
                      Admin and the delivery dude can both get notifications
                      about the Order even if the app is not open.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      A delivery boy can be added to the application by the
                      admin and they both will get the dashboard.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      Admin can monitor the progress of the delivery kid and
                      give him a job.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      Shipping Boys have access to the admin-assigned order data
                      and can accept or reject the orders.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      An order will be added to the list of Active orders after
                      the delivery boy accepts it.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      Shipping The list of orders available to boys on their
                      Active list can be viewed or filtered.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      Click to examine the Orders specific information and to
                      see whether the payment has been made or has to be
                      collected in cash.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      During delivery, take a photo of the customers signature,
                      record their comments, and update the orders status.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      From the backend, the admin can see the order status that
                      has been modified by the delivery boy.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      The status of an order can be one of the following:
                      Accepted, Picked Up Order, Started, On the way, On Hold,
                      or Delivered.
                    </p>
                  </div>
                </div>
                <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                  <div className="icon">
                    <HiPaperAirplane className="arrow_icon" />
                  </div>
                  <div className="content">
                    <p>
                      The Order history panel will now display all completed
                      orders.
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
export default DrivrIoPage;
