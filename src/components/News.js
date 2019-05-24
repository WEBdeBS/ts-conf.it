import React from 'react'
import { Link } from 'gatsby'

const News = class extends React.Component {
  render() {
    return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="site-section-heading" data-aos-disabled="fade-up">
              <h2>News</h2>
            </div>
          </div>
          <div className="col-lg-6 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="100">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 blog-entry"  data-aos-disabled="fade-up" data-aos-delay="200">
            <a href="#" className="d-block mb-4">
              <img src="/images/person_1.jpg" alt="Image" className="img-fluid" /> 
            </a>
            <h2 className="mb-4"><a href="#">Design your open source strategy</a></h2>
            <div className="mb-4 post-meta d-flex align-items-center">
              <div className="mr-2"><img src="/images/person_1.jpg" alt="Image" className="img-fluid" /></div>
              <div><span>By <a href="#">Emely Peters</a></span> &mdash; <span>Sep. 10, 2019</span></div> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 blog-entry" data-aos-disabled="fade-up" data-aos-delay="300">
            <a href="#" className="d-block mb-4">
              <img src="/images/person_1.jpg" alt="Image" className="img-fluid" /> 
            </a>
            <h2 className="mb-4"><a href="#">Design your open source strategy</a></h2>
            <div className="mb-4 post-meta d-flex align-items-center">
              <div className="mr-2"><img src="/images/person_1.jpg" alt="Image" className="img-fluid" /></div>
              <div><span>By <a href="#">Emely Peters</a></span> &mdash; <span>Sep. 10, 2019</span></div> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 blog-entry" data-aos-disabled="fade-up" data-aos-delay="400">
            <a href="#" className="d-block mb-4">
              <img src="/images/person_1.jpg" alt="Image" className="img-fluid" /> 
            </a>
            <h2 className="mb-4"><a href="#">Design your open source strategy</a></h2>
            <div className="mb-4 post-meta d-flex align-items-center">
              <div className="mr-2"><img src="/images/person_1.jpg" alt="Image" className="img-fluid" /></div>
              <div><span>By <a href="#">Emely Peters</a></span> &mdash; <span>Sep. 10, 2019</span></div> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus.</p>
          </div>

        </div>
        <div className="row" data-aos-disabled="fade-up" data-aos-delay="500">
          <div className="col-12 text-center">
            <a href="#" className="btn-custom" data-aos-disabled="fade-up" data-aos-delay="400"><span>More Blog Posts</span></a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default News


