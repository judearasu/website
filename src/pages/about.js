import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About</h1>
    <p>
      Hi there, I'm Thillai. I'm a software engineer currently working at a
      payroll company. I'm particulary interested in Golang, Data structures and
      Machine learning. I enjoy drawing UX paper prototypes for both my personal
      and professional projects.
    </p>
    <p>
      Apart from computes, I really enjoy playing PUBG Mobile, traveling, hiking
      and watching NBA matches (LAKERS are my favaourites)
    </p>
    <p>
      If you have any questions or just want to chat, you can reach out to me on
      <Link to="http://twitter.com/judearasu">Twitter</Link> or shoot me an{" "}
      <Link to="root@genlinux.org">email</Link>
    </p>
  </Layout>
)

export default AboutPage
