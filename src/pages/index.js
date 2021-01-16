import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layoutGrid"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "../components/about"
import Intro from "../components/intro"
import { Helmet } from "react-helmet"
import Projects from "../components/projects"
import Carousel from "../components/carousel"
import Contact from "../components/contact"

const IndexPage = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
    </Helmet>
    <Layout>
      <SEO title="Home" />
      <Intro />
      <Carousel />
      <Projects />
      <About />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
