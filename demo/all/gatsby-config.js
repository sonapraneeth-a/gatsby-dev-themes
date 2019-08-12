const pathPrefix = "";
const baseUrl = "/";
const projectsUrl = "/projects";
const blogsUrl = "/blog";
/* let serviceWorkerUrl = pathPrefix + baseUrl;
serviceWorkerUrl = serviceWorkerUrl.replace(/\/\/?$/, "/");*/

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    appName: "Demo of gatsby-theme-simple-bio",
    title: "Demo of gatsby-theme-simple-bio",
    author: "John Doe",
    siteUrl: "https://gatsby-theme-simple-bio.netlify.com/",
    description:
      "This site is a demonstration for using theme " +
      "gatsby-theme-simple-bio",
    social: {
      twitter: "john-doe",
    },
  },
  plugins: [
    {
      resolve: "@sonapraneeth/bio",
      options: {
        baseUrl: baseUrl,
        dataPath: "content/data",
        assetsPath: "content/assets",
        homePath: "content/home",
      },
    },
    {
      resolve: "@sonapraneeth/project",
      options: {
        baseUrl: projectsUrl,
        contentPath: "content/projects",
      },
    },
    {
      resolve: "@sonapraneeth/blog",
      options: {
        baseUrl: blogsUrl,
        contentPath: "content/blog",
      },
    },
  ],
};
