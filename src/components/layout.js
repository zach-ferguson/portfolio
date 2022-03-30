/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "@fontsource/righteous"
import "@fontsource/josefin-slab"
import "@fontsource/open-sans"
import Header from "./a-intro/header"
import "./layout.css"
import { Box } from "@mui/material"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          width: '100%',
          maxWidth: '100vw',
          fontFamily: 'Open Sans',
          fontStyle: 'Open Sans'
        }}
      >
        <main>{children}</main>
      </div>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
