import React, { useContext } from "react"
import { Link } from "gatsby"

import ShopifyImage from "../components/atoms/images/shopify-image"
import Price from "../components/atoms/prices/price"
import OneColumnLayout from "../components/templates/one-column-layout"
import Head from "../components/head"

import StoreContext from "../contexts/store-context"

const CartPage = ({ data }) => {
  const { store, proceedToCheckout } = useContext(StoreContext)

  const handleCheckout = () => {
    proceedToCheckout()
  }

  console.debug(store.checkout)
  return (
    <OneColumnLayout>
      <Head title="カート" description="カート" />
      <h1>カート</h1>
      {store.checkout.lineItems.map(lineItem => (
        <div key={lineItem.variant.id}>
          <h2><Link to={`/products/${lineItem.variant.product.id}`}>{lineItem.title}</Link></h2>
          <ShopifyImage
            src={lineItem.variant.image.src}
            width={200}
            alt={lineItem.variant.title}
            key={lineItem.variant.image.id}
          />
          <p>{lineItem.variant.title !== 'Default Title' ? lineItem.variant.title : ''}</p>
          <Price amount={lineItem.variant.price} />
          <p>数量 {lineItem.quantity}</p>
        </div>
      ))}
      <p>小計（税抜き）</p>
      <Price amount={store.checkout.totalPrice} />
      <button onClick={handleCheckout}>レジに進む</button>
    </OneColumnLayout>
  )
}

export default CartPage
