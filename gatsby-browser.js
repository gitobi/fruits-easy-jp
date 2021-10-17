import React from "react"
import { StoreProvider } from "@gitobi/gitobi-shopify-context"

export const wrapRootElement = ({ element }) => (
  <StoreProvider
    localStorageKey='shopify_checkout_id_for_fruits_easy_jp'
  >
    {element}
  </StoreProvider>
)
