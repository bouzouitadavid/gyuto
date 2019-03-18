module.exports = {
  siteMetadata: {
    title: 'My super blog',
    description: 'Gatsby blog with Strapi',
    author: 'Strapi team'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { // Data folder
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
      { // test markdown
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/components`,
          name: "markdown-pages",
      },
    },
      `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'articles'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
  ],
}
