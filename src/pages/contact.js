import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <Head title="コンタクト" description="コンタクト" />
    <Link to="/">ホーム</Link>
    <Link to="/about/">Fruits Plantとは</Link>
    <Link to="/contact/">コンタクト</Link>
    <div>
      <h1>コンタクト</h1>
    </div>
  </Layout>
)
