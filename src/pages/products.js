import React, { useContext } from "react"
import { Link, graphql } from "gatsby"

import ShopifyImage from "../components/atoms/image/shopify-image"
import OneColumnLayout from "../components/templates/one-column-layout"

import StoreContext from "../contexts/store-context"

import Head from "../components/head"

const ProductsPage = ({ data }) => {
  const store = useContext(StoreContext)

  return (
    <OneColumnLayout>
      <Head title="資材販売" description="根域制限栽培で必要になる専用資材を販売しています。家庭菜園やお試し用に一つからはもちろん、農家さん向けに大量購入にも対応しておりますので、お気軽にお問い合わせください。" />
      <h1>資材販売</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <ShopifyImage
              src={node.images[0].originalSrc}
              width={200}
              alt={node.title}
              key={node.images[0].id}
            />
            <h3>
              <Link to={`/products/${node.shopifyId}`}>{node.title}</Link>
            </h3>
            <p>{Math.floor(node.priceRange.minVariantPrice.amount)}円</p>
          </li>
        ))}
      </ul>
      {console.debug(JSON.parse(JSON.stringify(store)))}
    </OneColumnLayout>
  )
}

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          images {
            id
            originalSrc
          }
          shopifyId
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
