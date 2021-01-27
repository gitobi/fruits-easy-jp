import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">ホーム</Link>
    <Link to="/about/">Fruit Factoryとは</Link>
    <Link to="/contact/">コンタクト</Link>
  </header>
)

export default Header
