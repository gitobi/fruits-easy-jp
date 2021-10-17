import React, { useContext } from "react"
import { Link } from "gatsby"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faShoppingCart,
  faStore,
} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const { currentTotalQuantity } = useContext(StoreContext)

  return (
    <header>
      <Link to="/">
        かんたん果樹
      </Link>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> ホーム
      </Link>
      <Link to="/products/">
        <FontAwesomeIcon icon={faStore} /> オンラインストア
      </Link>
      <Link to="/cart/">
        <FontAwesomeIcon icon={faShoppingCart} /> カート <span>{currentTotalQuantity()}</span>
      </Link>
    </header>
  )
}

export default Header
