import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-util";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Vivek' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

// 1) Hero Section => Present ourselves
// 2) Featured Posts

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
