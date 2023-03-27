import React from "react";

import Layout from "../components/layout/layout";
import Projects from "../components/projects/projects";
import SEO from "../components/seo";

import "./index.scss";

const IndexPage = () => {
  return (
    <Layout id={1}>
      <SEO title="Home" />
      <div className="body-text">
        <h1 className="title ">Hi, I'm Caleb.</h1>
        <p className="description">
          I'm a multi-disciplinary designer that loves craft.
          <br></br>
          <br></br>Welcome to my portfolio website: my own little corner of the
          web. Here you'll find a variety of projects that span the digital and
          the physical. Unless otherwise stated the projects are completely my
          own. I trained as an Industrial designer in school, but have been
          working in software design over the past 7 years. You'll see a mix of
          work here; some projects completed in spare time and some completed
          through my profession.<br></br>
          <br></br> Find me on
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/caleb-whitmore/"
          >
            LinkedIn{" "}
          </a>
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/caleb-whitmore/"
          >
            Twitter{" "}
          </a>
          and
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/caleb-whitmore/"
          >
            Dribbble{" "}
          </a>
        </p>
      </div>
      <Projects />
    </Layout>
  );
};

export default IndexPage;
