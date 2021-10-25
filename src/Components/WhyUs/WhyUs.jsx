import React from 'react';
import './WhyUs.css';
import CodeSvg1 from './../../assets/undraw images/CodeSvg1.png';
import CodeSvg2 from './../../assets/undraw images/CodeSvg2.png';

const WhyUs = () => {
  return (
    //   Why learn With Klass
    <section className='learn-with-us'>
      <div className='learn-container'>
        <div className='learn-hd'>
          <h3>Why Learn With Codewitheras?</h3>
        </div>
        <div className='learn-cards'>
          <div className='learn-card'>
            <div className='card_img'>
              <img src={CodeSvg1} alt='' />
            </div>
            <h4>Learn By Doing</h4>
            <p>
              Bye bye static videos! Our interactive screencasts lets you edit
              the teacher's code.
            </p>
          </div>
          <div className='learn-card'>
            <div className='card_img'>
              <img src={CodeSvg2} alt='' />
            </div>
            <h4>Learn With Others</h4>
            <p>
              Codewitheras is more than just courses, you'll join a community of
              learners across the globe.
            </p>
          </div>
          <div className='learn-card'>
            <div className='card_img'>
              <img src={CodeSvg1} alt='' />
            </div>
            <h4>Learn By Watching</h4>
            <p>
              Static video! Our interactive screencasts lets you edit the
              teacher's code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
