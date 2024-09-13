import React, { useState } from 'react';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil-shield-check services__icon'></i>
            <h3 className='services__title'>Penetration <br /> Testing</h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>View More 
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

              <h3 className='services__modal-title'>Penetration Testing</h3>
              <p className='services__modal-description'>With 1 year of experience in ethical hacking, I offer comprehensive penetration testing to identify and secure vulnerabilities in your systems.</p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Network security assessments.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Web application security testing.</p>
                </li>
                {/* <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Cloud infrastructure security review.</p>
                </li> */}
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Detailed vulnerability reports and remediation guidance.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-lock services__icon'></i>
            <h3 className='services__title'>Incident <br /> Response</h3>
          </div>

          <span onClick={() => toggleTab(2)} className='services__button'>View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

              <h3 className='services__modal-title'>Incident Response</h3>
              <p className='services__modal-description'>Providing rapid and effective incident response services to mitigate security breaches and minimize damage to your organization.</p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Real-time threat analysis and containment.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Forensic investigation and root cause analysis.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Post-incident security improvement plans.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-database services__icon'></i>
            <h3 className='services__title'>Vulnerability <br /> Management</h3>
          </div>

          <span onClick={() => toggleTab(3)}>View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

              <h3 className='services__modal-title'>Vulnerability Management</h3>
              <p className='services__modal-description'>Offering proactive management of vulnerabilities to reduce security risks and protect your organization from future threats.</p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Regular vulnerability scanning and patch management.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Automated and manual threat detection.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Comprehensive security audits and risk assessments.</p>
                </li>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Continuous monitoring and reporting.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
