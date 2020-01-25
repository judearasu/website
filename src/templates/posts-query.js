import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { formatReadingTime, countText } from '../utils/helpers';

class PostIndexPage extends React.Component {
  render() {
    const posts = get(this, "props.data.allBlogPost.edges")
    return (
      <Layout>
        <main>
          {posts.map(({ node }) => {
            const title = get(node, "title") || node.slug
            return (
              <article key={node.slug}>
                <h3>
                  <Link
                    style={{ boxShadow: "none", color: "inherit"}}
                    to={node.slug}
                    rel="bookmark"
                  >
                    {title}
                  </Link>
                </h3>
                <small className="caption">{node.date} {` • ${formatReadingTime(countText(node.body))}`}</small>
                <p className="caption text--subtitle">{node.excerpt}</p>
              </article>
            )
          })}
        </main>
      </Layout>
    )
  }
}
export default PostIndexPage

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          body
        }
      }
    }
  }
`
