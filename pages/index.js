import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DummyPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built in SSR",
    date: "2022-02-10",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DummyPosts} />
    </>
  );
}

// 1) Hero Section => Present ourselves
// 2) Featured Posts
