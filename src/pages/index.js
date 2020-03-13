import React from 'react';
import { Link } from 'gatsby';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/layout';
import { rhythm } from '../utils/typography';
import { css } from '@emotion/core';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(
      this,
      'props.data.cosmicjsSettings.metadata.site_title'
    );
    const posts = get(this, 'props.data.allCosmicjsPosts.edges');
    const author = get(this, 'props.data.cosmicjsSettings.metadata');
    const location = get(this, 'props.location');

    return (
      <Layout location={location}>
        <Helmet title={siteTitle} />
        <Bio settings={author} />
        {posts.map(({ node }) => {
          const title = get(node, 'title') || node.slug;
          return (
            <div
              key={node.slug}
              css={css`
                background: rgb(48, 52, 58);
                background: linear-gradient(
                  135deg,
                  rgba(48, 52, 58, 1) 0%,
                  rgba(33, 35, 39, 1) 100%
                );
                box-shadow: 32px 32px 32px 0px rgba(22, 23, 25, 1),
                  0 0 32px rgba(255, 255, 255, 0.05);
                border-top: 1px solid #494d57;
                border-left: 1px solid #494d57;
                padding: 32px;
                border-radius: 32px;
                margin-bottom: 48px;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 2)};
                `}
              >
                <Link style={{ boxShadow: 'none' }} to={`posts/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.created}</small>
              <p
                dangerouslySetInnerHTML={{ __html: node.metadata.description }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    allCosmicjsPosts(sort: { fields: [created], order: DESC }, limit: 1000) {
      edges {
        node {
          metadata {
            description
          }
          slug
          title
          created(formatString: "DD MMMM, YYYY")
        }
      }
    }
    cosmicjsSettings(slug: { eq: "general" }) {
      metadata {
        site_title
        author_name
        author_bio
        author_avatar {
          imgix_url
        }
      }
    }
  }
`;
