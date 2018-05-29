import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import PortfolioItem from '../components/PortfolioItem/PortfolioItem';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const portfolioItems = config.portfolioItems.map((item, index) => <PortfolioItem key={index} {...item} />);
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <header className="hero">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="hero-content">
            <h1>
              Andrew<br /> Hill
            </h1>
            <div className="hero-card">
              <div className="hero-card-image">
                <img src="profile.jpg" alt="Andrew Hill Profile" />
              </div>
              <h2>Glad to see you!</h2>
              <p>
                I am a 23 year old web developer located in Louisville,
                Kentucky. I have a passion for working with new technologies and
                take any opportunity I can get to lead an effort to adopt the
                latest and greatest.
              </p>
              <p>
                I'm currently most interested in Angular, NodeJS, and Express
                with some interest in ReactJS, but I am familiar with much more.
                If you're interested in that list, take a look at my resume.
              </p>
              <button className="primary">Get in touch</button>
            </div>
          </div>
        </header>
        <nav className="dark-background">
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <main>
          <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-items-container">{portfolioItems}</div>
          </section>
          {/* <PostListing postEdges={postEdges} /> */}
        </main>
        <Footer config={config} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
