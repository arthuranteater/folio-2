import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"
import { useStaticQuery, graphql } from "gatsby"

//above the imported img can be used from Gatsby image component for lazy loading

const AboutContainer = styled.div`
  /* display: flex; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  /* justify-content: center; */
  /* justify-items: center; */
  /* align-items: center; 5px rounded corners */
`

const Title = styled.h2`
  color: #293e60;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-bottom: 1rem;
`

const Divider = styled.div`
  margin-bottom: 100px;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 2rem;
`

const AvatarContainer = styled.div`
  max-height: 200px;
  max-width: 200px;
  /* width: 100%; */
  padding: 10px;
`

const CircleAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid #293e60;
  /* height: 200px;
  width: 200px; */
`

const StyledP = styled.p`
  line-height: 1.5;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
`

//styled from smakosh

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#181717")};
  height: 100%;
`

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

//styled from smakosh
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`

export default () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Divider id="projects" />
      <Title>Latest Projects</Title>
      <AboutContainer></AboutContainer>
    </>
  )
}
