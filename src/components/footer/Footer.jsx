import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Ovie</h1>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>About</a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>Projects</a>
          </li>

          <li>
            <a href='#testimonials' className='footer__link'>Testimonials</a>
          </li>
        </ul>

        <div className='footer__social'>
        <a href='https://x.com/OvieErhauyi' className='home__social-icon' target='_blank'>
        <i class="uil uil-x"></i>
        </a>

        <a href='https://www.linkedin.com/in/ovie-erhauyi-b36258215' className='home__social-icon' target='_blank'>
        <i class="uil uil-linkedin"></i>
        </a>

        <a href='https://github.com/Erhauyi-ovie' className='home__social-icon' target='_blank'>
            <i class="uil uil-github"></i>
        </a>
        </div>

        <span className='footer__copy'>&#169; CyberKing. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer