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
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/speaker1.png" alt="Image" className="img-fluid" />
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
                  <a href="https://twitter.com/cloudify" target="_blank" 
                  className="p-2"><span className="icon-twitter"></span></a>
                  <a href="https://federicoferoldi.com/" target="_blank" 
                  className="p-2"><span className="icon-globe"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr/>

          {/* spearker 2 */}
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
            <img src="images/speaker2.png" alt="Image" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="lg-5 mb-4">
              <h2 className="text-white mb-4 name" data-aos-disabled="fade-left" data-aos-delay="200">Migrating large codebase to TypeScript</h2>
              As a growing startup with large JavaScript codebase we’ve made the transition to TypeScript and survived to tell the tale!
              It wasn’t easy to make the decision but only half year later we feel like the investment already paid off.
              We looked back and identified many Dos and Don’ts to talk about.
              <br />
              <br />
              It’s 2019 and TypeScript is the obvious choice for every new project. But if your codebase is JavaScript how do you make the switch?
  
              Facing a quarter million lines of code – a messy mixture of untyped or poorly flow-typed JavaScript – our team of 15 at productboard absolutely knew we wanted to make the switch, but the barrier to entry looked very high.
              
              A half a year later, 85% of the codebase is strictly typed TypeScript and our confidence over the code has increased tremendously.
              
              In this talk I’d like to share our experience and answer the following questions:
              <ul>
                <li>How we convinced management it was worth the effort?</li>
                <li>How we approached the migration and how we phase it?</li>
                <li>How we learned to best collaborate as a team?</li>
                <li>What we’d do differently next time?</li>
                  <li>We learned a lot along the way and are eager to share it with all the other teams, because we believe everyone deserves TypeScript!</li>
              </ul>
            </div>
            <div className="bio pr-lg-5">
                <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Vojta Prikryl</span>
              <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">
                "I am Frontend developer at productboard, helping various companies around the globe with building better products. As a developer I always try to go one step further towards excellence. The best feeling is when even my designer is surprised about the result. I like delightful UIs and my most favourite interaction is Drag and Drop."
              </p>
              <p data-aos-disabled="fade-left" data-aos-delay="500">
                  Follow Vojta &mdash;
                  <a href="http://twitter.com/vojta_prikryl" target="_blank"  className="p-2"><span className="icon-twitter"></span></a>
                  <a href="https://www.productboard.com/blog" target="_blank" className="p-2"><span className="icon-globe"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr/>

          {/* spearker 3 */}
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/speaker3.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className=" pl-lg-5 mb-4">
                <h2 className="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">Full-stack type safety with TypeScript and io-ts</h2>
                Ever wondered what going full-stack TypeScript means for your day-to-day workflow? In this talk we’ll see how to exploit the TS type system and the io-ts library to provide a “full-stack type-safe” development experience for a project comprising a Node.js HTTP API and a single page web application.
                <br />
                <br />
                In this talk we’ll see how developing on the same language and technologies full-stack can lead to a smooth developer experience with strong assurances of correctness at build-time. I’ll present the awesome io-ts library by Giulio Canti and a few key concepts of the TS type-system, and we’ll build upon these to live-code a custom solution to meet our needs. We’ll also briefly discuss other related topics, such as JSON (de)serialization and API error handling, and compare what we obtained with other available solutions.
              </div>
              <div className="bio pl-lg-5">
                <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Giovanni Gonzaga</span>
                <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">
                  Giovanni works at <a href="https://www.buildo.io/" target="_blank">Buildo</a> as technical lead on areas related to frontend development and TypeScript. He gained experience working as a freelancer in Italy and the US for several years. Passionate about next-generation web technologies, programming languages, functional programming and aviation. Before co-founding buildo, he founded a consultancy agency in Italy and has been research assistant at UIC, where he focused on security related to compilers and operating systems. He graduated from UIC with a Master’s in Computer Science and from Politecnico di Milano with a Master’s in Computer Engineering.
                </p>
                <p data-aos-disabled="fade-right" data-aos-delay="500">
                  Follow Giovanni &mdash;
                  <a href="https://twitter.com/giogonzo" target="_blank"
                    className="p-2"><span className="icon-twitter"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr />


        </div>
      </div>

    )
  }
}

export default Speakers


