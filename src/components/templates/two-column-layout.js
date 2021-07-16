import React from "react"

import Aside from "../organisms/aside"
import BaseLayout from "./base-layout"
import Footer from "../organisms/footer"
import Header from "../organisms/header"
import Main from "../organisms/main"

import {
  mainAsideContainer,
  main,
  aside,
} from "./two-column-layout.module.scss"

const TwoColumnLayout = ({ children }) => (
  <BaseLayout>
    <Header />
    <div className={mainAsideContainer}>
      <Main className={main} children={children} />
      <Aside className={aside} />
    </div>
    <Footer />
  </BaseLayout>
)

export default TwoColumnLayout
