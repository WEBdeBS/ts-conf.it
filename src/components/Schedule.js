import React from 'react'
import { Link } from 'gatsby'

const Schedule = class extends React.Component {
  render() {
    return (
      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up">
              <div className="site-section-heading">
                <h2>Schedule</h2>
              </div>
            </div>
            <div className="col-lg-6 mt-5 pl-lg-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
            </div>
          </div>

          <div className="row align-items-stretch program">
            <div className="col-12 border-top border-bottom py-5 aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <div className="row align-items-stretch">
                <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">8:00</span> <span>AM</span></div>
                <div className="col-md-9">
                  <h2 className="text-white">Design your open source strategy</h2>
                  <span>Chris Mathews</span>
                </div>
              </div>
            </div>

            <div className="col-12 border-bottom py-5 aos-init aos-animate" data-aos="fade" data-aos-delay="300">
              <div className="row align-items-stretch">
                <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">9:30</span> <span>AM</span></div>
                <div className="col-md-9">
                  <h2 className="text-white">Design your open source strategy</h2>
                  <span>Chris Mathews</span>
                </div>
              </div>
            </div>

            <div className="col-12 border-bottom py-5 aos-init aos-animate" data-aos="fade" data-aos-delay="400">
              <div className="row align-items-stretch">
                <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">10:30</span> <span>AM</span></div>
                <div className="col-md-9">
                  <h2 className="text-white">Design your open source strategy</h2>
                  <span>Chris Mathews</span>
                </div>
              </div>
            </div>

            <div className="col-12 border-bottom py-5 aos-init aos-animate" data-aos="fade" data-aos-delay="500">
              <div className="row align-items-stretch">
                <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">10:45</span> <span>NOON</span></div>
                <div className="col-md-9">
                  <h2 className="text-white">Break With Snacks</h2>
                </div>
              </div>
            </div>

            <div className="col-12 border-bottom py-5 aos-init aos-animate" data-aos="fade" data-aos-delay="600">
              <div className="row align-items-stretch">
                <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">11:30</span> <span>AM</span></div>
                <div className="col-md-9">
                  <h2 className="text-white">Design your open source strategy</h2>
                  <span>Chris Mathews</span>
                </div>
              </div>
            </div>

            <div className="col-12 border-bottom py-5 aos-init aos-animate" data-aos="fade" data-aos-delay="700">
              <div className="row align-items-stretch">
                <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">12:00</span> <span>NOON</span></div>
                <div className="col-md-9">
                  <h2 className="text-white">Break For Lunch</h2>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default Schedule


