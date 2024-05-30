import React from "react";
import { Helmet } from "react-helmet";
import { Pages } from "./Pages";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Prolixic System - Blog</title>
        <meta name="description" content="Welcome to the Prolixic System Blog page. Discover our latest blog posts and explore various categories." />
        <meta name="keywords" content="Prolixic System, blogs, blog, categories, latest posts" />
        <meta property="og:title" content="Prolixic System - Blog" />
        <meta property="og:description" content="Welcome to the Prolixic System Blog page. Discover our latest blog posts and explore various categories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.yourwebsite.com/page-url" />
        <meta property="og:image" content="http://www.yourwebsite.com/path-to-image.jpg" />
      </Helmet>
      <Pages />
    </>
  );
};
