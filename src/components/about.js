import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Resume from "../files/2021_Hunt_Applegate_Resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileAlt,
  faFilePdf,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons"

const AboutContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
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
  grid-template-columns: ${props => (props.small ? `1fr` : `auto 1fr`)};
  justify-items: ${props => (props.small ? `center` : `start`)};
  grid-gap: 20px;
  padding: 2rem;
`

// const ContentGridSm = styled.div`
//   display: grid;
//   grid-template-rows: auto auto;
//   grid-gap: 20px;
//   padding: 2rem;
// `

const AvatarContainer = styled.div`
  max-width: 200px;
  height: auto;
  padding: 10px;
  /* grid-area: img; */
`

const CircleAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid #293e60;
  width: 100%;
`

const PContainer = styled.div`
  /* grid-area: p; */
`

const StyledP = styled.p`
  padding: 10px;
  line-height: 1.5;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
`
const StyledH = styled.h5`
  opacity: 0.9;
`
const ButtonLink = styled.a`
  width: 200px;
  color: white;
  background: #293e60;
  font-family: Raleway, sans-serif;
  text-decoration: none;
  border-radius: 20px;
  &:hover ${StyledH} {
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    color: #293e60;
    background-color: white;
    outline: 0;
    border: 1px solid #293e60;
  }
`
const Row = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background: #293e60;
  border-radius: 10px;
`

export default () => {
  //   const [sm, setSize] = useState(true)
  const breakpoints = useBreakpoint()
  return (
    <>
      <Divider id="about" />
      {/* {breakpoints.sm ? "" : setSize(false)} */}
      <Title>A Web Developer</Title>
      {/* {breakpoints.sm ? "" : setSize(false)} */}
      <AboutContainer>
        <ContentGrid small={breakpoints.sm ? true : false}>
          <AvatarContainer>
            <CircleAvatar
              src="https://lh3.googleusercontent.com/pw/ACtC-3ekja2q5NzvtBONCzoHGoHS8KTF8wVe0KuZGmKsoCdnliRY5x4kkl3Ul4CwISWhp39EtTgWAiY_Mq8MiDmRavIK5JItTDUgPUxEoXE2JgajYkWibMqI_MtVy_OddcrLxysA7u0i7FRoPQFeXoODJGAW=d"
              alt="avatar"
            />
          </AvatarContainer>
          <PContainer>
            <StyledP>
              Hi, I'm Hunt. I founded huntCodes in 2018 to help businesses
              create lightning fast, SEO optimized, mobile-first websites and
              full stack applications. I've worked to upgrade existing sites
              with new look and built entirely from scratch!
            </StyledP>
            <StyledP>
              I work as an Assistant Instructor at 2U (formerly Trilogy
              education) for their 6-month web development boot camp and
              building websites for huntCodes! Check out some of my sites above
              and visit my blog, arthuranteater!
            </StyledP>
          </PContainer>
          <ButtonLink title="Download pdf" href={Resume} target="_blank">
            <Row>
              <StyledH>Resume</StyledH>
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faFileDownload}
                size="lg"
              />
            </Row>
          </ButtonLink>
        </ContentGrid>
      </AboutContainer>
    </>
  )
}
