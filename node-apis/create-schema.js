exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions
    createTypes(`interface BlogPost @nodeInterface {
        id: ID!
        title: String!
        body: String!
        slug: String!
        date: Date! @dateformat
        tags: [String]!
        keywords: [String]!
        excerpt: String!
    }`)
  
    createTypes(
      schema.buildObjectType({
        name: `MdxBlogPost`,
        fields: {
          id: { type: `ID!` },
          title: {
            type: `String!`,
          },
          slug: {
            type: `String!`,
          },
          date: { type: `Date!`, extensions: { dateformat: {} } },
          tags: { type: `[String]!` },
          keywords: { type: `[String]!` },
          excerpt: {
            type: `String!`,
            args: {
              pruneLength: {
                type: `Int`,
                defaultValue: 140,
              },
            },
            resolve: mdxResolverPassthrough(`excerpt`),
          },
          body: {
            type: `String!`,
            resolve: mdxResolverPassthrough(`body`),
          },
        },
        interfaces: [`Node`, `BlogPost`],
      })
    )
  }