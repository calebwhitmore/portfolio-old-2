import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import onRock2 from "../assets/on-rock3.png";
import "animate.css/animate.min.css";
import "./about.scss";

const AboutPage = () => {
  return (
    <Layout id={1}>
      <SEO title="about" />
      <h2 className="title">A little bit about me.</h2>
      <div className="aboutContainer">
        <div className="headshot">
          <img className="landscape" src={onRock2} alt="Caleb's hand"></img>
        </div>
        <div className="body-text">
          <p>
            Born in '93, I grew up in Hampshire. In 2016 I graduated with a
            degree in Product design at Brunel University London, after
            completing an exchange at TU Delft in the Netherlands. Shortly after
            I started at Microsoft on Outlook - one of the worlds largest email
            clients.
          </p>
          <p>
            I love learning, and owning as much process as I can - from user
            research to pixel pushing, and even front end development. My day to
            day varies from initial research and strategy all the way through to
            final UI proposals and prototypes. 
          </p>
          <p>
            I've been in the industry for 5 years, and possess a diverse
            skillset spanning both digital and physical. I like to work on
            meaningful products and live for a good design system.
          </p>
          <p>
            Outside of work you can find me cycling, playing pick up basketball,
            or tinkering with a new hobby (3d printing is the latest one).
          </p>

          <div className="history">
            <div className="history-item">
              <h4>2021</h4>
              <p>Joined the Outlook Mac and Mobile team</p>
              <p>Serif e-reader concept</p>
            </div>
            <div className="history-item">
              <h4>2020</h4>
              <p>Promoted to Senior Designer</p>
              <p>Learnt Protopie</p>
              <p>Started 3D printing</p>
              <p>Viewfinder Camera Project</p>
              <p>Micasa Project</p>
            </div>
            <div className="history-item">
              <h4>2019</h4>
              <p>Learnt Protopie</p>
              <p>Design Icons Project</p>
              <p>Mouse Redesign Project</p>
              <p>Learned Gatsby</p>
            </div>
            <div className="history-item">
              <h4>2018</h4>
              <p>Promoted to Designer 2</p>
              <p>Moved to Seattle to work at Microsoft HQ</p>
            </div>
            <div className="history-item">
              <h4>2017</h4>
              <p>Learned the basics of React for web</p>
            </div>
            <div className="history-item">
              <h4>2016</h4>
              <p>
                Moved to Vancouver to work remotely as part of the Outlook Web
                Team
              </p>
              <p>
                Graduated from Brunel University with a Bachelor of Science in
                Product Design
              </p>
            </div>
            <div className="history-item">
              <h4>2015</h4>
              <p>Interned at Microsoft</p>
              <p>Study exchange at TU Delft in the Netherlands</p>
              <p>Learned basics of web design and development</p>
              <p>Launched my first web Portfolio</p>
            </div>
            <div className="history-item">
              <h4>2013</h4>
              <p>Enrolled at Brunel University Studying Product Design</p>
            </div>
            <div className="history-item">
              <h4>2010</h4>
              <p>Started at Peter Symonds College</p>
            </div>
            <div className="history-item">
              <h4>2008</h4>
              <p>
                First experience with UI design - customizing UBUNTU on my acer
                aspire one.
              </p>
            </div>
            <div className="history-item">
              <h4>2006</h4>
              <p>
                Did my first sketch of a consumer product - a PDA (anyone
                remember palm?)
              </p>
              <p>Started sketching mobile phones</p>
            </div>
            <div className="history-item">
              <h4>2004</h4>
              <p>Started at Cantell Secondary School</p>
            </div>
            <div className="history-item">
              <h4>1997</h4>
              <p>Started at Mansbridge Primary School</p>
            </div>
            <div className="history-item">
              <h4>1993</h4>
              <p>Born in home town of Southampton, Hampshire.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
