import React from "react"
import { Helmet } from "react-helmet"
import Header from "../organisms/header"
import Main from "../organisms/main"
import Footer from "../organisms/footer"

const OneColumnLayout = ({ children }) => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    <Header />
    <Main children={children} />
    <Footer />
  </>
)

export default OneColumnLayout
