import React from "react";
import Head from "next/head";

import { getBlogPosts } from "../lib/api";
import Posts from "../src/components/posts";

export default function BlogsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Blog Posts | Marketing Site using ButterCMS and Next.js</title>
        <meta
          name="description"
          content="Blogs posts fetched from ButterCMS by using Next.js"
        />
      </Head>

      <Posts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getBlogPosts();

  return {
    props: { posts },
  };
}
