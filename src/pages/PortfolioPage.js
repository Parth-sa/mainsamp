import dynamic from "next/dynamic";
import { Fragment } from "react";
import PageTitle from "../layout/PageTitle";
const LatestProjectsIsotop = dynamic(
  () => import("../components/LatestProjectsIsotop"),
  {
    ssr: false,
  }
);

const PortfolioPage = () => {
  return (
    <Fragment>
      <section className="portfolio-section section-gap page_top">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <h2 className="title">The Work which Defines Samp Technologies</h2>
            <span className="tagline">
              Have a Glance at our professional and creative work which we have
              delivered within the time limit and with 100% client satisfaction.
            </span>
          </div>
          <LatestProjectsIsotop />
        </div>
      </section>
    </Fragment>
  );
};
export default PortfolioPage;
