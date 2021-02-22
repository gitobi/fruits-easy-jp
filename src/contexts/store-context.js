import React from "react"

const defaultValue = {
  client: {},
  checkout: {},
  checkoutEditable: true,
  addVariantToCart: () => {},
}

const StoreContext = React.createContext(defaultValue)

export default StoreContext
