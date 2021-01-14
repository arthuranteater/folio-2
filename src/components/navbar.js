import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faGithubSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import ScrollBar from "./scrollbar"
import { useViewportScroll } from "framer-motion"

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-rows: 3px 47px;
  grid-gap: 0px;
  z-index: 999;
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
  opacity: ${({ active }) => (active ? 1 : 0.8)};
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    opacity: 1;
  }
`

const activate = y => {
  if (y < 20) {
    return "sites"
  } else if (y < 60) {
    return "github"
  } else if (y < 80) {
    return "about"
  } else {
    return "contact"
  }
}

const sections = ["sites", "github", "about", "contact"]

export default () => {
  const breakpoints = useBreakpoint()
  const { scrollYProgress } = useViewportScroll()
  const [active, setActive] = useState("sites")

  scrollYProgress.onChange(y => {
    setActive(activate(y * 100))
  })

  return (
    <Container>
      <ScrollBar />
      <Row>
        <Title>{`${"< huntCodes />"}`}</Title>
        <div>test</div>
        <FontAwesomeIcon icon={faGithub} size="lg" />
        <div>{console.log("active", active)}</div>
        <Links>
          {breakpoints.sm ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            sections.map(sec => (
              <StyledLink active={sec === active} href={`/#${sec}`}>
                {sec.toUpperCase()}
              </StyledLink>
            ))
          )}
        </Links>
      </Row>
    </Container>
  )
}
