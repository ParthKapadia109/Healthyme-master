import React from 'react'
import logo from '../assets/mylogo2.png'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom';
import ShortcutIcon from '@mui/icons-material/Shortcut';

const Footer = () => {

  const clickToTop = () => {
    window.scrollTo(0, 0)
  };

  return (
    <section className='footer'>
      <div className='row'>
        <div className='col-md-6'>
          <h1>Keep Healthy.</h1>
          <span className='subs'>Subscribe to keep Healthy updates.</span>
          <form>
            <input className='form-control' name='Email' id='email' autoComplete='true' type="email" placeholder='Enter your email here' />
            <button type='submit'><ShortcutIcon/></button>
          </form>

          <div className='footer-logo' onClick={clickToTop}>
            <img src={logo} alt="logo" />
            <span>Keep Healthy</span>
            <br />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='footer-info'>
            <ul>
              <Link to='/about'>
                <li>How Keep Healthy Works?</li>
              </Link>
              <Link to='/blogs'>
                <li>Blogs</li>
              </Link>
              <Link to='/meals'>
                <li>Meals</li>
              </Link>
              <Link to='/contact'>
                <li>Contact Us</li>
              </Link>
              <Link to='/faq'>
                <li>FAQ</li>
              </Link>
            </ul>
            <div className='footer-sm'>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer
