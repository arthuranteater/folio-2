import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  color: white;
  background-color: #293e60;
  align-content: center;
  align-items: center;
  /* opacity: 0.8; */
`
const Title = styled.h2`
  padding-left: 20px;
  /* align-content: center; */
  /* justify-content: flex-start; */
`

const Links = styled.div`
  align-content: center;
  margin-left: auto;
  padding-right: 20px;
  /* flex: 1; */
  /* justify-content: flex-end; */
  /* flex-direction: row; */
`

export default () => (
  <Container>
    <Title>{`${"< huntCodes />"}`}</Title>

    <Links>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        PROJECTS
      </Link>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginLeft: "1rem",
        }}
      >
        HOME
      </Link>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          marginLeft: "1rem",
        }}
      >
        CONTACT
      </Link>
    </Links>
  </Container>
)
