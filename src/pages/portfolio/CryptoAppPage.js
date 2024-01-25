/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Slider from "react-slick";
import PageTitle from "../../layout/PageTitle";
import { portfolioslider } from "../../sliderProps";
import { HiPaperAirplane } from "react-icons/hi2";

const CryptoAppPage = () => {
  return (
    <Fragment>
      <PageTitle pageName={"Crypto App"} />
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
                    <span className="info">Crypto App</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Mobile App Development</span>
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
                <h2 className="portfolio-title">Crypto App</h2>
                <p className="mb-30">
                  We have develop a App with the name Crypto App. This project
                  we got in the month of September 2022 and we have delivered
                  this attractive Mobile application to the client within the
                  time limit. Our Experts have taken all the requirments of the
                  clients under consideration and prepare this wonderful app and
                  uploaded that on the google play storre. Let us share a
                  glimpse of this wonderful Crypto app.
                </p>
                <p className="mb-30">
                  This cryptocurrency trading tool is designed for both novice
                  and experienced investors. The program makes it easier to
                  explore and diversify 20,000 digital assets dispersed among
                  NFTs, Defi, Metaverse, Web3 cryptocurrency coins, and tokens
                  listed on reputable cryptocurrency exchanges like Coinbase,
                  Binance, Kraken, Huobi, and more. Our passion for compiling
                  intricate cryptographic data sets is the inspiration behind
                  the idea of this crypto app. We use sophisticated investment
                  algorithms on cryptocurrencies like Bitcoin, Ethereum,
                  polygon, etc. to forecast market trends, historical
                  performance, and current evaluation. As a result, we can
                  create ready-to-invest diversified cryptocurrency baskets that
                  are tailored to each investors needs and willingness to make
                  additional investments.
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
          
                <div className="row">
                  <div className="feature-lists mt-30">
                    <h3 className="mb-30">Features</h3>
                    <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                      <div className="icon ">
                        <HiPaperAirplane className="arrow_icon" />
                      </div>
                      <div className="content">
                        <p>
                          Free cryptocurrency trading simulator and portfolio 
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                      <div className="icon">
                        <HiPaperAirplane className="arrow_icon" />
                      </div>
                      <div className="content">
                        <p>
                          Earn a cryptocurrency trading simulator and
                          portfolio  
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                      <div className="icon">
                        <HiPaperAirplane className="arrow_icon" />
                      </div>
                      <div className="content">
                        <p>Payout benefits with genuine cryptocurrency</p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                      <div className="icon">
                        <HiPaperAirplane className="arrow_icon" />
                      </div>
                      <div className="content">
                        <p>Alternate between actual and demo crypto trading </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                      <div className="icon">
                        <HiPaperAirplane className="arrow_icon" />
                      </div>
                      <div className="content">
                        <p>
                          Choose the best coins immediately, similar to online
                          shopping
                        </p>
                      </div>
                    </div>
                    <div className="simple-icon-box icon-left mb-20 wow fadeInUp">
                      <div className="icon">
                        <HiPaperAirplane className="arrow_icon" />
                      </div>
                      <div className="content">
                        <p>
                          Use one login to access several cryptocurrency
                          accounts
                        </p>
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
export default CryptoAppPage;
