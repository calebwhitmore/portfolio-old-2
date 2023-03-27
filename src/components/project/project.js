import React from "react";
import {Link} from "gatsby-link";
import { GatsbyImage } from "gatsby-plugin-image";

import "./project.scss";

const Project = (props) => {
  return (
    <Link to={props.project.fields.slug} className="project-container">
      <div className="project link">
        <div className="projectTileText">
          <h1>{props.project.frontmatter.title}</h1>
          <p>{props.project.frontmatter.tags}</p>
        </div>
        <GatsbyImage
          className="post-image"
          image={
            props.project.frontmatter.projectImage.childImageSharp.gatsbyImageData
          }
          alt={props.project.frontmatter.projectImageAltTag}
        />
      </div>
    </Link>
  );
}

export default Project;
