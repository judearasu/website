import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
    data:{
        post, 
        site: {
            siteMetaData: {title}
        },
    },
    location,
    previous,
    next,
}) => (
    <Layout location={location} title={title}></Layout>
)