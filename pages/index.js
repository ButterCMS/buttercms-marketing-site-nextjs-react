import React from "react";
import Head from "next/head";

import Section from "../src/components/section";
import { getSinglePage } from "../lib/api";

export default function Index({ marketingPage }) {
  const seo = marketingPage.fields.seo;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.meta_description} />
      </Head>

      {marketingPage.fields.sections.map(({ type, fields }, index) => (
        <Section key={index} type={type} fields={fields}></Section>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const marketingPage = await getSinglePage("marketing-page");
  return {
    props: { marketingPage },
  };
}
