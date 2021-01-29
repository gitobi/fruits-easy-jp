import React from "react"
import { Helmet } from "react-helmet"
import Header from "../organisms/header"
import Main from "../organisms/main"
import Aside from "../organisms/aside"
import Footer from "../organisms/footer"

import "modern-css-reset"
import styles from "./two-column-layout.module.scss"

const TwoColumnLayout = ({ children }) => (
  <>
    <Helmet>
      <html lang="ja" />
    </Helmet>

    <Header />
    <div className={styles.mainAsideContainer}>
      <Main className={styles.main} children={children} />
      <Aside className={styles.aside} />
    </div>
    <Footer />
  </>
)

export default TwoColumnLayout
