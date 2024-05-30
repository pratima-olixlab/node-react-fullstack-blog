import React from "react";
import { Helmet } from "react-helmet";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Prolixic System - Home</title>
        <meta name="description" content="Welcome to the Prolixic System home page. Discover our latest blog posts and explore various categories." />
        <meta name="keywords" content="Prolixic System, home page, blogs, categories, latest posts" />
        <meta property="og:title" content="Prolixic System - Home" />
        <meta property="og:description" content="Welcome to the Prolixic System home page. Discover our latest blog posts and explore various categories." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.yourwebsite.com/" />
        <meta property="og:image" content="http://www.yourwebsite.com/path-to-image.jpg" />
      </Helmet>
      <Category />
      <Card />
    </>
  );
};
