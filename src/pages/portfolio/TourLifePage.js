/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../../layout/PageTitle";
import { portfolioslider } from "../../sliderProps";
import { HiPaperAirplane } from "react-icons/hi2";

const TourLifePage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"TourLife"} />
      <section className="portfolio-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="../assets/img/portfolio/Tourlife_Banner.png"
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
                    <span className="info">Tourlife</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Website Development</span>
                  </li>
                  <li>
                    <span className="info-title">Project Date</span>
                    <span className="info">22 October 2022</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-details-content wow fadeInUp">
                <h2 className="portfolio-title">Tourlife</h2>
                <p className="mb-30">
                  
                  We provide all of the services necessary to ensure a
                  successful tour. By offering multiple services with 1 point of
                  contact, we save talent money and their managers time. They
                  provide a whole array of options when it comes to ground
                  transport based on your touring partys needs.
                </p>
                <p className="mb-30">
                  We provide all of the services necessary to ensure a
                  successful tour. By offering multiple services with 1 point of
                  contact, we save talent money and their managers time. Tour
                  life team experience spans many years of working with the best
                  manufacturers all over the world to deliver quality
                  merchandise at the perfect price point. Alongside merchandise
                  we can manage your meet & greets and even capture pictures
                  ready to post within minutes. We work closely with artists &
                  brands to create campaigns that deliver for both parties. From
                  product placements, tour sponsorships, product endorsements
                  and more.We work closely with artists & brands to create
                  campaigns that deliver for both parties. From product
                  placements, tour sponsorships, product endorsements and more.
                </p>

                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="../assets/img/portfolio/Tourlife1.png"
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
                  <div className="col-lg-12">
                    <div className="feature-lists mt-30">
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Vehicles</h4>
                          <p>
                            They provide a whole array of options when it comes
                            to ground transport based on your touring partys
                            needs.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                       
                        <div className="content">
                          <h4 className="title">Merchandise</h4>
                          <p>
                            Tour life team experience spans many years of
                            working with the best manufacturers all over the
                            world to deliver quality merchandise at the perfect
                            price point. They can design, produce and manage
                            your merchandise.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Video & Photo</h4>
                          <p>
                            From tour documentaries to daily vlogs for social,
                            we can capture the moments that matter with our
                            Netflix approved in-house RED cinema cameras &
                            photography equipment.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Production </h4>
                          <p>
                            Our team can be an extension of yours to create
                            unforgettable stage shows that will live on in fans
                            memories forever. Talk to us about your needs and
                            let us bring your ideas to life.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Tour Manager</h4>

                          <p>
                            From advancing and logistics to a professional
                            representative on the road as the point of contact
                            taking care of everything the touring party needs.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Meet & Greet</h4>

                          <p>
                            Bring your fans closer whilst creating another
                            revenue stream on the road. Alongside merchandise we
                            can manage your meet & greets and even capture
                            pictures ready to post within minutes.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Partnerships</h4>

                          <p>
                            We work closely with artists & brands to create
                            campaigns that deliver for both parties. From
                            product placements, tour sponsorships, product
                            endorsements and more.
                          </p>
                        </div>
                      </div>
                      <div className="simple-icon-box icon-left mb-30 wow fadeInUp">
                        
                        <div className="content">
                          <h4 className="title">Security</h4>

                          <p>
                            We have access to close personal protection officers
                            across the world who have worked shoulder to
                            shoulder with leading artists to ensure that their
                            safety is not compromised.
                          </p>
                        </div>
                      </div>
                    </div>
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
export default TourLifePage;
