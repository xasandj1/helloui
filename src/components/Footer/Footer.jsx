import React from 'react'
import images from '../../data/images'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-content_top'>
            <h2 className='footer-content_top-title'>It’s easy to  get started. Start now.</h2>
            <form className='footer-content_top-form'>
              <input type="email" placeholder='Enter your email' className='footer-content_top-form_search' autoComplete='off' required />
              <button type='submit' className='footer-content_top-form_btn'>Get Started</button>
            </form>
          </div>
          <div className='footer-content_spellon row'>
            <div className='footer-content_spellon-info col-12 col-lg-4'>
              <h5>Spellon.</h5>
              <p>Nort West, South New Work,United State</p>
              <a href="tel:+1 246-254-0569">+1 246-254-0569</a>
              <a href="mailto:Info@example.com">Info@example.com</a>
              <a href="#!"><img src={images.icon} alt="" /></a>
            </div>
            <div className='footer-content_spellon-info col-12 col-lg-3'>
              <h5>Resources</h5>
              <ul>
              <li><a href="#!">Docs</a> </li>
              <li><a href="#!">Forums</a> </li>
              <li><a href="#!">Jobs</a> </li>
              <li><a href="#!">Join Discord</a></li>
              <li><a href="#!">Consultants</a> </li>
              </ul>
            </div>
            <div className='footer-content_spellon-info col-12 col-lg-3'>
              <h5>Company</h5> <ul>
              <li><a href="#!">Careers</a> </li>
              <li><a href="#!">About Us</a> </li>
              <li><a href="#!">Block Chain</a> </li>
              <li><a href="#!">Privacy Policy</a></li>
              <li><a href="#!">Terms & Condition</a> </li>
              </ul>
            </div>
            <div className='footer-content_spellon-info col-12 col-lg-2'>
              <h5>Legal</h5>
              <ul>
              <li><a href="#!">Terms of use</a> </li>
              <li><a href="#!">Privacy policy</a> </li>
              <li><a href="#!">Jobs</a> </li>
              <li><a href="#!">GDPR/CCPA explained</a></li>
              <li><a href="#!">Guidlines</a> </li>
              </ul>
            </div>
          </div>
          <p className='footer-content_txt'>&copy; 2022 Created by Xasan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer