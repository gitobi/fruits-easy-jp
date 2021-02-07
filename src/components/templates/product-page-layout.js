import React from "react"

import OneColumnLayout from "./one-column-layout"

const ProductPageLayout = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <OneColumnLayout>
      <h1>{product.title}</h1>
      <img src={product.images[0].originalSrc} alt={product.title} key={product.images[0].id} style={{width: '200px'}} />
      {product.images.slice(1).map(image => <img src={image.originalSrc} alt={product.title} key={image.id} style={{width: '200px'}}/>)}
      <p>{Math.floor(product.priceRange.minVariantPrice.amount)}円</p>
      <div dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
    </OneColumnLayout>
  )
}

export default ProductPageLayout
