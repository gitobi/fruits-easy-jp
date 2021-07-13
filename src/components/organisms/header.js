import React, { useContext } from "react"
import { Link } from "gatsby"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

const Header = () => {
  const { currentTotalQuantity } = useContext(StoreContext)

  return (
    <header>
      <Link to="/">Fruit Factory</Link>
      <Link to="/products/">資材販売</Link>
      <Link to="/cart/">
        カート <span>{currentTotalQuantity()}</span>
      </Link>
    </header>
  )
}

export default Header
