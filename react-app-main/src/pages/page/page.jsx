import React from "react";
import { Helmet } from "react-helmet";
import { Pages } from "./Pages";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Prolix System - Blog</title>
        <meta name="description" content="Welcome to the Prolix System Blog page. Discover our latest blog posts and explore various categories." />
        <meta name="keywords" content="Prolix System, blogs, blog, categories, latest posts" />
        <meta property="og:title" content="Prolix System - Blog" />
        <meta property="og:description" content="Welcome to the Prolix System Blog page. Discover our latest blog posts and explore various categories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.yourwebsite.com/page-url" />
        <meta property="og:image" content="http://www.yourwebsite.com/path-to-image.jpg" />
      </Helmet>
      <Pages />
    </>
  );
};
