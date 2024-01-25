/* eslint-disable @next/next/no-img-element */

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const LatestProjectsIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-items", {
        itemSelector: ".filter-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="portfolio-filter">
        <ul style={{ backgroundColor: "#f0f4fe", borderRadius: "50px" }}>
          <li
            data-filter="*"
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            All
          </li>
          <li
            data-filter=".design"
            className={`c-pointer ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            Web Development
          </li>
          <li
            data-filter=".motions"
            className={`c-pointer ${activeBtn("motions")}`}
            onClick={handleFilterKeyChange("motions")}
          >
            App Development
          </li>
          <li
            data-filter=".graphics"
            className={`c-pointer ${activeBtn("graphics")}`}
            onClick={handleFilterKeyChange("graphics")}
          >
            Game Development
          </li>
          <li
            data-filter=".uiux"
            className={`c-pointer ${activeBtn("uiux")}`}
            onClick={handleFilterKeyChange("uiux")}
          >
            UI/UX
          </li>
        </ul>
      </div>

      <div className="row filter-items">
        <div className="col-lg-4 col-sm-6 filter-item design">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/Health_Main.png" alt="Image" />
              <Link href="reality-health">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="reality-health">Reality Health</Link>
              </h4>
              <div className="categories">
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 filter-item motions branding">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/App-1.png" alt="Image" />
              <Link href="crypto-app">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="crypto-app">Crypto App</Link>
              </h4>
              <div className="categories">
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 filter-item design">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/Tourlife_Main.png" alt="Image" />
              <Link href="tour-life">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="tour-life">TourLife</Link>
              </h4>
              <div className="categories">
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 filter-item motions branding">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/App-2.png" alt="Image" />
              <Link href="drive-io">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="drive-io">Drive.io</Link>
              </h4>
              <div className="categories">
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 filter-item design">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/CRM_Main.png" alt="Image" />
              <Link href="crm">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="crm">CRM</Link>
              </h4>
              <div className="categories">
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 filter-item motions branding">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/fitness_main.png" alt="Image" />
              <Link href="/fitness">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="/fitness">Fitness</Link>
              </h4>
              <div className="categories"></div>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-sm-6 filter-item uiux">
          <div className="portfolio-items-two mt-50">
            <div className="portfolio-thumb">
              <img src="/assets/img/portfolio/workout_main.png" alt="Image" />
              <Link href="workout">
                <a className="portfolio-link" />
              </Link>
            </div>
            <div className="portfolio-content">
              <h4 className="title">
                <Link href="workout">Workout</Link>
              </h4>
              <div className="categories"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LatestProjectsIsotop;
