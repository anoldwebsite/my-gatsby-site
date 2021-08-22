module.exports = {
  siteMetadata: {
    siteUrl: "https://onnetacademy.com",
    title: "My Bookreview Webite",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`, // (__dirname is a variable from Node.js that stores the absolute path for the directory that contains the file currently being run.)
      }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
        wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
      },
    }
  ],
};
