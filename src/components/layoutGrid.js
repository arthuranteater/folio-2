import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./navbar"

const Grid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px minmax(320px, 1fr) 40px;
  grid-gap: 10px;
`

const Main = styled.main`
  /* margin: 0 auto; */
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
`
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #293e60;
  color: white;
  font-family: Raleway, sans-serif;
`

const defaultCSS = `
    body {
        margin: 0 auto;
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
        <Main>{children}</Main>
        <Footer>© {new Date().getFullYear()}, huntCodes</Footer>
      </Grid>
    </>
  )
}

export default Layout
