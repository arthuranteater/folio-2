import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"
import { useStaticQuery, graphql } from "gatsby"

//above the imported img can be used from Gatsby image component for lazy loading

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  /* display: flex;
  justify-content: center;
  justify-items: center; */
`

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
  background: light grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
`

const CardFlex = styled.div`
  max-width: 960;
  display: flex;
  flex-direction: row;
`

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
      <CardContainer>
        <ContentGrid>
          {edges.map(repo => {
            const { node } = repo
            return (
              <Card key={node.id}>
                <CardTitle>{node.name}</CardTitle>
                <CardUl>
                  <CardLi>{node.description}</CardLi>
                  <CardLi>
                    Contributors:{" "}
                    {node.collaborators.nodes.map(user => (
                      <span>{`${user.name}, ${user.login}`}</span>
                    ))}
                  </CardLi>
                  <CardLi>
                    <a href={node.homepageUrl} target="_blank">
                      Site
                    </a>
                  </CardLi>
                  <CardLi>
                    <a href={node.url} target="_blank">
                      Repo
                    </a>
                  </CardLi>
                </CardUl>
              </Card>
            )
          })}
        </ContentGrid>
      </CardContainer>
    </>
  )
}
