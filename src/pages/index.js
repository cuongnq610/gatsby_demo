import React from "react"

import Layout from "../components/layout"
import Articles from "../components/articles";

const IndexPage = ({data}) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <h1>Bài viết mới nhất</h1>
      <Articles/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`