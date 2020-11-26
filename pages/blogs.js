import React from "react";
import Head from "next/head";

import Butter from "buttercms";

import Posts from "../src/components/posts";

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

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
  const posts = (await butter.post.list()).data.data;

  return {
    props: { posts },
  };
}
