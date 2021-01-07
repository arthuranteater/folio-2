import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import ScrollBar from "./scrollbar"

// ;<i class="fas fa-bars"></i>

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: 3px 47px;
  grid-gap: 0px;
  /* display: flex;
  color: white;
  background-color: #293e60;
  align-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif; */
  /* opacity: 0.8; */
`
const Row = styled.div`
  display: flex;
  color: white;
  background-color: #293e60;
  align-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
`

const TitleContainer = styled.div`
  min-width: 50px;
`

const Title = styled.h2`
  padding-left: 20px;
`

const Links = styled.div`
  align-content: center;
  margin-left: auto;
  padding-right: 20px;
`

const StyledLink = styled.a`
  color: white;
  opacity: 0.8;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    opacity: 1;
  }
`

const sections = ["projects", "about", "contact"]

export default () => {
  const breakpoints = useBreakpoint()
  return (
    <Container>
      <ScrollBar />
      <Row>
        <Title>{`${"< huntCodes />"}`}</Title>

        <Links>
          {breakpoints.sm ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            sections.map(sec => (
              <StyledLink href={`/#${sec}`}>{sec.toUpperCase()}</StyledLink>
            ))
          )}
        </Links>
      </Row>
    </Container>
  )
}
