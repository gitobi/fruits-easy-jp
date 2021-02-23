import React, { useContext } from "react"

import OneColumnLayout from "../components/templates/one-column-layout"
import Head from "../components/head"

import StoreContext from "../contexts/store-context"

const CartPage = ({ data }) => {
  const { proceedToCheckout } = useContext(StoreContext)

  const handleCheckout = () => {
    proceedToCheckout()
  }

  return (
    <OneColumnLayout>
      <Head title="カート" description="カート" />
      <h1>カート</h1>
      <button onClick={handleCheckout}>レジに進む</button>
    </OneColumnLayout>
  )
}

export default CartPage
