import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <Link to="/">Fruit Factory</Link>
    <Link to="/products/">資材販売</Link>
    <Link to="/cart/">カート</Link>
  </header>
)

export default Header
