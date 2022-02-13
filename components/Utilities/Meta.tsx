import React from "react";
import Head from "next/head";

const { APP_NAME } = process.env;
const { APP_URL } = process.env;
const { APP_DESCRIPTION } = process.env;

const Meta: React.FC = () => (
  <Head>
    <title>{`${APP_NAME} | Home`}</title>
    <meta name="description" content={APP_DESCRIPTION} />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="og:title" content={`${APP_NAME} | Home`} />
    <meta name="og:description" content={APP_DESCRIPTION} />
    <meta name="og:url" content={APP_URL} />
    <meta name="og:image" content={`${APP_URL}/static/thors.jpeg`} />
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={APP_URL} />
  </Head>
);

export default Meta;
