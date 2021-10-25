import React from 'react';
import './Testimonial.css';

import NetflixClone from './../../assets/Netflix-clone.png';

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='testimonial-container'>
        <div className='testimony-hd'>
          <h3>What Our Students Say</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat
            culpa consequuntur in, hic sapiente!
          </p>
        </div>
        <div className='testimony center'>
          <div className='testimony-img'>
            <img src={NetflixClone} alt='' />
          </div>
          <div className='testimony-txt'>
            <blockquote>
              "Talent is Universal, But Oppurtunities are not. With Access to
              online Learning Resources and instruction, Anyone, Anywhere can
              gain skills and transform their lives in meaningful ways."
            </blockquote>
            <div className='testimony-user-info'>
              <span className='border-left'></span>
              <div className='user-info'>
                <h4>Loren Bullington</h4>
                <small>Software Enginner</small>
              </div>
            </div>
          </div>
        </div>
        <div className='testimony center'>
          <div className='testimony-txt'>
            <blockquote>
              "Talent is Universal, But Oppurtunities are not. With Access to
              online Learning Resources and instruction, Anyone, Anywhere can
              gain skills and transform their lives in meaningful ways."
            </blockquote>
            <div className='testimony-user-info'>
              <span className='border-left'></span>
              <div className='user-info'>
                <h4>Erasmus Mensah</h4>
                <small>Founder / Frontend Web Developer</small>
              </div>
            </div>
          </div>
          <div className='testimony-img'>
            <img src={NetflixClone} alt='' />
          </div>
        </div>
        <div className='testimony center'>
          <div className='testimony-img' id='plan'>
            <img src={NetflixClone} alt='' />
          </div>
          <div className='testimony-txt'>
            <div className='testimony-hd'>
              <h3>Helping People Grow Their Careers In Tech.</h3>
            </div>
            <blockquote id='tech-speech'>
              Wisdom cannot be imparted. Wisdom that a wise man attempts to
              impart always sounds like foolishness to someone else... Knowledge
              can be communicated, butnot wisdom. One can find it, live it, do
              wonders through it, but one cannot communicate and teach it.
            </blockquote>
            <div className='testimony-user-info'>
              <a href='coursePages/courses.html'> Start Learning </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
