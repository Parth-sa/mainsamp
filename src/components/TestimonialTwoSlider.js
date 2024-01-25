/* eslint-disable @next/next/no-img-element */

import { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import { testimonialslidertwo } from "../sliderProps";
import BaseUrl from "./Baseurl";
import axios from "axios";

const TestimonialTwoSlider = () => {
  const [clients, setClients] = useState();
  const clientsList = async () => {
    const res = await axios.get(`${BaseUrl}/clients`);
    setClients(res.data.data);
  };
  useEffect(() => {
    clientsList();
  }, []);

  return (
    <Fragment>
      {" "}
      <Slider {...testimonialslidertwo} className="testimonial-slider-two row">
        {/* {clients?.map((client,index) => {
          return (
            <>
            <div key={index} className="testimonial-item">
              <div className="content">
                <p>
                  {client.review}
                </p>
              </div>
              <div className="author">
                <div className="author-photo">
                  <img src={client.file} alt="clients" />
                </div>
                <div className="author-info">
                  <h4 className="name">{client.name}</h4>
                  <span className="title">{client.position}</span>
                </div>
              </div>
            </div>
            </>
          );
        })} */}

        <div className="testimonial-item">
          <div className="content">
            <p>
              I got my mobile application developed by Samp Technologies, and I
              feel the team perfectly delivers the expected end product. I was
              happy with the liveliness and services they provided for our
              company. Great User Experience. Good Job Guys!!
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img src="/assets/img/author/Male1.jpg" alt="William P. Harris" />
            </div>
            <div className="author-info">
              <h4 className="name">John Ward</h4>
              <span className="title">CEO</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              Samp Technologies has served me with a faultless app to enhance my
              clientele with ease. Their development team understood my
              requirements and came up with a solution beyond my expectations.
              The app they developed for us allows our company to streamline
              busy schedules and utilize time efficiently.
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img src="/assets/img/author/Male2.jpg" alt="William P. Harris" />
            </div>
            <div className="author-info">
              <h4 className="name">Jane Harrison</h4>
              <span className="title">COO</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              The team at Samp Technologies is engaged and passionate about the
              work. They built our new portal with an eye on mobile
              accessibility from the start, which was helpful. The final site
              continues to perform well and is stable at scale.
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img
                src="/assets/img/author/Female2.jpg"
                alt="William P. Harris"
              />
            </div>
            <div className="author-info">
              <h4 className="name">Ivica Sopkic</h4>
              <span className="title">Founder</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              I appreciated the approach taken by Samp Technologies. Plans were
              laid out very clearly with direct goals in mind. The fact that one
              of the companys co-founders took such an active interest in my
              little project gave the project a greater sense of importance.
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img src="/assets/img/author/Male3.jpg" alt="William P. Harris" />
            </div>
            <div className="author-info">
              <h4 className="name">Bill McCormick</h4>
              <span className="title">Project Manager</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              They did everything and more for us, from small features and bug
              fixes to large stand-alone modules in the product. They took the
              majority of the technology initiative after we provided our
              projected business direction for it and determined the feasibility
              within our financial and timeline constraints.
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img src="/assets/img/author/Male4.jpg" alt="William P. Harris" />
            </div>
            <div className="author-info">
              <h4 className="name">Pavel Choulguine</h4>
              <span className="title">Manager</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              Dhruv & team are pro at their job, and the thing I appreciate most
              was the communication. I was always in the loop through daily
              stand-up meetings, and they were always accessible when needed.
              Dhruv was great at looking ahead and identifying
              risks/complexities, and the entire team was very good at
              completing quality work on time.
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img
                src="/assets/img/author/Female3.jpg"
                alt="William P. Harris"
              />
            </div>
            <div className="author-info">
              <h4 className="name">Edward Wong</h4>
              <span className="title">Project Manager</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              We’ve accomplished important things by adding Samp Technologies
              developers to the team. They enabled us to have high codebase test
              coverage and bring industry best practices to our team. The team
              delivered high-quality solutions and industry best practices to
              the engagement, establishing a trusting relationship.
              
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img src="/assets/img/author/Male5.jpg" alt="William P. Harris" />
            </div>
            <div className="author-info">
              <h4 className="name">Gerónimo De Abreu</h4>
              <span className="title">CEO</span>
            </div>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="content">
            <p>
              Their degree of professionalism and systematic approach to
              software development were quite impressive. I liked that they are
              upfront and transparent about what they can and cannot do and
              when. The project management style of Samp Technologies was fluid
              and efficient.
            </p>
          </div>
          <div className="author">
            <div className="author-photo">
              <img src="/assets/img/author/Male6.jpg" alt="William P. Harris" />
            </div>
            <div className="author-info">
              <h4 className="name">Walid AL-FAQ</h4>
              <span className="title">Manager</span>
            </div>
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};
export default TestimonialTwoSlider;
