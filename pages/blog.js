import Head from "next/head";

import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Posts from "@/components/posts";
import {
  getBlogPosts,
  getContactForm,
  getGeneralData,
  getNavigationLinks,
  getSocialLinks,
} from "@/lib/api";

export default function BlogsPage({
  posts,
  generalData,
  socialLinks,
  navigationLinks,
  contactForm,
}) {
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

      <Contact
        description={contactForm.description}
        buttonLink={contactForm.button_link}
        buttonText={contactForm.button_text}
      />

      <Footer
        logo={generalData.company_logo}
        companyName={generalData.company_name}
        navigationLinks={navigationLinks}
        socialLinks={socialLinks}
      />
    </>
  );
}

export async function getStaticProps() {
  const [
    posts,
    generalData,
    socialLinks,
    navigationLinks,
    contactForm,
  ] = await Promise.all([
    getBlogPosts(),
    getGeneralData(),
    getSocialLinks(),
    getNavigationLinks(),
    getContactForm(),
  ]);
  return {
    props: {
      posts,
      generalData,
      socialLinks,
      navigationLinks,
      contactForm,
    },
  };
}
