import React from "react";
import Head from "next/head";

import Butter from "buttercms";

import Section from "../src/components/section";

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

export default function Index({ marketingPage }) {
  const seo = marketingPage.data.fields.seo;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.meta_description} />
      </Head>

      {marketingPage.data.fields.sections.map(({ type, fields }, index) => (
        <Section key={index} type={type} fields={fields}></Section>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const marketingPage = (await butter.page.retrieve("*", "marketing-page"))
    .data;
  return {
    props: { marketingPage },
  };
}
