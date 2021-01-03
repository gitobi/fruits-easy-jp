import * as React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="Fruits Plantとは" description="Fruits Plantとは" />
      <Link to="/">ホーム</Link>
      <Link to="/about/">Fruits Plantとは</Link>
      <Link to="/contact/">コンタクト</Link>
      <div>
        <h1>Fruits Plantとは</h1>
      </div>
    </Layout>
  )
}

export default AboutPage
