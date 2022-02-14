import React from "react";

import Layout from "../components/layout/layout";
import Projects from "../components/projects/projects";
import SEO from "../components/seo";
import "animate.css/animate.min.css";
import headshot from "../images/headshot.png";

import "./index.scss";

const IndexPage = () => {
  return (
    <Layout id={1}>
      <SEO title="Home" />
      <p className="name-small-screen">Caleb Whitmore</p>
      <h1 className="title">
        Senior Designer at Microsoft. <br />
        Lover of pixels
      </h1>
      <Projects />
      <div className="about">
        <img src={headshot}></img>
        <div>
          <h4>A little bit about me</h4>
          <p>
            Born in '93, I grew up in Hampshire - a county in the south of
            England. In 2016 I graduated with a degree in Product design at
            Brunel University London, after completing an exchange at TU Delft
            in the Netherlands. Shortly after I started at Microsoft on Outlook.
            <br></br>
            <br></br>I love learning, and owning as much process as I can - from
            user research to pixel pushing, and even front end development. My
            day to day varies from initial research and strategy all the way
            through to final UI proposals and prototypes.
            <br></br>
            <br></br>
            I've been in the industry for 5 years, and possess a diverse
            skillset spanning both digital and physical. I like to work on
            meaningful products and live for a good design system. Outside of
            work you can find me cycling, playing basketball, or tinkering with
            a new hobby (3d printing is the latest one).
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
