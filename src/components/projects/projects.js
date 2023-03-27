import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Project from "../project/project";

import "./projects.scss";

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              firstName
              secondName
            }
          }
          allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
            edges {
              node {
                excerpt
                fields {
                  slug
                }
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
                  tags
                  projectImage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 3000
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="projects">
          {data.allMarkdownRemark.edges.map(({ node, index }) => {
            return <Project project={node} key={index} index={index} />;
          })}
        </div>
      )}
    />
  );
}

export default Projects
