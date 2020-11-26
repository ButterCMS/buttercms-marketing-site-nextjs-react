import Butter from "buttercms";

const butter = Butter(process.env.BUTTER_CMS_API_KEY);

export async function getBlogPosts() {
  // https://buttercms.com/docs/api/node?javascript#get-your-blog-posts
  const postResponse = await butter.post.list();
  return postResponse?.data?.data;
}

export async function getSinglePage(slug) {
  // https://buttercms.com/docs/api/node?javascript#get-a-single-page
  const pageResponse = await butter.page.retrieve("*", slug);
  return pageResponse?.data?.data;
}
