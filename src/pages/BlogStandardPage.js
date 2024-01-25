/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Paggination from "../components/Paggination";
import PageTitle from "../layout/PageTitle";
import { getPagination, pagination } from "../utils";

const BlogStandardPage = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".single-blog-post", sort, active);
    let list = document.querySelectorAll(".single-blog-post");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Fragment>
      <section className="blog-area section-gap overflow-hidden page_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-loop pr-xl-5">
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/dynamic_web.png" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="dynamic-website">Web Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 24 December 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="dynamic-website">
                        <a>
                          The Necessity of a Dynamic Website in this Digital
                          World
                        </a>
                      </Link>
                    </h3>
                    <p>
                      In the current Techno-oriented world, numerous websites
                      are offering products and services. But, developing the
                      website just for the namesake isn’t enough, it requires
                      ample time, effort, and proper guidance to develop a
                      perfect web design efficiently in a way that suits and
                      compiles with the web standards and structures.
                    </p>
                    <a href="dynamic-website" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/mobile_app.png" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="mobile-app">Mobile App Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 17 March 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="mobile-app">
                        <a>Latest Trends in Mobile Application Development</a>
                      </Link>
                    </h3>
                    <p>
                      It is no wonder that the Mobile App industry is
                      flourishing, with about 3.2 billion smartphone users
                      worldwide. Application consumption and mobile penetration
                      are rapidly rising, with little evidence that in the near
                      future they will slow down.
                    </p>
                    <a href="mobile-app" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/unity.png" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="unity">Mobile App Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 19 April 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="unity">
                        <a>
                          Unity 2D/ 3D - The most preferable game development
                          platform
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Today, the majority of people are virtually stuck with
                      their cell phones. It seems that we are very dependent on
                      our smartphones. We mostly talk with friends,swipe through
                      social media, browse the Web and play online games, to
                      keep our minds occupied. There are around 2.2 billion
                      active mobile gamers worldwide.
                    </p>
                    <a href="unity" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/web_sales.png" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="website-sales">Web Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 17 June 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="website-sales">
                        <a>A Quick Guide for generating Website Sales</a>
                      </Link>
                    </h3>
                    <p>
                      Website Marketing and Sales are crucial to sustain and
                      increase your turnover. The way to get your target
                      audience over your website and convert them into your real
                      customer is difficult to choose.
                    </p>
                    <a href="website-sales" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img
                      src="../assets/img/blog/digital_marketing.png"
                      alt="Image"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="digital-marketing-aegncy">Digital Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 05 July 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="digital-marketing-aegncy">
                        <a>
                          Reasons why every business need to hire a Professional
                          Digital Marketing Agency
                        </a>
                      </Link>
                    </h3>
                    <p>
                      A Decade Ago, There was no existence of Digital Marketing
                      / online marketing, and was considered an inappropriate
                      way to promote products and services. Hardly, few
                      companies adopted it as the best technique to market
                      themselves.
                    </p>
                    <a href="digital-marketing-aegncy" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/ui_ux.png" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="ui-ux">Mobile App Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 24 July 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="ui-ux">
                        <a>Latest UI/UX Design Trends to Follow in 2021</a>
                      </Link>
                    </h3>
                    <p>
                      Research demonstrates that design leads to positive first
                      impressions of web and mobile users. The most important
                      facilities for visitors, who visit your virtual presence,
                      are the visual appeal and ease of use. In this context,
                      the work of experience designers is vital to a successful
                      online presence as it enables users to achieve their
                      objectives.
                    </p>
                    <a href="ui-ux" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img
                      src="../assets/img/blog/entrepreneurs.png"
                      alt="Image"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="entrepreneur">Lead Genration</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 22 Aug 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="entrepreneur">
                        <a>
                          How entrepreneurs can grow their business through
                          digital marketing resources?
                        </a>
                      </Link>
                    </h3>
                    <p>
                      The era of the Internet and the concept of going digital
                      have led to an increased in the use of the internet and
                      digital marketing practices. The entire world is aware of
                      the terms digital marketing and internet marketing. The
                      era of the Internet has made it necessary to establish
                      digital identity to sustain in the highly competitive
                      market.
                    </p>
                    <a href="entrepreneur" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/aso_seo.png" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="seo-aso">Digital Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 18 Sep 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="seo-aso">
                        <a>
                          Web Ranking Tools - A complete Guide on the Web
                          ranking tool with reference to SEO and ASO
                        </a>
                      </Link>
                    </h3>
                    <p>
                      The era of digitalization is growing at a fast pace and
                      adopting digitalization to grow your business is the need
                      of the hour. Nowadays, owning a website is the most common
                      step taken by almost every organization, but what’s the
                      use of the website
                    </p>
                    <a href="seo-aso" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img
                      src="../assets/img/blog/insta_new_update.png"
                      alt="Image"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="insta-new-update">Digital Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 11 Nov 2022
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="insta-new-update">
                        <a>
                          Instagram new update - Instagram swipe up links to be
                          replaced with link stickers
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Instagram is one of the most used social media platforms
                      for social media marketing that helps in increasing brand
                      awareness, getting quality leads and it is also used for
                      entertainment purposes.
                    </p>
                    <a href="insta-new-update" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                {/* <div className="single-blog-post no-thumbnail">
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Mobile App Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                        Latest Trends in Mobile Application Developments
                        </a>
                      </Link>
                    </h3>
                    <p>
                    It is no wonder that the Mobile App industry is flourishing, with about 3.2 billion smartphone users worldwide. 
                    Application consumption and mobile penetration are rapidly rising, with little evidence that in the near future they will slow down.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post video-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/02.jpg" alt="Image" />
                    <a
                      href="https://www.youtube.com/watch?v=XSGBVzeBUbk"
                      className="video-popup"
                      data-lity=""
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Mobile App Development</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> Dhruv Narola
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                        Unity 2D/ 3D - The most preferable game development platform
                        </a>
                      </Link>
                    </h3>
                    <p>
                    Today, the majority of people are virtually stuck with their cell phones. 
                    It seems that we are very dependent on our smartphones. We mostly talk with friends,swipe through social media, browse the 
                    Web and play online games, to keep our minds occupied. There are around 2.2 billion active mobile gamers worldwide.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="single-blog-post quote-post">
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Understanding CSS Grid Creating Container Smashing
                          Guide World Of Search
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="single-blog-post">
                  <div className="post-thumbnail">
                    <img src="../assets/img/blog/03.jpg" alt="Image" />
                  </div>
                  <div className="post-content">
                    <div className="post-categories">
                      <a href="#">Marketing</a>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" /> David D. Ansley
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Sep 2021
                        </a>
                      </li>
                    </ul>
                    <h3 className="post-title">
                      <Link href="/blog-details">
                        <a>
                          Front-End Performance Checklist 2021 PDF, Apple Pages,
                          MS Word
                        </a>
                      </Link>
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua psum
                      suspendisse ultrices gravida.
                    </p>
                    <a href="#" className="post-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </a>
                  </div>
                </div> */}
              </div>{" "}
              <ul className="page-pagination">
                <Paggination
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="primary-sidebar">
                <div className="widget search-widget">
                  <h4 className="search-title">Search Here</h4>
                  <form>
                    <input type="search" placeholder="Keywords" />
                    <button className="search-btn">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget category-widget">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-link">
                    <li>
                      <a href="dynamic-website">Web Development</a>
                    </li>
                    {/* <li>
                      <a href="#">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#">IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#">Business Consulting</a>
                    </li> */}
                    <li>
                      <a href="mobile-app">Mobile Apps Development</a>
                    </li>
                    <li>
                      <a href="seo-aso">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="entrepreneur">Lead Genration</a>
                    </li>
                    <li>
                      <a href="unity">Game Development</a>
                    </li>
                  </ul>
                </div>
                <div className="widget latest-post-widget">
                  <h4 className="widget-title">Latest News</h4>
                  <div className="popular-posts-wrapper">
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="ui-ux">
                          <a>
                            {/* <div className="blog_small"> */}
                            <img
                              className="blog_small"
                              src="../assets/img/blog/ui_ux.png"
                              alt="latest post one"
                              width="400"
                              height="300"
                            />
                            {/* </div> */}
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="ui-ux">
                            <a>Latest UI/UX Design Trends to Follow in 2021</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 26 july 2022
                        </a>
                      </div>
                    </div>
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="insta-new-update">
                          <a>
                            <img
                              className="blog_small"
                              src="../assets/img/blog/insta_new_update.png"
                              alt="latest post two"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="insta-new-update">
                            <a>Instagram new update</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 22 Sep 2022
                        </a>
                      </div>
                    </div>
                    <div className="popular-posts-item">
                      <div className="popular-posts-thumbnail">
                        <Link href="website-sales">
                          <a>
                            <img
                              className="blog_small"
                              src="../assets/img/blog/web_sales.png"
                              alt="latest post three"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="popular-posts-item-content">
                        <h5 className="popular-posts-title">
                          <Link href="website-sales">
                            <a>How to generate Website sales</a>
                          </Link>
                        </h5>
                        <a href="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 17 March 2022
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="widget cta-widget"
                  style={{
                    backgroundImage: "url(../assets/img/blog/cta-widget.jpg)",
                  }}
                >
                  <h4 className="cta-title">Get Free Consultations</h4>
                  <span className="subtitle">Talk to our Experts</span>
                  <p>Get your Project Done in very Affordable price</p>
                  <a href="contact" className="cta-btn">
                    Let’s Talk <i className="far fa-long-arrow-right" />
                  </a>
                </div>
                <div className="widget widget-tag-cloud">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tags">
                    <a href="web-app-development">Web Development</a>
                    <a href="mobile-app-development">Mobile App Development</a>
                    <a href="blockchain-nft">Blockchain</a>
                    <a href="blockchain-nft">Cryptocurrency</a>
                    <a href="game-development">Game Development</a>
                    {/* <a href="#">nensi dalsaniya</a>
                    <a href="#">Management</a>
                    <a href="#">Planning</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default BlogStandardPage;
