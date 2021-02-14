import React from "react"

const defaultValue = {
  client: {},
  checkout: {},
}

const StoreContext = React.createContext(defaultValue)

export default StoreContext
