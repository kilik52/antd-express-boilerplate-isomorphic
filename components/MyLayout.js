import Head from 'next/head';
import React from 'react';

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://unpkg.com/antd@3/dist/antd.min.css" />
    </Head>
    {props.children}
  </div>
);

export default Layout;
