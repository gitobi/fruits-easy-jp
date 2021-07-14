import React from "react"

import { Helmet } from "react-helmet"
import Header from "../organisms/header"
import Main from "../organisms/main"
import Aside from "../organisms/aside"
import Footer from "../organisms/footer"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/assets.css"
import {
  mainAsideContainer,
  main,
  aside,
} from "./two-column-layout.module.scss"

const TwoColumnLayout = ({ children }) => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    <Header />
    <div className={mainAsideContainer}>
      <Main className={main} children={children} />
      <Aside className={aside} />
    </div>
    <Footer />
  </>
)

export default TwoColumnLayout
