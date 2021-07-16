import React from "react"

import BaseLayout from "./base-layout"
import Footer from "../organisms/footer"
import Header from "../organisms/header"
import Main from "../organisms/main"

const OneColumnLayout = ({ children }) => (
  <BaseLayout>
    <Header />
    <Main children={children} />
    <Footer />
  </BaseLayout>
)

export default OneColumnLayout
