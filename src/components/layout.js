import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import { css } from '@emotion/core';

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
          }
        }
      }
    `}
    render={data => {
      const siteTitle = data.cosmicjsSettings.metadata.site_heading;
      let header;

      let rootPath = `/`;
      let postsPath = `/posts`;
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`;
        postsPath = __PATH_PREFIX__ + `/posts`;
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        header = (
          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              width: '100%',
              height: rhythm(7),
              position: 'relative',
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            <h1
              style={{
                ...scale(1.3),
                position: 'absolute',
                textAlign: 'center',
                left: 0,
                right: 0,
                top: rhythm(4),
                marginTop: '0',
                height: rhythm(2.5),
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h1>
          </div>
        );
      } else {
        header = (
          <h3
            style={{
              marginTop: 0,
              marginBottom: rhythm(-1),
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              paddingTop: `${rhythm(1.5)}`,
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h3>
        );
      }
      return (
        <div
          css={css`
            color: #6f7785;
            background: rgb(41, 43, 48);
            background: linear-gradient(
              135deg,
              rgba(41, 43, 48, 1) 0%,
              rgba(23, 25, 29, 1) 100%
            );
          `}
        >
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(36),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: 'calc(100vh - 42px)',
            }}
          >
            {children}
          </div>
        </div>
      );
    }}
  />
);
