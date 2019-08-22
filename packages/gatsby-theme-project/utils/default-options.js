// Default options to be used in theme
module.exports = (themeOptions) => {
  // Base url for rendering site
  // Default: "/"
  const baseUrl = themeOptions.baseUrl || "/";
  // Content directory
  // Default: "content/projects"
  const contentPath = themeOptions.contentPath || "content/projects";
  // Configure MDX. true would defaults of the theme
  // Default: true
  const mdx = themeOptions.mdx || true;

  return {
    baseUrl,
    contentPath,
    mdx,
  };
};
