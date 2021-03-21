// 11ty configuration
module.exports = (config) => {
  // 11ty defaults
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html", "css", "jpg", "png", "gif", "js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
