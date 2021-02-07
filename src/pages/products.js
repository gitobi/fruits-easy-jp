import React from "react"
import { Link, graphql } from "gatsby"

import OneColumnLayout from "../components/templates/one-column-layout"

const ProductsPage = ({ data }) => (
  <OneColumnLayout>
    <h1>資材販売</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <img src={node.images[0].originalSrc} alt={node.title} key={node.images[0].id} style={{width: '200px'}}/>
          <h3>
            <Link to={`/products/${node.shopifyId}`}>{node.title}</Link>
          </h3>
          <p>{Math.floor(node.priceRange.minVariantPrice.amount)}円</p>
        </li>
      ))}
    </ul>
  </OneColumnLayout>
)

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
