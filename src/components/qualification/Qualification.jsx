import React from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = React.useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Technology <br /> in Computer Science and
                  Enginnering <br /> (AI and ML)
                </h3>
                <span className="qualification__subtitle">
                  Techno Main Salt Lake, <br /> Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Higher Secondary School
                </h3>
                <span className="qualification__subtitle">
                  Nava Nalanda High School <br /> (H.S. Dept.), <br /> Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019-2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  Nava Nalanda High School, <br />
                  Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2007-2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Research and Development Intern, ISG Devops Team
                </h3>
                <span className="qualification__subtitle">Keysight Technologies, Kolkata</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Google Cloud Arcade Facilitator
                </h3>
                <span className="qualification__subtitle">
                  Google Cloud Arcade Facilitator Program '24
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Technical Head, Jt. Convener
                </h3>
                <span className="qualification__subtitle">Samarth, TMSL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Google Cloud Arcade Facilitator
                </h3>
                <span className="qualification__subtitle">
                  Google Cloud Arcade Facilitator Program '23
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Co-Head</h3>
                <span className="qualification__subtitle">Samarth, TMSL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
