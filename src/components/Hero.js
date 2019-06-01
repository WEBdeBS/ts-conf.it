import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Hero = class extends React.Component {
  render() {
    return (
      <div className="site-section site-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span className="d-block mb-3 caption" data-aos-disabled="fade-up" data-aos-delay="100">Independent Italian TypeScript Conference</span>
              <h1 className="d-block mb-4" data-aos-disabled="fade-up" data-aos-delay="200">TSconf 2019</h1>
              <span className="d-block mb-5 caption" data-aos-disabled="fade-up" data-aos-delay="300">October 25th, Desenzano del Garda, Italy</span>
              {/*<a href="#" className="btn-custom" data-aos-disabled="fade-up" data-aos-delay="400"><span>Buy Tickets</span></a>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
