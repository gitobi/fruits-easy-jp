import * as React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <Head description="フルーツ工場メディア" />
      <Link to="/">ホーム</Link>
      <Link to="/about/">Fruits Plantとは</Link>
      <Link to="/contact/">コンタクト</Link>
      <div>
        <h1>Fruits Plant by Gitobi</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
