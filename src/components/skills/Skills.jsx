import React from 'react'
import "./skills.css";
import Hacking from './Hacking';
import WebDev from './WebDev';

const Skills = () => {
  return (
    <section className='skills secion' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My technical level</span>

        <div className='skills__container container grid'>
            <Hacking/>
            <WebDev/>
        </div>
    </section>
  )
}

export default Skills