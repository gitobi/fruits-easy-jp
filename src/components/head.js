import React from "react"
import { Helmet } from "react-helmet"

export default (props) => (
    <Helmet
      defaultTitle="Fruit Factory"
      titleTemplate="%s - Fruit Factory"
    >
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
)
