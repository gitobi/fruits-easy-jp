import React from "react"
import { StoreProvider } from "@gitobi/gitobi-shopify-context"

import "./src/styles/main.scss"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>
    {element}
  </StoreProvider>
)
