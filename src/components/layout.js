

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Header from "./header";
import Menu from "./menu";
import Sidebar from "./sidebar";
import "./layout.css"

const Layout = (props) => {
  const { children } = props

  return (
    <StaticQuery
      query={graphql`query {
        site {
          siteMetadata {
            title
          }
        }
      }`}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div className="app">
            <Menu title={data.site.siteMetadata?.title}/>
            <div className="main">
              <div className="content">{children}</div>
              <div className="sidebar"><Sidebar /></div>
            </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
