import React from "react"

const defaultValue = {
  store: {
    client: {},
    checkout: {},
    checkoutEditable: true,
  },
  addVariantToCart: () => {},
  proceedToCheckout: () => {},
}

const StoreContext = React.createContext(defaultValue)

export default StoreContext
