import React from "react"
import { Helmet } from "react-helmet"

const Head = props => (
  <Helmet defaultTitle="かんたん果樹" titleTemplate="%s - かんたん果樹">
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
  </Helmet>
)

export default Head
