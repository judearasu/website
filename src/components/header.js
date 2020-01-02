import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteData }) => (
  <header
    style={{
      background: `#FAFAFA`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.0rem 1.0rem`,
        display: `flex`,
        justifyContent: `space-between`
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteData.title}
        </Link>
      </h2>
      <nav>
        <ul className="react-menu">
          {siteData.navigation.map((item, index) => (
            // Without the `key`, React will fire a key warning
            <React.Fragment key={index}>
              <li><Link to={item.url}>{item.name}</Link></li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteData: PropTypes.any,
}

Header.defaultProps = {
  siteData: ``,
}

export default Header
