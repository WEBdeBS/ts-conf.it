import React from 'react'
import { Link } from 'gatsby'

const Sponsors = class extends React.Component {
  render() {
    return (
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-4 ">
              <div class="site-section-heading" data-aos-disabled="fade-up">
                <h2>Sponsors</h2>
              </div>
            </div>
            <div class="col-lg-6 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="100">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="200">
              <img src="/images/logo_1.png" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="300">
              <img src="/images/logo_2.png" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="400">
              <img src="/images/logo_3.png" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="500">
              <img src="/images/logo_4.png" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="600">
              <img src="/images/logo_5.png" alt="Image" class="img-fluid" />
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="700">
              <img src="/images/logo_6.png" alt="Image" class="img-fluid" />
            </div>
          </div>
          <div class="row" data-aos-disabled="fade-up" data-aos-delay="500">
            <div class="col-12 text-center pt-5">
              <a href="#" class="btn-custom" data-aos-disabled="fade-up" data-aos-delay="800"><span>Be a Sponsor</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsors


