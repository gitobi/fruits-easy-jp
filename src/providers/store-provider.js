import React, { useEffect, useState } from "react"
import Client from "shopify-buy"

import StoreContext from "../contexts/store-context"

const StoreProvider = ({ children }) => {
  const client = Client.buildClient(
    {
      storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      domain: `${process.env.GATSBY_SHOPIFY_SHOP_NAME}.myshopify.com`,
      language: 'ja-JP',
    }
  )

  // NOTE: initialValue に key を追加する場合は、 StoreContext の defaultValue にも同様に初期値を追加すること。
  // StoreContextを使うコンポーネントの単体テストで、 defaultValue が使われるため。
  const initialValue = {
    client,
    checkout: {},
  }

  const [store, setStore] = useState(initialValue)

  useEffect(() => {
    const initializeCheckout = async () => {
      console.debug(`store-provider.js initializeCheckout triggered.`)

      const localStorageKey = 'shopify_checkout_id'

      const setCheckout = (checkout) => {
        localStorage.setItem(localStorageKey, checkout.id)
        setStore((prevState) => {
          return { ...prevState, checkout }
        })
      }

      const resetCheckout = () => {
        localStorage.removeItem(localStorageKey)
      }

      const localStorageValue = localStorage.getItem(localStorageKey)
      if (localStorageValue != null) {
        // 初期化済みの場合は、最新の checkout を取得してローカルストレージと state に保存する

        await store.client.checkout.fetch(
          localStorageValue
        ).then(checkout => {
          setCheckout(checkout)
        }).catch(err => {
          resetCheckout()
        })
      } else {
        // 未初期化の場合は、 checkout を作成してローカルストレージと state に保存する
        await store.client.checkout.create(
        ).then(checkout => {
          setCheckout(checkout)
        }).catch(err => {
          resetCheckout()
        })
      }
    }

    initializeCheckout()
  }, [store.client.checkout])

  return (
    <StoreContext.Provider
      value={store}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
