import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import get from 'lodash/get';

class BlogIndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title= 'Blog' />
        <h1>Hi from the blog list1 page</h1>
        <p>Welcome to about me</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
export default BlogIndexPage

export const pageQuery = graphql`
query {
  site(siteMetadata: {}) {
    id
    siteMetadata {
      title
      description
      siteUrl
      author
      navigation{
        name
        url
      }
    }
  }
}`;