import React, { useContext } from "react"

import OneColumnLayout from "../components/templates/one-column-layout"
import Head from "../components/head"

import StoreContext from "../contexts/store-context"

const CartPage = ({ data }) => {
  const { store } = useContext(StoreContext)

  const handleCheckout = () => {
    window.location.href = store.checkout.webUrl
  }

  return (
    <OneColumnLayout>
      <Head title="カート" description="カート" />
      <h1>カート</h1>
      {console.debug(JSON.parse(JSON.stringify(store)))}
      <button onClick={handleCheckout}>レジに進む</button>
    </OneColumnLayout>
  )
}

export default CartPage
