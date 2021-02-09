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
import { SectionColumn, Title, TwoColGrid, Divider } from "../utils/library"

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

const StyledP = styled.p`
  padding: 10px;
  /* text-indent: 20px; */
  line-height: 1.5;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
`
const ButtonTitle = styled.h4`
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
  &:hover ${ButtonTitle} {
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
  const { sm } = useBreakpoint()
  return (
    <>
      <Divider id="about" />
      <Title>A Web Developer</Title>
      <SectionColumn>
        <TwoColGrid sm={sm}>
          <AvatarContainer>
            <CircleAvatar
              src="https://lh3.googleusercontent.com/pw/ACtC-3ekja2q5NzvtBONCzoHGoHS8KTF8wVe0KuZGmKsoCdnliRY5x4kkl3Ul4CwISWhp39EtTgWAiY_Mq8MiDmRavIK5JItTDUgPUxEoXE2JgajYkWibMqI_MtVy_OddcrLxysA7u0i7FRoPQFeXoODJGAW=d"
              alt="avatar"
            />
            <IconsRow>
              {profiles.map(profile => (
                <StyledIconContainer
                  key={profile.site}
                  small={sm}
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
          <div>
            <StyledP
              style={sm ? { textIndent: "0px" } : { textIndent: "20px" }}
            >
              Hi, I'm Hunt. I founded huntCodes in 2018 to help businesses
              create lightning fast, SEO optimized, mobile-first websites. We
              can upgrade existing sites with a fresh look or build new from
              scratch! We've been primarily building sites with Gatsby and
              server-less solutions, but we're open to any technology, mobile
              development, games, IoT!
            </StyledP>
            <StyledP
              style={sm ? { textIndent: "0px" } : { textIndent: "20px" }}
            >
              I'm always eager to learn tips and technologies! Please reach out
              the with any suggestions or ideas using the form below. To see
              some of my side projects and coding interests visit my blog,{" "}
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
              style={sm ? { margin: "auto" } : { marginLeft: "auto" }}
              title="Download pdf"
              href={Resume}
              target="_blank"
              rel="noreferrer"
            >
              <ButtonTitle>Resume</ButtonTitle>
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faFileDownload}
                size="lg"
              />
            </LinkButtonRow>
          </div>
        </TwoColGrid>
      </SectionColumn>
    </>
  )
}
