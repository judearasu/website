import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
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
