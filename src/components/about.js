import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"

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

export default () => {
  //   const [sm, setSize] = useState(true)
  const breakpoints = useBreakpoint()
  return (
    <>
      <Divider id="about" />
      {/* {breakpoints.sm ? "" : setSize(false)} */}
      <Title>About Me</Title>
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
              I founded huntCodes in 2018 to help businesses create lightning
              fast SEO friendly websites. I've worked to convert or upgrade
              existing sites with new look or designed and built entirely from
              scratch!
            </StyledP>
            <StyledP>
              I'm currently working as an Assistant Instructor at 2U (formerly
              Trilogy education) for their 6-month web development boot camp and
              building websites for huntCodes! Check out some of my sites above
              and visit my blog, arthuranteater!
            </StyledP>
          </PContainer>
        </ContentGrid>
      </AboutContainer>
    </>
  )
}
