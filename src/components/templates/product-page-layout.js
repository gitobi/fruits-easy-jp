import React from "react"

import ShopifyImage from "../atoms/image/shopify-image"
import OneColumnLayout from "./one-column-layout"
import Head from "../head"

const ProductPageLayout = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <OneColumnLayout>
      <Head title={product.title} description={product.description} />
      <h1>{product.title}</h1>
      <ShopifyImage
        src={product.images[0].originalSrc}
        width={200}
        alt={product.title}
        key={product.images[0].id}
      />
      {product.images.slice(1).map((image) => {
        return (
          <ShopifyImage
            src={image.originalSrc}
            width={200}
            alt={product.title}
            key={image.id}
          />
        )
      })}
      <p>{Math.floor(product.priceRange.minVariantPrice.amount)}円</p>
      <div dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
    </OneColumnLayout>
  )
}

export default ProductPageLayout
