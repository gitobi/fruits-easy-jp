import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

import { footer } from "./footer.module.scss"

const Footer = () => (
  <footer className={footer}>
    <Link to="/about/">
      <FontAwesomeIcon icon={faInfoCircle} /> かんたん果樹とは
    </Link>
    <Link to="/contact/">
      <FontAwesomeIcon icon={faEnvelope} /> コンタクト
    </Link>
    <p>
      &copy;{" "}
      <a href="https://www.gitobi.com" target="_blank" rel="noreferrer">
        Gitobi
      </a>
    </p>
  </footer>
)

export default Footer
