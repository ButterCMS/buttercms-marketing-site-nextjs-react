import Head from "next/head";

import Header from "@/components/header";
import Section from "@/components/section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
// import runAnimation from "../src/assets/js/main";

import {
    getContactForm,
    getGeneralData,
    getMarketingPageData,
    getNavigationLinks,
    getSocialLinks,
} from "@/lib/api";

export default function Index({
    generalData,
    marketingPage,
    socialLinks,
    navigationLinks,
    contactForm,
}) {
    const seo = marketingPage.open_graph;
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="image" property="og:image" content={seo.image} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content={seo.image} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="ButterCMS" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ButterCMS" />
                <meta name="twitter:creator" content="@ButterCMS" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content={seo.image} />
            </Head>

            <Header
                logo={generalData.company_logo}
                companyName={generalData.companyName}
            ></Header>

            {marketingPage.sections.map(({ type, fields }, index) => (
                <Section key={index} type={type} fields={fields}></Section>
            ))}

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
        generalData,
        marketingPage,
        socialLinks,
        navigationLinks,
        contactForm,
    ] = await Promise.all([
        getGeneralData(),
        getMarketingPageData(),
        getSocialLinks(),
        getNavigationLinks(),
        getContactForm(),
    ]);
    return {
        props: {
            generalData,
            marketingPage,
            socialLinks,
            navigationLinks,
            contactForm,
        },
    };
}
