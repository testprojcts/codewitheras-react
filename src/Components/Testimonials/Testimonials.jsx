import React from 'react';
import './Testimonial.css';

import NetflixClone from './../../assets/Netflix-clone.png';

const Testimonials = () => {
  return (
    <section class='testimonials'>
      <div class='testimonial-container'>
        <div class='testimony-hd'>
          <h3>What Our Students Say</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat
            culpa consequuntur in, hic sapiente!
          </p>
        </div>
        <div class='testimony center'>
          <div class='testimony-img'>
            <img src={NetflixClone} alt='' />
          </div>
          <div class='testimony-txt'>
            <blockquote>
              "Talent is Universal, But Oppurtunities are not. With Access to
              online Learning Resources and instruction, Anyone, Anywhere can
              gain skills and transform their lives in meaningful ways."
            </blockquote>
            <div class='testimony-user-info'>
              <span class='border-left'></span>
              <div class='user-info'>
                <h4>Loren Bullington</h4>
                <small>Software Enginner</small>
              </div>
            </div>
          </div>
        </div>
        <div class='testimony center'>
          <div class='testimony-txt'>
            <blockquote>
              "Talent is Universal, But Oppurtunities are not. With Access to
              online Learning Resources and instruction, Anyone, Anywhere can
              gain skills and transform their lives in meaningful ways."
            </blockquote>
            <div class='testimony-user-info'>
              <span class='border-left'></span>
              <div class='user-info'>
                <h4>Erasmus Mensah</h4>
                <small>Founder / Frontend Web Developer</small>
              </div>
            </div>
          </div>
          <div class='testimony-img'>
            <img src={NetflixClone} alt='' />
          </div>
        </div>
        <div class='testimony center'>
          <div class='testimony-img' id='plan'>
            <img src={NetflixClone} alt='' />
          </div>
          <div class='testimony-txt'>
            <div class='testimony-hd'>
              <h3>Helping People Grow Their Careers In Tech.</h3>
            </div>
            <blockquote id='tech-speech'>
              Wisdom cannot be imparted. Wisdom that a wise man attempts to
              impart always sounds like foolishness to someone else... Knowledge
              can be communicated, butnot wisdom. One can find it, live it, do
              wonders through it, but one cannot communicate and teach it.
            </blockquote>
            <div class='testimony-user-info'>
              <a href='coursePages/courses.html'> Start Learning </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
