const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for all products in Shopify
  const shopifyProductsResult = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            shopifyId
            title
            images {
              id
              originalSrc
            }
            description
            descriptionHtml
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
            options {
              shopifyId
              name
              values
            }
            variants {
              shopifyId
              product {
                title
              }
              title
              price
              availableForSale
              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  `)

  // Iterate over all products and create a new page using a template
  shopifyProductsResult.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.shopifyId}`,
      component: path.resolve(
        `./src/components/templates/product-page-layout.js`
      ),
      context: {
        product: node,
      },
    })
  })
}
