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
import {
  faGithub,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import Anteater from "../images/anteater_sm_80.png"

const profiles = [
  {
    site: "Github",
    icon: faGithub,
    color: "black",
    address: "https://github.com/arthuranteater",
  },
  {
    site: "Youtube",
    icon: faYoutube,
    color: "#FF0000",
    address:
      "https://www.youtube.com/channel/UCAsABKqBTJZpv6v8bGS8o6A/featured",
  },
  {
    site: "Twitter",
    icon: faTwitter,
    color: "#1DA1F2",
    address: "https://twitter.com/arthuranteater",
  },
  { site: "Blog", address: "https://arthuranteater.com/" },
]

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
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* grid-area: img; */
`

const CircleAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid #293e60;
  width: 100%;
  margin-bottom: 20px;
`

const PContainer = styled.div`
  /* grid-area: p; */
`

const StyledP = styled.p`
  padding: 10px;
  /* text-indent: 20px; */
  line-height: 1.5;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
`
const StyledH = styled.h4`
  opacity: 0.9;
`
const LinkButtonRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  color: white;
  background-color: #293e60;
  font-family: Raleway, sans-serif;
  font-size: large;
  text-decoration: none;
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

const IconsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`

const StyledIconContainer = styled.a`
  margin-left: ${({ blog, small }) => (blog ? "15px" : "30px")};
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
            <IconsRow>
              {profiles.map(profile => (
                <StyledIconContainer
                  key={profile.site}
                  small={breakpoints.sm}
                  blog={profile.site === "Blog" ? true : false}
                  href={profile.address}
                  style={
                    profile.site === "Blog" ? {} : { color: `${profile.color}` }
                  }
                  target="_blank"
                  rel="noreferrer"
                  title={`Visit ${profile.site}`}
                >
                  {profile.site === "Blog" ? (
                    <img src={Anteater} alt="blog logo" />
                  ) : (
                    <FontAwesomeIcon icon={profile.icon} size="lg" />
                  )}
                </StyledIconContainer>
              ))}
            </IconsRow>
          </AvatarContainer>
          <PContainer>
            <StyledP
              style={
                breakpoints.sm ? { textIndent: "0px" } : { textIndent: "20px" }
              }
            >
              Hi, I'm Hunt. I founded huntCodes in 2018 to help businesses
              create lightning fast, SEO optimized, mobile-first websites and
              full stack applications. I've worked to upgrade existing sites
              with new look and built entirely from scratch!
            </StyledP>
            <StyledP
              style={
                breakpoints.sm ? { textIndent: "0px" } : { textIndent: "20px" }
              }
            >
              I've been primarily building sites with Gatsby and server-less
              solutions, but I'm open to any technology, mobile development,
              games, IoT! Visit my blog,{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.arthuranteater.com"
              >
                arthuranteater
              </a>
              !
            </StyledP>
            <LinkButtonRow
              style={
                breakpoints.sm ? { margin: "auto" } : { marginLeft: "auto" }
              }
              title="Download pdf"
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              <StyledH>Resume</StyledH>
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faFileDownload}
                size="lg"
              />
            </LinkButtonRow>
          </PContainer>
        </ContentGrid>
      </AboutContainer>
    </>
  )
}
