import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = props => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="Small Business Theme. Multiple content types using Markdown and JSON sources. Responsive design and SCSS. This is a beautiful and artfully designed starting theme."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>Healthcare Systems and Services</h1>
          <p>Solutions for a changing market.</p>
        </div>
      </div>

      <div className="container pt-2">
        <Call
          name="Larry Litman"
          phone="602 - 300 - 8519"
          email="Llitman@healthcaresystemsandservices.com"
          button
        />
      </div>

      <div className="container pt-2">
        <Call
          name="Tyler Litman"
          phone="602 - 391 - 9071"
          email="Tlitman@healthcaresystemsandservices.com"
          button
        />
      </div>

      <div className="container pt-8 pt-md-10">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
          {markdown.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-4 mb-1"
            >
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>
                      {edge.node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link
              className="button button-primary mt-2"
              to="/services"
              style={{ marginBottom: '100px' }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
