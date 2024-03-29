const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all products in Shopify
  const shopifyProductsResult = await graphql(`
    query {
      allShopifyProduct(filter: { productType: { eq: "根域制限栽培資材" } }, sort: { fields: [title] }) {
        edges {
          node {
            description
            descriptionHtml
            images {
              id
              originalSrc
            }
            options {
              name
              values
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            storefrontId
            title
            variants {
              price
              product {
                title
              }
              selectedOptions {
                name
                value
              }
              storefrontId
              title
            }
          }
        }
      }
    }
  `)

  // Iterate over all products and create a new page using a template
  shopifyProductsResult.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.storefrontId}`,
      component: path.resolve(
        `./src/components/templates/product-page-layout.js`
      ),
      context: {
        product: node,
      },
    })
  })
}
