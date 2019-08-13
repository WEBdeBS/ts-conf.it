import React from 'react'

const MediaPartner = class extends React.Component {
  render() {
    return (
      <div className="site-section media-partner">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4 ">
              <div className="site-section-heading" data-aos-disabled="fade-up">
                <h2>Media Partner</h2>
              </div>
            </div>
          </div>
          <div className="row mb-5 media-partner__logos">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="300">
              <a href="https://brewbox.community/" target="_blank" alt="Brewbox">
              <img src="/images/brewbox.svg" alt="Brewbox" className="img-fluid img-full" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="400">
              <a href="https://associazione.python.it/" target="_blank" alt="Python Italia">
              <img src="/images/python_italia.png" alt="Python Italia" className="img-fluid img-full" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="400">
              <a href="#" target="_blank" alt="DoItBetter">
              <img src="/images/doitbetter.svg" alt="Do It Better" className="img-fluid img-full" />
              </a>
            </div>
          </div>
          <div className="row mb-5 media-partner__logos">
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="200">
              <a href="https://www.grusp.org/" target="_blank" alt="Grusp">
              <img src="/images/grusp.svg" alt="GRUSP" className="img-fluid img-full" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="200">
              <a href="https://cremaweb.org/" target="_blank" alt="CremaWeb">
              <img src="/images/cremaweb.png" alt="CremaWeb" className="img-fluid img-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MediaPartner


