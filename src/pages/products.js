import React, { useContext } from "react"
import { Link, graphql } from "gatsby"

import ShopifyImage from "../components/atoms/images/shopify-image"
import MinPrice from "../components/atoms/prices/min-price"
import OneColumnLayout from "../components/templates/one-column-layout"

import { StoreContext } from "@gitobi/gitobi-shopify-context"

import Head from "../components/head"

const ProductsPage = ({ data }) => {
  const { store } = useContext(StoreContext)

  return (
    <OneColumnLayout>
      <Head
        title="資材販売"
        description="根域制限栽培で必要になる専用資材を販売しています。家庭菜園やお試し用に一つからはもちろん、農家さん向けに大量購入にも対応しておりますので、お気軽にお問い合わせください。"
      />
      <h1>資材販売</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.storefrontId}>
            <ShopifyImage
              src={node.images[0].originalSrc}
              width={200}
              alt={node.title}
              key={node.images[0].id}
            />
            <h3>
              <Link to={`/products/${node.storefrontId}`}>{node.title}</Link>
            </h3>
            <MinPrice amount={node.priceRangeV2.minVariantPrice.amount} />
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
          storefrontId
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`
