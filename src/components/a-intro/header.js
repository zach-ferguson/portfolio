import * as React from "react"
import PropTypes from "prop-types"
import NameSvg from "./NameSvg"
import SocialButtons from "./SocialButtons"
import { Box } from "@mui/material"


const Header = ({ siteTitle }) => (
  <Box
    sx={{
      width:'100%',
      background: `#124559`,
      borderBottom: '1px solid #01161E'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
      }}
    >
      <NameSvg />
      <SocialButtons />
    </div>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
