import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "./about.scss";
import headshot from "../images/on-rock.png";

const AboutPage = () => {
  return (
    <Layout id={1}>
      <SEO title="about" />
      <div className="aboutContainer">
          <div className="body-text">
            <h1 className="title">About </h1>
            <p className="description">
              Born in '93, I grew up in Hampshire - a county in the south of
              England. As a child I was always fascinated with the made world -
              the material objects around me and how they were created. At
              school I was drawn towards technology and the arts. Then at
              university I progressed towards the world of design, studying
              Product Design at Brunel University London, with an exchange at TU
              Delft in the Netherlands. Since graduating in 2016 I've been at
              Microsoft.
              <br></br>
            </p>
            <img src={headshot} />
            <p className="description">
              <br></br>
              At university my studies were mainly focused on the Physical.
              Brunel is well known in the UK for it's approach to Industrial
              Design: with a focus on engineering and feasibility. While on
              exchange at TU Delft I learnt a lot about form through sketching,
              CAD and rendering. I transitioned to UX after gaining a passion
              for Software in my third year and while my day job is very much
              Software focused, I still enjoy practicing the design of physical
              products in my spare time.
              <br></br>
              <br></br>I love learning, and owning as much process as I can -
              from user research to pixel pushing, and a little front end
              development. My day to day varies from initial research and
              strategy all the way through to final UI proposals and prototypes.
              <br></br>
              <br></br>
              I've been in the industry since 2015, and possess a diverse
              skillset spanning both digital and physical. I like to work on
              meaningful products and live for a good design system. Outside of
              work you can find me cycling, playing basketball, or tinkering
              with a new hobby (3D printing is the latest one).
            </p>
          </div>
        <div className="history">
        <div className="history-item">
            <h4>2022</h4>
            <div>
              <p>Moved to San Francisco</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2021</h4>
            <div>
              <p>Freelanced with TruckSmarter</p>
              <p>Joined the Outlook Mac and Mobile team</p>
              <p>Serif e-reader concept</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2020</h4>
            <div>
              <p>Promoted to Senior Designer</p>
              <p>Learnt Protopie</p>
              <p>Started 3D printing</p>
              <p>Viewfinder Camera Project</p>
              <p>Micasa Project</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2019</h4>
            <div>
              <p>Learnt Protopie</p>
              <p>Design Icons Project</p>
              <p>Mouse Redesign Project</p>
              <p>Learned Gatsby</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2018</h4>
            <div>
              <p>Promoted to Designer 2</p>
              <p>Moved to Seattle to work at Microsoft HQ</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2017</h4>
            <div>
              <p>Learned the basics of React for web</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2016</h4>
            <div>
              <p>
                Moved to Vancouver to work remotely as part of the Outlook Web
                Team
              </p>
              <p>
                Graduated from Brunel University with a Bachelor of Science in
                Product Design
              </p>
            </div>
          </div>
          <div className="history-item">
            <h4>2015</h4>
            <div>
              <p>Interned at Microsoft</p>
              <p>Study exchange at TU Delft in the Netherlands</p>
              <p>Learned basics of web design and development</p>
              <p>Launched my first web Portfolio</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2013</h4>
            <div>
              <p>Enrolled at Brunel University Studying Product Design</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2010</h4>
            <div>
              <p>Started at Peter Symonds College</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2008</h4>
            <div>
              <p>
                First experience with UI design - customizing UBUNTU on my acer
                aspire one.
              </p>
            </div>
          </div>
          <div className="history-item">
            <h4>2006</h4>
            <div>
              <p>
                Did my first sketch of a consumer product - a PDA (anyone
                remember palm?)
              </p>
              <p>Started sketching mobile phones</p>
            </div>
          </div>
          <div className="history-item">
            <h4>2004</h4>
            <div>
              <p>Started at Cantell Secondary School</p>
            </div>
          </div>
          <div className="history-item">
            <h4>1997</h4>
            <div>
              <p>Started at Mansbridge Primary School</p>
            </div>
          </div>
          <div className="history-item">
            <h4>1993</h4>
            <div>
              <p>Born in home town of Southampton, Hampshire.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
