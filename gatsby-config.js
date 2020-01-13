const themeDefaults = require("./src/utils/default-options")
const themeOptions = require("./src/utils/default-options")
const siteOptions = themeDefaults(themeOptions)

module.exports = {
  siteMetadata: {
    title: `Root 🐎`,
    description: `Personal blog by Thillai Narayanan. I love programming, design, explain with words and code.`,
    siteUrl: "https://overreacted.io",
    author: `Thillai Narayanan`,
    options: themeDefaults,
    navigation: [
      {
        name: `About`,
        url: `/about`,
      },
      {
        name: `Blog`,
        url: `/blog`,
      },
    ],
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/judearasu`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/judearasu`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: siteOptions.contentPath,
        name: siteOptions.contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: siteOptions.assetPath,
        name: siteOptions.assetPath,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/components/posts-layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: siteOptions.basePath,
        path: siteOptions.contentPath,
      },
    },
    // {
    //   resolve: `gatsby-theme-blog`,
    //   options: {
    //     basePath: `/blog`,
    //     contentPath: `${__dirname}/src/content/posts`,
    //     assetPath: `${__dirname}/src/content/assets`
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
