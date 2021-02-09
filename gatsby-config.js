require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `huntCodes`,
    description: `website builder, tech enthusiast`,
    author: `@arthuranteater`,
    siteUrl: `https://www.huntcodes.co`,
    image: `/images/code_development_.png`,
    altImg: `illustration of laptop screen and coder working`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
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
        name: `huntCodes`,
        short_name: `hC`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#293e60`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GATSBY_PORTFOLIO_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ID,
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./public/favicon-32x32.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-breakpoints",
    // `gatsby-plugin-sitemap`,
  ],
}
