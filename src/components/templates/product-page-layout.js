import React, { useContext, useState } from "react"
import isEqual from 'lodash/isEqual'

import ShopifyImage from "../atoms/images/shopify-image"
import Price from "../atoms/prices/price"
import OneColumnLayout from "./one-column-layout"

import StoreContext from "../../contexts/store-context"
import Head from "../head"

const ProductPageLayout = ({ pageContext }) => {
  const store = useContext(StoreContext)
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
    console.debug("Option blured")
  }

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
    console.debug("Quantity changed")
  }

  const available = true
  const adding = false
  const handleAddToCartClick = () => {
    console.debug("Add to cart clicked")
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
        Quantity
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
        disabled={!available || adding}
        onClick={handleAddToCartClick}
      >
        カートに入れる
      </button>
      {console.debug(JSON.parse(JSON.stringify(store)))}
    </OneColumnLayout>
  )
}

export default ProductPageLayout
