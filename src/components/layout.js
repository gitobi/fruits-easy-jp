import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    {/* TODO: Header にする */}
    <Link to="/">ホーム</Link>
    <Link to="/about/">Fruits Plantとは</Link>
    <Link to="/contact/">コンタクト</Link>

    {children}
  </div>
)
