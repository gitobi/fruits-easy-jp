import React from "react"
import { Helmet } from "react-helmet"

export default (props) => (
    <Helmet
      defaultTitle="Fruits Plant by Gitobi"
      titleTemplate="%s - Fruits Plant by Gitobi"
    >
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
)
