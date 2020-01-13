import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Thillai Narayanan</h1>
    <p>I love programming, design, explain with words and code.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default BlogListPage
