import React from "react"
import { Helmet } from "react-helmet"

export default (props) => (
    <Helmet
      defaultTitle="Fruits Factory"
      titleTemplate="%s - Fruits Factory"
    >
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
)
