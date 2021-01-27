import React from "react"
import { Helmet } from "react-helmet"
import Header from "../organisms/header"
import Main from "../organisms/main"
import Aside from "../organisms/aside"
import Footer from "../organisms/footer"

const TwoColumnLayout = ({ children }) => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    <Header />
    <Main children={children} />
    <Aside />
    <Footer />
  </>
)

export default TwoColumnLayout
