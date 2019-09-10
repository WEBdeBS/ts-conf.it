import React from 'react'

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
              <img src="images/speaker1.png" alt="Federico Feroldi" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className=" pl-lg-5 mb-4">
                <h2 className="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">TypeScript, Open Source and the Government: the birth of IO.italia.it</h2>
                I'll talk about what is probably one of the biggest open source projects written entirely in TypeScript: IO.italia.it, an app and a platform API that helps people interact with the national and local Government.
                <br/>
                <br />
                We started working on IO at the beginning of 2017, in two and half years we've written almost 60K lines (and counting) of TypeScript code between the mobile app (React Native) and the backend (Express and Azure Functions).
I'll talk about the history of the project, the technical and architectural choices we made, the libraries and the tools we use and we contributed to the community and how TypeScript helps us to write better, more solid and more secure code.
              </div>
              <div className="bio pl-lg-5">
                <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Federico Feroldi</span>
                <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">
                  I've written my first web app a little more than 20 years ago (in Perl) and since then I've never stopped enjoying building digital products.
<br/>I've worked for small startups, big megacorporates and I've also co-founded a few startups, giving me the chance to live and work in Italy, UK, US and Germany and have the opportunity to work with quality teams and exceptional people.
                  <br />I love writing as much as reading other people's code, if you'd like a feedback just send me a code review request on github :) 
                </p>
                <p data-aos-disabled="fade-right" data-aos-delay="500">
                  Follow Federico &mdash;
                  <a href="https://twitter.com/cloudify" target="_blank" rel="noopener noreferrer"
                  className="p-2"><span className="icon-twitter"></span></a>
                  <a href="https://federicoferoldi.com/" target="_blank" rel="noopener"
                  className="p-2"><span className="icon-globe"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr/>

          {/* spearker 2 */}
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
            <img src="images/speaker2.png" alt="Vojta Prikryl" className="img-fluid" />
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
                  <a href="http://twitter.com/vojta_prikryl" target="_blank" rel="noopener noreferrer" className="p-2"><span className="icon-twitter"></span></a>
                  <a href="https://www.productboard.com/blog" target="_blank" rel="noopener" className="p-2"><span className="icon-globe"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr/>

          {/* spearker 3 */}
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/speaker3.png" alt="Giovanni Gonzaga" className="img-fluid" />
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
                  Giovanni works at <a href="https://www.buildo.io/" target="_blank" rel="noopener noreferrer">Buildo</a> as technical lead on areas related to frontend development and TypeScript. He gained experience working as a freelancer in Italy and the US for several years. Passionate about next-generation web technologies, programming languages, functional programming and aviation. Before co-founding buildo, he founded a consultancy agency in Italy and has been research assistant at UIC, where he focused on security related to compilers and operating systems. He graduated from UIC with a Master’s in Computer Science and from Politecnico di Milano with a Master’s in Computer Engineering.
                </p>
                <p data-aos-disabled="fade-right" data-aos-delay="500">
                  Follow Giovanni &mdash;
                  <a href="https://twitter.com/giogonzo" target="_blank"  rel="noopener noreferrer"
                    className="p-2"><span className="icon-twitter"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr />

          {/* spearker 4 */}
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2" data-aos-disabled="fade" data-aos-delay="100">
            <img src="images/speaker4.png" alt="Daniel Ostrovsky" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="lg-5 mb-4">
                <h2 className="text-white mb-4 name" data-aos-disabled="fade-left" data-aos-delay="200">Fall in Love With TS Decorators</h2>
              Decorators is one of the most underrated features in TS. At the same time is one of the most life changing features. Once you get it your, life will never be the same. We will start from basics definitions and go all the way to advanced real life examples and use cases.
              <br />
              <br />
             Decorators are incredibly cool. They allow you to describe meta data directly in the class declaration, grouping everything in one place and avoiding duplication. Terribly addictive. Once having tried, you will use it forever However the decorators in TypeScript are not as simple as we would like. Working with them requires some skills.
   <br/>
   In this talk we will try to cover:
      <br />
      <ul>
                  <li>Prologue
                    <ul>
                  <li>Decorators in TC39 stage 2. meaning and when to expect.</li>
                  <li>Babel</li>
                  <li>Frameworks uses decorators (Angular, NestJS, MobiX…)</li>
                    </ul>
                  </li>
                  <li>Intro
                <ul>
                  <li>Descriptor and why it’s matter</li>
                  <li>Simple logger decorator (livecoding)</li>
                </ul>
                  </li>
                  <li>Method decorator
                <ul>
                  <li>Run time</li>
                  <li>Validators (livecoding)</li>
                  <li>memoize (livecoding)</li>
                  </ul>
                  </li>
                  <li>Method’s param decorator
               <ul>
                  <li>Why it’s so cool</li>
                  <li>Real life examples (livecoding)</li>
                </ul>
                  </li>
                  <li>Class Decorators (livecoding)
                      <ul>
                  <li>Class Composition</li>
                  <li>Class mixing</li>
                </ul>
                  </li>
                  <li>Advances (optionally)
                    <ul>
                  <li>Reflection, metadata</li>
                  <li>Use cases and examples (livecoding)</li>
                </ul>
                  </li>
                  A coding is worth a thousand words….
   </ul>
            </div>
            <div className="bio pr-lg-5">
                <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Daniel Ostrovsky</span>
              <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">
                Web development (Full Cycle) expert and teams manager with over twenty years of experience in the industry.
  
  Contact & coordination with many people/groups worldwide: R&D, Marketing, QA, Customer Support. R&D Management, managing the outsourced development teams. Demonstrated success in motivating, coaching, and leading technical design teams to achieve results. Design, development, testing, and maintenance of complex web-based software systems; hands-on in various WEB technologies.
  
  I’m passionate about family, about my gorgeous wife and my adorable kids. In my free time, I’m “The Best Developer in The World” based on my wife’s ranking.
              </p>
              <p data-aos-disabled="fade-left" data-aos-delay="500">
                  Follow Daniel &mdash;
                  <a href="http://twitter.com/danduh81" target="_blank" rel="noopener noreferrer" className="p-2"><span className="icon-twitter"></span></a>
                  <a href="https://medium.com/@danduh" target="_blank" rel="noopener noreferrer" className="p-2"><span className="icon-globe"></span></a>
                </p>
              </div>
            </div>
          </div>
          <hr/>

          {/* spearker 5 */}
          <div className="row -align-items-center speaker">
            <div className="col-lg-4 mb-5 mb-lg-0" data-aos-disabled="fade" data-aos-delay="100">
              <img src="images/speaker5.png" alt="Massimiliano Mantione" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className=" pl-lg-5 mb-4">
                <h2 className="text-white mb-4 name" data-aos-disabled="fade-right" data-aos-delay="200">The Cost of Abstractions</h2>
                As programmers we use abstractions all the time, but do we ever care about their costs? In this talk we’ll benchmark several implementations of a small but significant piece of code, using different abstractions to make it “better” but also measuring their cost in several dimensions.
                <br />
                <br />
                In this talk we’ll focus on the cost of abstractions, and how they impact the quality of the resulting code.<br/>
                We’ll consider the following costs:
                <ul>
                  <li>computational complexity (CPU resources used)</li>
                  <li>code size (including eventual dependencies)</li>
                  <li>eventually memory usage</li>
                  <li>code complexity and maintainability (they should get better using abstractions)</li>
                  <li>cognitive overhead (how hard it is to understand the abstraction)</li>
                </ul>
                The piece of code we’ll use is small enough to be understood by the audience in a minute, but it is realistic and could be used in production both in a front end and in a back end.<br/>
                As abstractions we’ll gradually introduce types and functional constructs. Then we’ll also show a Rust implementation using the same abstractions (this is significant because the language claims to support “zero cost abstractions”), running both as native code and as a WASM module, and compare it to the Typescript one. Finally we’ll also investigate how AssemblyScript influences the costs.
              </div>
              <div className="bio pl-lg-5">
                <span className="text-uppercase text-primary d-block mb-3" data-aos-disabled="fade-right" data-aos-delay="300">Massimiliano Mantione</span>
                <p className="mb-4" data-aos-disabled="fade-right" data-aos-delay="400">
                  I am a software engineer, mostly interested in programming languages and compilers. 
                  I started as a Javascript hater but this changed after I worked in the V8 team in Google for about one year and half, and now I am using Typescript regularly to make JS “bearable”. 
                  Currently I am working on a virtual reality system for business events on the web: <a href="https://www.hyperfair.com/" target="_blank" rel="noopener">Hyperfair</a>.
                </p>
                <p data-aos-disabled="fade-right" data-aos-delay="500">
                  Follow Massimiliano &mdash;
                  <a href="https://twitter.com/M_a_s_s_i" target="_blank" rel="noopener noreferrer"
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

