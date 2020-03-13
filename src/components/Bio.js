import React from 'react';
import { rhythm } from '../utils/typography';
import { css } from '@emotion/core';

export default ({ settings }) => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5),
    }}
  >
    <img
      src={settings.author_avatar.imgix_url}
      alt={settings.author_name}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: rhythm(1),
      }}
    />
    <div
      css={css`
        max-width: 300px;
      `}
      dangerouslySetInnerHTML={{ __html: settings.author_bio }}
    />
  </div>
);
