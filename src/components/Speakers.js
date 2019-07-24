import React from 'react'
import { Link } from 'gatsby'

const Speakers = class extends React.Component {
  render() {
    return (
      <div className="site-section" id="speakers">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4" data-aos-disabled="fade-up" data-aos-delay="100">
              <div className="site-section-heading">
                <h2>Speakers</h2>
              </div>
            </div>
            <div className="col-lg-6 mt-5" data-aos-disabled="fade-up" data-aos-delay="200">
              <p>More speakers to come, STAY TUNED!</p>
            </div>
          </div>
          {/* spearker 1 */}
          <div className="row align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/speaker1.jpg" alt="Image" className="img-fluid" />
          </div>
              <div className="col-lg-6">
              
              <div className=" pl-lg-5 mb-4">
                <h2 className="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">TypeScript, Open Source e il Team Digitale: la storia di io.italia.it</h2>
                Parlerò di quello che probabilmente è uno dei più corposi e complessi progetti open source scritti interamente in TypeScript (con più di 50k righe di codice) - un progetto interamente finanziato dal Governo Italiano e il cui obiettivo è rendere la vita dei cittadini italiani più semplice.
                <br/>
                <br />
                Ad inizio 2017 inizia la storia del progetto IO.italia.it, il progetto open source per sviluppare l’app dei servizi pubblici - in due anni abbiamo scritto più di 50 mila righe di codice TypeScript tra app mobile (React Native) e backend (NodeJS e Azure Functions). Racconterò la storia del progetto, le scelte tecniche, le librerie e i tool open source che abbiamo creato e come TypeScript ci abbia aiutato a scrivere codice e più sicuro e solido.
              </div>
                <div className="bio pl-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Federico Feroldi</span>
                  <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">
                    Più di vent’anni di esperienza professionale nello sviluppo di prodotti digitali tra internet companies, megacorp e startup. Ho una profonda passione per l’ingegneria del software e del paradigma funzionale. Ho iniziato programmando in C e assembly e sono passato per Ruby e Scala, finendo per passare i miei ultimi due anni programmando quasi esclusivamente in TypeScript. Se vuoi del feedback sul tuo codice, mandami una PR :)
                  </p>
                  <p data-aos-disabled="fade-right" data-aos-delay="500">
                    Follow Federico &mdash;
                  <a href="https://twitter.com/cloudify" className="p-2"><span className="icon-twitter"></span></a>
                  <a href="https://federicoferoldi.com/" className="p-2"><span className="icon-globe"></span></a>
                  </p>
                </div>
              </div>
            </div>

          {/* spearker 2 
          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
        </div>
              <div className="col-lg-6 ml-auto order-lg-1">
                <h2 className="text-white mb-4 name" data-aos-disabled="fade-left" data-aos-delay="200">Alex Anchor</h2>
                <div className="bio pr-lg-5">
                  <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-left" data-aos-delay="300">Web Designer</span>
                  <p className="mb-4" data-aos-disabled="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                  <p data-aos-disabled="fade-left" data-aos-delay="500">
                    Follow Alex &mdash;
              <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                    <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                    <a href="#" className="p-2"><span className="icon-github"></span></a>
                  </p>
                </div>
              </div>
            </div>
          */}

          {/* spearker 3 
          <div className="row align-items-center speaker">
              <div className="col-lg-6 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
                <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
        </div>
                <div className="col-lg-6 ml-auto">
                  <h2 className="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">Aaron Thomas</h2>
                  <div className="bio pl-lg-5">
                    <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Web Designer</span>
                    <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                    <p data-aos-disabled="fade-right" data-aos-delay="500">
                      Follow Aaron &mdash;
              <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                      <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                      <a href="#" className="p-2"><span className="icon-github"></span></a>
                    </p>
                  </div>
                </div>
              </div>
          */}

          {/* spearker 4 
          <div className="row align-items-center speaker">
                <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
        </div>
                  <div className="col-lg-6 ml-auto order-lg-1">
                    <h2 className="text-white mb-4 name" data-aos-disabled="fade-left" data-aos-delay="200">Chris Mathews</h2>
                    <div className="bio pr-lg-5">
                      <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-left" data-aos-delay="300">Web Designer</span>
                      <p className="mb-4" data-aos-disabled="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam</p>
                      <p data-aos-disabled="fade-left" data-aos-delay="500">
                        Follow Chris &mdash;
              <a href="#" className="p-2"><span className="icon-facebook"></span></a>
                        <a href="#" className="p-2"><span className="icon-twitter"></span></a>
                        <a href="#" className="p-2"><span className="icon-github"></span></a>
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


