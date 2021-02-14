import React from "react"
import StoreProvider from "./src/providers/store-provider"

import "./src/styles/main.scss"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    {element}
  </StoreProvider>
)
