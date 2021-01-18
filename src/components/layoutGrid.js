import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./navbar"

const Grid = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  grid-template-rows: 50px 1fr 40px;
  grid-gap: 10px;
`

const MainContainer = styled.div`
  margin: auto;
  width: 100%;
`

const Main = styled.main`
  margin: auto;
  max-width: 960px;
  padding: 0 1.45rem 1.45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <MainContainer>
          <Main>{children}</Main>
        </MainContainer>
        <Footer>© {new Date().getFullYear()}, huntCodes</Footer>
      </Grid>
    </>
  )
}

export default Layout
