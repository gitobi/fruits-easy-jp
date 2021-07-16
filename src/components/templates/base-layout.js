import React from "react"

import { Helmet } from "react-helmet"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"

import "./base-layout.scss"

const BaseLayout = ({ children }) => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    {children}
  </>
)

export default BaseLayout
