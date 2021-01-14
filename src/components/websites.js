import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"

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
  margin-bottom: 2rem;
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

export default () => (
  <>
    <Title>Company Websites</Title>
    <AboutContainer>
      <ContentGrid>
        <AvatarContainer>
          <CircleAvatar
            src="https://lh3.googleusercontent.com/pw/ACtC-3ekja2q5NzvtBONCzoHGoHS8KTF8wVe0KuZGmKsoCdnliRY5x4kkl3Ul4CwISWhp39EtTgWAiY_Mq8MiDmRavIK5JItTDUgPUxEoXE2JgajYkWibMqI_MtVy_OddcrLxysA7u0i7FRoPQFeXoODJGAW=d"
            alt="avatar"
          />
        </AvatarContainer>
        <div>
          <StyledP>
            I founded huntCodes in 2018 to help businesses create lightning fast
            SEO friendly websites. We've worked to convert or upgrade existing
            sites with new look or designed and built entirely from scratch!
          </StyledP>
          <StyledP>
            My interest in coding started in 2017. I took a part-time class with
            the Data Science program at Galvanize. I knew I was getting into
            something that could challenge me. I decided to dive deeper! I
            enrolled in the Web Development Immersive Program through Galvanize
            in June of 2018. The 6-month program was fun and challenging. I
            completed the infamous capstone project, where you are challeged to
            incorporate multiple new technologies into a full stack application,
            generate a demo, and deliver a presentation all within a week. After
            graduation I realized though that my journey into software
            development had only just begun...
          </StyledP>
          <StyledP>
            I'm currently working as an Assistant Instructor at 2U (formerly
            Trilogy education) for their 6-month web development boot camp. And
            I'm building websites for huntCodes! Check out some of my sites
            above and visit my blog, arthuranteater!
          </StyledP>
        </div>
      </ContentGrid>
    </AboutContainer>
  </>
)
