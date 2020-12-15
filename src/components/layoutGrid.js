import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 40px;
  grid-gap: 10px;
`

const defaultCSS = `
    body {
        margin: 0;
    }`

const Layout = ({ children }) => {
  //   const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)
  return (
    <>
      <style>{defaultCSS}</style>
      <Grid>
        <Nav />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#293e60",
            color: "white",
          }}
        >
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.gatsbyjs.com"
            >
              Gatsby
            </a>
          </footer>
        </div>
      </Grid>
    </>
  )
}

export default Layout
