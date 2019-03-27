import React from "react"
import { graphql, Link } from "gatsby"
import Image from '../components/image';
import Layout from "../components/layout"
import SEO from "../components/seo"
const ReactMarkdown = require('react-markdown')

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    {console.log(data)}
    {console.log(data.allStrapiVideos.edges[1].node.id)}
  </Layout>
)

export default SecondPage
export const pageQuery = graphql`
  query IndexQuerycccc {
    allStrapiVideos {
      edges {
        node {
          id
        }
      }
    }
  }
`
