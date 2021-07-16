import React from "react"
import { StoreProvider } from "@gitobi/gitobi-shopify-context"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
