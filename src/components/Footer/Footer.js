import React from 'react'
import '../Footer/Footer.css'
import logo from "../Navbar/kk-logo.png"

const Footer = () => {
  return (
    <div className='main_footer'>
      <footer id="dk-footer" class="dk-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-4">
              <div class="dk-footer-box-info">
                <a href="/" class="footer-logo">
                  <img src={logo} alt="footer_logo" class="img-fluid logo1" />
                </a>
                <p class="footer-info-text">
                  Visit our gadget store to find cool and useful things! Get the latest tech and stylish accessories that make life easier. Upgrade your lifestyle with the newest gadgets that are both smart and stylish. Start shopping now for things that look good and work well!
                </p>
                <div class="footer-social-link">
                  <h3>Follow us</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Social link */}
              </div>
              {/* End Footer info */}
              <div class="footer-awarad">
                <img src={logo} className='logo' alt="icon" />
                <p>KK Premium Gadgets</p>
              </div>
            </div>
            {/* End Col */}
            <div class="col-md-12 col-lg-8">
              <div class="row">
                <div class="col-md-6">
                  <div class="contact-us">
                    <div class="contact-icon">
                      <i class="fa fa-map-o" aria-hidden="true"></i>
                    </div>
                    {/* End contact Icon */}
                    <div class="contact-info">
                      <h3>Opposite to D C Model, Railway Station Road, Ferozepur Cantt,</h3>
                      <p>Punjab, India 152001</p>

                    </div>
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
                <div class="col-md-6">
                  <div class="contact-us contact-us-last">
                    <div class="contact-icon">
                      <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                    </div>
                    {/* End contact Icon */}
                    <div class="contact-info">
                      <h3>8146655564</h3>
                      <h3>8728045600</h3>
                      <p>Give us a call</p>
                    </div>
                    {/* End Contact Info */}
                  </div>
                  {/* End Contact Us */}
                </div>
                {/* End Col */}
              </div>
              {/* End Contact Row */}
              <div class="row">
                <div class="col-md-12 col-lg-6">
                  <div class="footer-widget footer-left-widget">
                    <div class="section-heading">
                      <h3>Useful Links</h3>
                      <span class="animate-border border-black"></span>
                    </div>
                    <ul>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Projects</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                  {/* End Footer Widget */}
                </div>
                {/* End col */}
                <div class="col-md-12 col-lg-6">
                  <div class="footer-widget">
                    <div class="section-heading">
                      <h3>Subscribe</h3>
                      <span class="animate-border border-black"></span>
                    </div>
                    <p> Don’t miss to subscribe to our new feeds, kindly fill the form below.
                      Reference site about all the updated gadgets from KK Premiums, giving information on its origins, as well.</p>
                    <form action="#">
                      <div class="form-row">
                        <div class="col dk-footer-form">
                          <input type="email" class="form-control" placeholder="Email Address" />
                          <button type="submit">
                            <i class="fa fa-send custom-send-icon"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* End form */}
                  </div>
                  {/* End footer widget */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Widget Row */}
        </div>
        {/* End Contact Container */}


        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <span>Copyright © 2019, All Right Reserved Altaf_Khan & SmartX Solution Team</span>
              </div>
              <div class="col-md-6">
                <div class="copyright-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;