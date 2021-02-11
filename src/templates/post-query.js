import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { formatReadingTime, countText } from '../utils/helpers';

class PostPage extends React.Component {
  render() {
    const post = this.props.data.blogPost
    const previous = this.props.data.previous
    const next = this.props.data.next
    // let { previous, next, slug } = this.props.pageContext
    return (
      <Layout>
        <SEO title={post.title} slug={post.slug} />
        <main>
          <h1>{post.title}</h1>
          <p className='caption caption--sm'>
            {/* By <Link
            to="/"
            style={{
              boxShadow: `none`,
              textDecoration: `none`
            }}>
            <span className='caption caption--sm'>{post.author}</span></Link> on  */}
            {post.date}  {` • ${formatReadingTime(countText(post.body))}`}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link
                  to={previous.slug}
                  rel="prev"
                  style={{ marginRight: 20 }}
                >
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}
export default PostPage

export const query = graphql`
  query PostPageQuery($id: String!, $previousId: String, $nextId: String) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      tags
      keywords
      date(formatString: "MMMM DD, YYYY")
      author
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
