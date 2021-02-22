import React, { useContext, useState } from "react"
import isEqual from 'lodash/isEqual'

import ShopifyImage from "../atoms/images/shopify-image"
import Price from "../atoms/prices/price"
import OneColumnLayout from "./one-column-layout"

import StoreContext from "../../contexts/store-context"
import Head from "../head"

const ProductPageLayout = ({ pageContext }) => {
  const { store, addVariantToCart } = useContext(StoreContext)
  const { product } = pageContext

  const { options, variants } = product
  const [initialVariant] = variants
  const [variant, setVariant] = useState({ ...initialVariant })
  const handleOptionBlur = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = variants.find(({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const available = true
  const handleAddToCartClick = async () => {
    await addVariantToCart(
      variant.shopifyId, quantity
    ).catch(err => {
      window.alert(err.message)
    })
  }

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
      <div dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />

      {options.filter(option => option.name !== 'Title').map(({ shopifyId, name, values }, index) => {
        return (
          <React.Fragment key={shopifyId}>
            <label
              htmlFor={name}>
              {name}
            </label>
            <select
              name={name}
              key={`${shopifyId}-${name}`}
              onBlur={event => handleOptionBlur(index, event)}
            >
              {values.map((value) => {
                return (
                  <option
                    value={value}
                    key={`${shopifyId}-${value}`}
                  >
                    {value}
                  </option>
                )
              })}
            </select>
          </React.Fragment>
        )
      })}

      <Price amount={variant.price} />
      <label
        htmlFor="quantity">
        数量
      </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />

      <button
        type="submit"
        disabled={!available || !store.checkoutEditable}
        onClick={handleAddToCartClick}
      >
        カートに入れる
      </button>
    </OneColumnLayout>
  )
}

export default ProductPageLayout
