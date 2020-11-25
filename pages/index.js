import React from "react";
import Head from "next/head";
import Butter from "buttercms";

import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Section from "../src/components/section";

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

export default function Index({ marketingPage }) {
  const companyInfo = marketingPage.data.fields.general;
  const seo = marketingPage.data.fields.seo;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.meta_description} />
      </Head>

      <Header logo={companyInfo.logo} companyName={companyInfo.company_name} />

      {marketingPage.data.fields.sections.map(({ type, fields }, index) => (
        <Section key={index} type={type} fields={fields}></Section>
      ))}

      <Footer
        logo={companyInfo.logo}
        companyName={companyInfo.company_name}
        navigationLinks={companyInfo.navigation_links}
        facebookUrl={companyInfo.facebook_url}
        twitterUrl={companyInfo.twitter_url}
        googleUrl={companyInfo.google_url}
      />
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
