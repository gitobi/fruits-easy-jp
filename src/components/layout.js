import React from "react"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
    <Helmet>
      <html lang="ja" />
    </Helmet>
    {children}
  </div>
)
