import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

//above the imported img can be used from Gatsby image component for lazy loading

const CardTitle = styled.h4`
  color: #293e60;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-bottom: 1rem;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 2rem;
`

const CardLi = styled.li`
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  margin-bottom: 4px;
`

const CardUl = styled.ul`
  list-style-type: none;
`

const Card = styled.div`
  padding: 1rem;
  width: 200px;
  background: light grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
`

const CardFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
`

const Row = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Raleway", sans-serif;
  padding: 2px;
`

const tube = {
  link: "https://www.youtube.com/watch?v=dgFHdlA2UZ8",
}

export default () => {
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            id
            name
            bio
            avatarUrl
            location
            url
            company
            companyHTML
            bioHTML
            anyPinnableItems(type: REPOSITORY)
            pinnedItems(last: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    description
                    homepageUrl
                    updatedAt
                    name
                    collaborators {
                      nodes {
                        name
                        login
                      }
                    }
                    url
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
      <Divider id="github" />
      <Title>Pinned Github Repos</Title>
      <CardFlex>
        {edges.map(repo => {
          const { node } = repo
          return (
            <Card key={node.id}>
              {console.log("node", node.id, "name", node.name)}
              <CardTitle>{node.name}</CardTitle>
              <CardUl>
                <CardLi>{node.description}</CardLi>
                <CardLi>
                  Contributors:{" "}
                  {node.collaborators.nodes.map(user => (
                    <span
                      key={user.login}
                    >{`${user.name}, ${user.login}`}</span>
                  ))}
                </CardLi>
              </CardUl>
              <Row>
                <a
                  href={node.homepageUrl}
                  style={{ color: "#293e60" }}
                  target="_blank"
                  rel="noreferrer"
                  title="View website"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                </a>
                <a
                  href={node.url}
                  style={{ color: "inherit", marginLeft: "10px" }}
                  target="_blank"
                  rel="noreferrer"
                  title="View Github repository"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                {node.description.includes("video") ? (
                  <a
                    href={tube.link}
                    style={{ color: "#FF0000", marginLeft: "10px" }}
                    target="_blank"
                    rel="noreferrer"
                    title="Watch video on Youtube"
                  >
                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                  </a>
                ) : (
                  <></>
                )}
              </Row>
            </Card>
          )
        })}
      </CardFlex>
    </>
  )
}
