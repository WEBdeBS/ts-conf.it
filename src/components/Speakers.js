import React from 'react'
import { Link } from 'gatsby'

const Speakers = class extends React.Component {
  render() {
    return (
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-4" data-aos-disabled="fade-up" data-aos-delay="100">
              <div class="site-section-heading">
                <h2>Speakers</h2>
              </div>
            </div>
            <div class="col-lg-5 mt-5 pl-lg-5" data-aos-disabled="fade-up" data-aos-delay="200">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
            </div>
          </div>
          {/* spearker 1 */}
          <div class="row align-items-center speaker">
            <div class="col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/person_1.jpg" alt="Image" class="img-fluid" />
          </div>
              <div class="col-lg-6 ml-auto">
                <h2 class="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">Emely Peters</h2>
                <div class="bio pl-lg-5">
                  <span class="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Web Designer</span>
                  <p class="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                  <p data-aos-disabled="fade-right" data-aos-delay="500">
                    Follow Emely &mdash;
                <a href="#" class="p-2"><span class="icon-facebook"></span></a>
                    <a href="#" class="p-2"><span class="icon-twitter"></span></a>
                    <a href="#" class="p-2"><span class="icon-github"></span></a>
                  </p>
                </div>
              </div>
            </div>

          {/* spearker 2 
          <div class="row align-items-center speaker">
            <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/person_2.jpg" alt="Image" class="img-fluid" />
        </div>
              <div class="col-lg-6 ml-auto order-lg-1">
                <h2 class="text-white mb-4 name" data-aos-disabled="fade-left" data-aos-delay="200">Alex Anchor</h2>
                <div class="bio pr-lg-5">
                  <span class="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-left" data-aos-delay="300">Web Designer</span>
                  <p class="mb-4" data-aos-disabled="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                  <p data-aos-disabled="fade-left" data-aos-delay="500">
                    Follow Alex &mdash;
              <a href="#" class="p-2"><span class="icon-facebook"></span></a>
                    <a href="#" class="p-2"><span class="icon-twitter"></span></a>
                    <a href="#" class="p-2"><span class="icon-github"></span></a>
                  </p>
                </div>
              </div>
            </div>
          */}

          {/* spearker 3 
          <div class="row align-items-center speaker">
              <div class="col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
                <img src="images/person_3.jpg" alt="Image" class="img-fluid" />
        </div>
                <div class="col-lg-6 ml-auto">
                  <h2 class="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">Aaron Thomas</h2>
                  <div class="bio pl-lg-5">
                    <span class="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Web Designer</span>
                    <p class="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                    <p data-aos-disabled="fade-right" data-aos-delay="500">
                      Follow Aaron &mdash;
              <a href="#" class="p-2"><span class="icon-facebook"></span></a>
                      <a href="#" class="p-2"><span class="icon-twitter"></span></a>
                      <a href="#" class="p-2"><span class="icon-github"></span></a>
                    </p>
                  </div>
                </div>
              </div>
          */}

          {/* spearker 4 
          <div class="row align-items-center speaker">
                <div class="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
                  <img src="images/person_4.jpg" alt="Image" class="img-fluid" />
        </div>
                  <div class="col-lg-6 ml-auto order-lg-1">
                    <h2 class="text-white mb-4 name" data-aos-disabled="fade-left" data-aos-delay="200">Chris Mathews</h2>
                    <div class="bio pr-lg-5">
                      <span class="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-left" data-aos-delay="300">Web Designer</span>
                      <p class="mb-4" data-aos-disabled="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                      <p data-aos-disabled="fade-left" data-aos-delay="500">
                        Follow Chris &mdash;
              <a href="#" class="p-2"><span class="icon-facebook"></span></a>
                        <a href="#" class="p-2"><span class="icon-twitter"></span></a>
                        <a href="#" class="p-2"><span class="icon-github"></span></a>
                      </p>
                    </div>
                  </div>
                </div>
          */}

        </div>
      </div>

    )
  }
}

export default Speakers


