import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/about/">Fruit Factoryとは</Link>
    <Link to="/contact/">コンタクト</Link>
    <p>&copy; <a href="https://www.gitobi.com" target="_blank" rel="noreferrer">Gitobi</a></p>
  </footer>
)

export default Footer
