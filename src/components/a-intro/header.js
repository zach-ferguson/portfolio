import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NameSvg from "./NameSvg"
import SocialButtons from "./SocialButtons"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#284b63`,
      borderBottom: '1px solid #353535'
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
