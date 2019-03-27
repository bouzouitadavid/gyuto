module.exports = {
  siteMetadata: {
    title: 'My super blog',
    description: 'Gatsby blog with Strapi',
    author: 'Strapi team',
    pathPrefix: `/site`, // for => withPrefix('/data/images..')
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { // Assets
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    { // Markdown
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
    { // Data folder
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
      `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'articles',
          'videos'
        ],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
  ],
}
