import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import BaseUrl from "./Baseurl";

const FaqAccordion = ({ extraClass, extraFaq, display }) => {
  const [activeClass, setActiveClass] = useState("");
  const setActive = (value) =>
      value === activeClass ? setActiveClass("") : setActiveClass(value),
    activeClassChange = (value) =>
      value === activeClass ? "accordion-active" : "";
  const [data, setData] = useState();
  const getdata = async () => {
    const response = await axios.get(`${BaseUrl}/faq`);
    setData(response.data.data);
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <Accordion
      // className={`${extraClass ? extraClass : "accordion-bordered"}`}
      defaultActiveKey={activeClass}
      id="accordionFaqOne"
    >
      {/* <div> */}

      {/* <div className={`accordion-item ${activeClassChange("1st")}`}>
          <Accordion.Toggle
            as={"h5"}
            className="accordion-title"
            eventKey="1st"
            onClick={() => setActive("1st")}
          >
            Why Should I Choose Samp Technologies For Web and Mobile App
            Development Services?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1st">
            <div className="accordion-content">
              As a leading company in website development and Mobile APP
              Development located in Surat, we are always ready to assist all
              the client’s businesses endeavoring to have a unique and
              user-friendly website and Mobile App with an attractive design. We
              integrate different kinds of features and functionalities, within
              the website and Mobile App to maximize user engagement. We always
              create and utilize persuasive content in such a way that it
              encourages and motivates all the users to stay on the website and
              the Mobile App for a long time. We are renowned for our superior
              abilities, aptitude, commitment, originality, etc. and it helps us
              as a trustworthy brand that enables us to seize several growth
              prospects. Whether it is Website development, Mobile App
              Development works on different technologies, we are always capable
              of meeting your requirements.
            </div>
          </Accordion.Collapse>
        </div>
      </div>
      <div className={`accordion-item ${activeClassChange("2nd")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="2nd"
          onClick={() => setActive("2nd")}
        >
          What kind of Businesses and Industries do you Work With?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2nd">
          <div className="accordion-content">
            As the most trusted web development and mobile app development
            company in Surat, We provide a variety of services including website
            design and development, web app development, eCommerce development,
            Mobile App Design and Development, and much more. We provide
            creative services to businesses of all sizes that promote the
            expansion of their operations, regardless of their size, whether
            they are startups, enterprises, or well-known brands. We are your
            one-stop solution whether you need to create a new website or a
            mobile application. Our experts specialize in creating websites that
            follow your primary business needs. No matter the service you select
            from us, you can expect a top-notch solution that will benefit your
            business.
          </div>
        </Accordion.Collapse>
      </div>
      <div className={`accordion-item ${activeClassChange("3rd")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="3rd"
          onClick={() => setActive("3rd")}
        >
          Do you Support Overseas Clients?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3rd">
          <div className="accordion-content">
            Yes, currently we serve 15+ end-to-end web development and Mobile
            App Development services to 25+ countries with a dedicated and
            experienced team.
          </div>
        </Accordion.Collapse>
      </div>
      <div className={`accordion-item ${activeClassChange("4th")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="4th"
          onClick={() => setActive("4th")}
        >
          What Makes you Different from other Website Development and Mobile App
          Development Companies?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4th">
          <div className="accordion-content">
            Well, there are a few factors that set us unique from our rivals.
            The most significant one is our skill in developing a strategy. Our
            strategists can develop project development plans depending on
            client needs while keeping in mind fundamental requirements. It not
            only helps us in developing a solution that is specifically catered
            to the demands and expectations of the customer but also helps us in
            meeting deadlines Our comprehensive approach makes us the top
            website development and Mobile App Development Company in Surat. For
            the reasons listed below, you can engage us to create your website
            and Mobile App.
          </div>
        </Accordion.Collapse>
      </div> */}
      {/* {extraFaq && ( */}

      <Fragment>
        <div>
          {data?.map((faq, index) => {
            if (!window.location.pathname.includes("/faq")) {
              
              if (index < display) {
                return (
                 
                    <div
                      className={`accordion-item ${activeClassChange(
                        index + 1
                      )}`}
                      key={index}
                    >
                      <Accordion.Toggle
                      // as={"h5"}
                      // className="accordion-title"
                      // eventKey="1st"
                      // onClick={() => setActive("1st")}
                        as={"h5"}
                        className="accordion-title"
                        eventKey={index+1}
                        onClick={() => setActive(index + 1)}
                      >
                        {faq.question}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index+1}>
                        <div className="accordion-content">{faq.answer}</div>
                      </Accordion.Collapse>
                    </div>
                 
                );
              }
            } else {
              return (
               
                  <div
                    className={`accordion-item ${activeClassChange(index + 1)}`}
                key={index}
                  >
                    <Accordion.Toggle
                      as={"h5"}
                      className="accordion-title"
                      eventKey={index + 1}
                      onClick={() => setActive(index + 1)}
                    >
                      {faq.question}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index+1}>
                      <div className="accordion-content">{faq.answer}</div>
                    </Accordion.Collapse>
                  </div>
                
              );
            }
          })}
        </div>
        {/* <div className={`accordion-item ${activeClassChange("5th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="5th"
              onClick={() => setActive("5th")}
            >
              Why Every business should need a Website?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5th">
              <div className="accordion-content">
                To reach More and more customers in this digital world, it is
                very important to have an online presence. For any business, the
                only way to gain more clients is by having an online presence
                through a website or a mobile app. Having a website or mobile
                app for your business or company improves your chances of
                receiving more inquiries which in return leads to more clients.
                If you take your business seriously, you should be aware that
                having a customized website or app can give you an average rate
                of successful turnover. According to a study, it claims that 75%
                of online consumers exclusively evaluate a companys
                dependability based on its website. According to adaptive
                marketing, 97% of people used online searches to choose the
                finest business for their needs. Imagine having a website and
                app that could send out attractive marketing messages 365 days,
                to help you build your brand, reach your ideal clients, and make
                money.
                <br />
                According to records, Google will be activated by 63000 queries
                per second and 5.6 billion searches every day. Imagine many
                consumers are seeking for services comparable to what your
                business does and they can not reach you since you dont have a
                website or an APP. Now that your competitors have excellent
                website construction, they may gain from those clients. So, if
                you want to experience overall growth, you should choose to
                create a website or an app that promotes your company and draws
                in more clients.
              </div>
            </Accordion.Collapse>
          </div> */}
        {/* <div className={`accordion-item ${activeClassChange("6th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="6th"
              onClick={() => setActive("6th")}
            >
              How long will it take to deliver my website?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6th">
              <div className="accordion-content">
                The design and development of the website generally take 3 to 6
                weeks. A websites real development time relies on a variety of
                factors. It depends on the kind of website you want to create. A
                websites real development time relies on a variety of factors.
                It depends on the kind of website you want to create. We
                generally need 4 to 5 weeks to complete a simple web design for
                you. On the other side, it will take 6 to 10 weeks to develop a
                larger one, like eCommerce.
                <br />
                The features of the website are the next aspect that determines
                how long it takes to design and develop. If you integrate more
                features into the website then it will take more time. Other
                than this the number of pages, content, etc. are also a factor
                that affects the overall time for web design and development.
                Therefore, it is important to contact our executives with your
                requirements for site development. And after that, we can tell
                you exactly how long it will take our web designers and
                developers to develop the website.
              </div>
            </Accordion.Collapse>
          </div>
          <div className={`accordion-item ${activeClassChange("7th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="7th"
              onClick={() => setActive("7th")}
            >
              Will you share a proposal of How the work will be carried out
              before signing the contract?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7th">
              <div className="accordion-content">
                When a consumer approaches us to hire one of our services, we
                not hold anything back. Once we have gathered your project
                needs, we provide you with all the information you need to know
                before you sign the contract. We share every detail with you,
                from planning to strategy creation to implementation. We are
                dedicated to maintaining complete transparency so that you can
                see that your projects are being managed by professionals. Of
                course, you may anticipate that the actual outcome will meet
                your expectations.
                <br />
                We will connect with you to gather all your project requirements
                and also we will discuss our strategy in detail. we only
                implement our strategy into action if you are satisfied with it.
                Also, our specialists clarify why the strategy is suitable for
                your project. We take your advice into consideration as we
                modify our plan to be more goal-oriented. It supports us in
                meeting and exceeding your needs and expectations by delivering
                the desired solution. We use examples rather than words to
                explain things since we take a holistic approach to our work.
                Before starting to design and develop the projects, we answer
                all of our clients questions and never keep them in the dark.
              </div>
            </Accordion.Collapse>
          </div> */}
      </Fragment>
      {/* )} */}
    </Accordion>
  );
};
export default FaqAccordion;
