const merge = require("deepmerge");

module.exports = (themeOptions) => {
  // Default options to be used in theme
  const defaultOptions = {
    // Base url for rendering site
    baseUrl: "/", // Default: "/"
    // Name of the author. Default value is intentionally
    // empty as this value must be provided by theme user
    author: "", // Default: ""
    // Data directory
    dataPath: "content/data", // Default: "content/data"
    // Directory path for images
    assetsPath: "content/assets", // Default: "content/assets"
    // Directory path for MDX home page content
    homePath: "content/home", // Default: "content/home"
    // Configure MDX. true would defaults of the theme
    mdx: true, // Default: true
  };
  // Options created using default and provided options
  const options = merge(defaultOptions, themeOptions);
  return {
    // Default siteMetadata
    siteMetadata: {
      appName: "@sonapraneeth/gatsby-theme-bio package",
      title: "@sonapraneeth/gatsby-theme-bio package",
      author: "John Doe",
      // TODO: Need to change this URL
      siteUrl: "/",
      baseUrl: "/",
      description:
        "This site is a demonstration for using theme " +
        "@sonapraneeth/gatsby-theme-bio",
      social: {
        facebook: "john-doe",
        twitter: "john-doe",
        email: "john-doe",
        linkedin: "john-doe",
        github: "john-doe",
      },
    },
    plugins: [
      "@sonapraneeth/gatsby-plugin-themed-components",
      options.mdx && {
        resolve: "gatsby-plugin-mdx",
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "author",
          path: options.dataPath,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "bio-assets",
          path: options.assetsPath,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "home",
          path: options.homePath,
        },
      },
      "gatsby-plugin-react-helmet",
      "gatsby-transformer-yaml",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
    ].filter(Boolean),
  };
};
