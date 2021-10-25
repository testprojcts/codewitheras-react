import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <footer className='center'>
        <div className='left__footer'>
          <div className='left__footer_hd'>
            <h3>About</h3>
          </div>
          <div className='left__footer_txt'>
            <p>
              Founded in 2021 in Ghana, Codewitheras was derived under the
              mindset to help the young African youth interested in technology
              to acquire the necessary skills they need to transform Africa to
              the world of technology.
            </p>
          </div>
          <div className='left__footer_form'>
            <form netlify>
              {/* Message box Image or Icon goes here... */}
              <input
                type='email'
                name='newsletter'
                id='newletterEmail'
                placeholder='Email Address'
              />
              <button type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
        <div className='right__footer'>
          <div className='footer__contact'>
            <div className='footer__heading'>
              <h3>Contact</h3>
            </div>
            <ul>
              <li>Accra</li>
              <li>Ghana</li>
              <li>Off Oyarifa Road</li>
              <li>Republic Of Ghana</li>
              <li>Email: codewitheras00@gmail.com</li>
              <li>+233 5511 86991</li>
            </ul>
          </div>
          <div className='footer__contact'>
            <div className='footer__heading'>
              <h3>Info</h3>
            </div>
            <ul>
              <li>
                <a href='/'>Scholarships</a>
              </li>
              <li>
                <a href='/'>Courses</a>
              </li>
              <li>
                <a href='/'>Coaches</a>
              </li>
              <li>
                <a href='/'>Live Classes</a>
              </li>
              <li>
                <a href='/'>Tour</a>
              </li>
              <li>
                <a href='/'>Discord Community</a>
              </li>
            </ul>
          </div>
          <div className='footer__contact'>
            <div className='footer__heading'>
              <h3>Follow us</h3>
            </div>
            <ul>
              <li>
                <a href='/'>Instagram</a>
              </li>
              <li>
                <a href='/'>Facebook</a>
              </li>
              <li>
                <a href='/'>Twitter</a>
              </li>
              <li>
                <a href='/'>LinkedIn</a>
              </li>
              <li>
                <a href='/'>Discord</a>
              </li>
              <li>
                <a href='/'>Telegram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
