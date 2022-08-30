import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DummyPost = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is a first Post",
  date: "2022-02-10",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DummyPost.slug}/${DummyPost.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DummyPost.title} image={imagePath} />
      <ReactMarkdown>{DummyPost.content}</ReactMarkdown>
    </article>
  );
}
