import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/layout";
import Projects from "../components/projects/projects";
import SEO from "../components/seo";

import "./project-page.scss";

class ProjectPageTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        id={2}
        pageTitleLine1={project.frontmatter.title}
        tags={project.frontmatter.tags}
        showBack={true}
      >
        <SEO title={project.frontmatter.title} description={project.excerpt} />
        <div className="container">
          <div className="project-page">
            <div
              className="project-open-content"
              dangerouslySetInnerHTML={{ __html: project.html }}
            ></div>
          </div>
        </div>
        <div className="more-content">
          {next && (
            <Link className="previous link " to={next.fields.slug} rel="next">
              <div className="arrow">
                <p>←</p>
              </div>{" "}
              <p>
                Previous
              </p>
              <h2>
                {next.frontmatter.title}
              </h2>
            </Link>
          )}
          {previous && (
            <Link className="next link " to={previous.fields.slug} rel="prev">
              <div className="arrow">
                <p>→</p>
              </div>
              <p>
                Next
              </p>
              <h2>
                {previous.frontmatter.title}
              </h2>
            </Link>
          )}
        </div>
        {/* <Projects /> */}
      </Layout>
    );
  }
}

export default ProjectPageTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        description
      }
    }
  }
`;
