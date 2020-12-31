import Butter from "buttercms";

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

export async function getBlogPosts() {
    // https://buttercms.com/docs/api/node?javascript#get-your-blog-posts
    const postResponse = await butter.post.list();
    return postResponse?.data?.data;
}

export async function getMarketingPageData() {
    const pageResponse = await butter.page.retrieve("*", "marketing-page");
    return pageResponse?.data?.data?.fields;
}

export async function getGeneralData() {
    const pageResponse = await butter.page.retrieve("*", "general-data");
    return pageResponse?.data?.data?.fields;
}

export async function getSocialLinks() {
    const socialLinks = await butter.content.retrieve(["social_links"]);
    return socialLinks?.data?.data?.social_links;
}

export async function getNavigationLinks() {
    const navigationLinks = await butter.content.retrieve([
        "main_navigation_links",
    ]);
    return navigationLinks?.data?.data?.main_navigation_links;
}

export async function getContactForm() {
    const contactForm = await butter.page.retrieve("*", "contact-form");
    return contactForm?.data?.data?.fields;
}
