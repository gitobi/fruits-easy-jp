import React from "react"

import OneColumnLayout from "../components/templates/one-column-layout"
import Head from "../components/head"

const CartPage = ({ data }) => (
  <OneColumnLayout>
    <Head title="買い物かご" description="買い物かご" />
    <h1>買い物かご</h1>
  </OneColumnLayout>
)

export default CartPage
