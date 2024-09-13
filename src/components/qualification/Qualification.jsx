import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification" className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personal journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i> Education
          </div>

          <div
            className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
          </div>
        </div>

        <div className='qualification__sections'>
          {/* Education Section */}
          <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Higher National Diploma</h3>
                <span className='qualification__subtitle'>Science Laboratory Technology</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2016 - 2018
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'>Trained</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2021 - 2023
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Developer</h3>
                <span className='qualification__subtitle'>Freelance</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Ethical Hacker</h3>
                <span className='qualification__subtitle'>Trained</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2023 - Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
