import React from "react"

import OneColumnLayout from "./one-column-layout"

const ProductPageLayout = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <OneColumnLayout>
      <h1>{product.title}</h1>
      <img src={product.images[0].originalSrc} alt={product.title} style={{width: '200px'}}/>
      <p>{Math.floor(product.priceRange.minVariantPrice.amount)}円</p>
      <p>{product.description}</p>
    </OneColumnLayout>
  )
}

export default ProductPageLayout
