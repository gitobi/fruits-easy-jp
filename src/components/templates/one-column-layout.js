import React from "react"
import { Helmet } from "react-helmet"
import Header from "../organisms/header"
import Main from "../organisms/main"
import Footer from "../organisms/footer"

export default ({ children }) => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    <Header />
    <Main children={children} />
    <Footer />
  </>
)