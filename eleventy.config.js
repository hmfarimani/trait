module.exports = async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/assets");
  eleventyConfig.addPassthroughCopy("content/images");
  eleventyConfig.addWatchTarget("content/assets/**/*");
  // Plugins
  return {
    dir: {
      input: "content",
      includes: "_includes",
      output: "_site",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
