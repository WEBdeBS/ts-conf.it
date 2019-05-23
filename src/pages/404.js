import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'

const NotFoundPage = () => (
  <Layout>
    <Header></Header>

    <div className="site-section code-of-conduct">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="site-section-heading" data-aos-disabled="fade-up">
              <h2 className="d-block mb-4" data-aos-disabled="fade-up" data-aos-delay="200">Not Found</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>                        
            <a href="/" class="btn-custom" data-aos-disabled="fade-up" data-aos-delay="400"><span>Back to home</span></a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
