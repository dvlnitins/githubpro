import React from 'react';
import NextHead from 'next/head';

const Title = 'GitHub Profile';
const Description = 'A better look at your revamped GitHub repository stats and profile! ';
const defaultOGURL = 'https://githubprofile.vercel.app';
const defaultOGImage = 'https://githubprofile.vercel.app/static/og.png';

const Head = () => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{Title}</title>
    <meta name="description" content={Description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicons/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#1A1E22" />
    <meta name="theme-color" content="#313638" />
    <meta property="og:url" content={defaultOGURL} />
    <meta property="og:title" content={Title} />
    <meta property="og:description" content={Description} />
    <meta name="twitter:site" content={defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={defaultOGImage} />
    <meta name="twitter:description" content={Description} />
    <meta name="twitter:creator" content={'@dvlnitins'} />
    <meta name="twitter:title" content={Title} />
    <meta property="og:image" content={defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
