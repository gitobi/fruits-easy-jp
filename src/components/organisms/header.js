import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">Fruit Factory</Link>
    <Link to="/products/">資材販売</Link>
    <Link to="/cart/">買い物かご</Link>
  </header>
)

export default Header
