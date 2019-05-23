import React from 'react'
import { Link } from 'gatsby'

const CallForPaper = class extends React.Component {
  render() {
    return (
      <div className="site-section call-for-paper" id="call-for-paper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <h1 className="d-block mb-4" data-aos-disabled="fade-up" data-aos-delay="200">Call for paper</h1>
              <span className="d-block mb-5 caption" data-aos-disabled="fade-up" data-aos-delay="300">We are looking for awesome speakers!</span>
              <a href="https://www.papercall.io/tsconf-it" className="btn-custom" data-aos-disabled="fade-up" data-aos-delay="400"><span>Submit your talk!</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CallForPaper
