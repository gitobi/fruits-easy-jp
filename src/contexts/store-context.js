import React from "react"

const defaultValue = {
  store: {
    client: {},
    checkout: {
      lineItems: [],
      totalPrice: 0,
    },
    checkoutEditable: true,
  },
  addVariantToCart: () => {},
  proceedToCheckout: () => {},
}

const StoreContext = React.createContext(defaultValue)

export default StoreContext
