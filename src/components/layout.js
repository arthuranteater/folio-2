import { Link } from "gatsby"
import React from "react"
import Nav from "./navbar"
import { LayoutGrid, MainContainer, MainColumn, Footer } from "../utils/library"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const defaultCSS = `
    body {
        margin: 0 auto;
    }`

export default ({ children }) => {
  const { sm } = useBreakpoint()
  return (
    <>
      <style>{defaultCSS}</style>
      <LayoutGrid>
        <Nav />
        <MainContainer sm={sm}>
          <MainColumn>{children}</MainColumn>
        </MainContainer>
        <Footer>© {new Date().getFullYear()}, huntCodes</Footer>
      </LayoutGrid>
    </>
  )
}
