import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About</h1>
    <p>Welcome to about me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
