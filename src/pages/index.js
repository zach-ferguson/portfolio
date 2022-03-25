import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/e-work/Projects"
import Intro from "../components/a-intro/Intro"
import Contact from "../components/o-contact/Contact"
import Skills from "../components/h-skills/Skills"

const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default IndexPage
