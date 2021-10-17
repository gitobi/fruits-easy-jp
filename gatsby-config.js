require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    description: `根域制限栽培とスマート農業を利用して、誰でも簡単に美味しい果物を育てられます。果樹農家として稼ぐのはもちろん、家庭菜園でも手軽に楽しめます。`,
    siteUrl: `https://fruits-easy.jp`,
    title: `かんたん果樹`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-6CGBM2DWXZ`,
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `かんたん果樹`,
        short_name: `かんたん果樹`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(
            `./src/components/templates/two-column-layout.js`
          ),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
     {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
          @import "${__dirname}/src/styles/colors";
          @import "${__dirname}/src/styles/variables";
        `,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
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
      resolve: `gatsby-source-shopify`,
      options: {
        password: process.env.GATSBY_SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
