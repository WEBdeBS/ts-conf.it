import React from 'react'
import { Link } from 'gatsby'

const Sponsors = class extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 ">
              <div className="site-section-heading" data-aos-disabled="fade-up">
                <h2>Sponsors</h2>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="200">
              <img src="/images/logo_1.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="300">
              <img src="/images/logo_2.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="400">
              <img src="/images/logo_3.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="500">
              <img src="/images/logo_4.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="600">
              <img src="/images/logo_5.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="700">
              <img src="/images/logo_6.png" alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsors


