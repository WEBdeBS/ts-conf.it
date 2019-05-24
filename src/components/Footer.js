import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <h2 className="footer-heading text-uppercase mb-4">About Event</h2>
              <p>A new amazing conference by WEBdeBS! On 25 October 2019 unite with the whole Italian TypeScript Community!</p>
            </div>
            <div className="col-md-3 ml-auto">
              <h2 className="footer-heading text-uppercase mb-4">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#call-for-paper">Call for paper</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#code-of-conduct">Code of Conduct</a></li>
                <li><a href="#location">Location</a></li>
                {/* <li><a href="/about">About Us</a></li>
                <li><a href="/speakers">Speakers</a></li>
                <li><a href="/tickets">Tickets</a></li>
                <li><a href="/contact">Contact Us</a></li> */}
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="footer-heading text-uppercase mb-4">Connect with Us</h2>
              <p>
                <a href="https://www.facebook.com/webdebs/" className="p-2 pl-0" target="_blank"><span className="icon-facebook"></span></a>
                <a href="https://twitter.com/ConfTs" className="p-2" target="_blank"><span className="icon-twitter"></span></a>
              </p>
            </div>
          </div>
          <div className="row">

            <div className="col-md-12 text-center">
              <div className="border-top pt-5">
                <p>
                  Copyright © WEBdeBS 2019
                  <br/>
                  WEBdeBS - Associazione di Promozione Sociale senza scopo di lucro <a href="http://www.webdebs.org" target="_blank" rel="noopener noreferrer">www.webdebs.org</a> - <a href="mailto:info@webdebs.org">info@webdebs.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
