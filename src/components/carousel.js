import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { useInterval } from "./customhooks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

const sites = [
  {
    id: 764736,
    title: "Global Connect",
    url: "https://gcdevices.us/",
  },
  {
    id: 222222,
    title: "Your Business Name",
    url: "https://via.placeholder.com/375x812.png?text=Content+...",
  },
  { id: 969337, title: "Ibis and Hunt", url: "https://www.ibisandhunt.com/" },
  {
    id: 180625,
    title: "Arthuranteater",
    url: "https://www.arthuranteater.com/",
  },
  {
    id: 537101,
    title: "What's the Weather In",
    url: "https://www.whatstheweatherin.com/",
  },
  {
    id: 187365,
    title: "huntCodes",
    url: "https://www.huntcodes.co/",
  },
]

const Title = styled.h2`
  color: #293e60;
  font-family: Raleway, sans-serif;
  margin-bottom: 2rem;
`

const IphoneX = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  /* margin: auto; */
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
`
const PlayButtonWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 10%;
`

const Speaker = styled.div`
  content: "";
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
`
const Microphone = styled.div`
  content: "";
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
`

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  /* display: grid;
  grid-template-rows: 50px 1fr 40px;
  grid-gap: 10px; */
`

const Screen = styled.div`
  width: 375px;
  height: 812px;
  background: white;
`

const CustomTextWrapper = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 25%;
`

const CustomText = styled.h1`
  color: #293e60;
  font-family: Raleway, sans-serif;
`

const StyledH = styled.h2`
  opacity: 0.9;
`

const SiteTitleButton = styled.button`
  width: 250px;
  color: white;
  background-color: #293e60;
  font-family: Raleway, sans-serif;
  /* margin-bottom: 2rem; */
  border-radius: 10px;
  /* box-shadow: 4px 8px #888888; */
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:hover ${StyledH} {
    opacity: 1;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #f04e23;
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
    color: #293e60;
  }
`

export default () => {
  const [counter, setCounter] = useState(0)
  const [pause, setPause] = useState(false)

  useInterval(
    () => {
      counter === sites.length - 1 ? setCounter(0) : setCounter(counter + 1)
    },
    6000,
    pause
  )

  return (
    <>
      <Title>Mobile-First Applications</Title>
      <ControlsContainer>
        <StyledIcon
          onClick={() => {
            setPause(true)
            counter === 0
              ? setCounter(sites.length - 1)
              : setCounter(counter - 1)
          }}
          //   style={{ color: "#293e60" }}
          icon={faChevronLeft}
          size="5x"
          title="Backward"
        />
        <a
          title={`Go to ${sites[counter].url} in new tab`}
          href={sites[counter].url}
          target="_blank"
        >
          <SiteTitleButton>
            <StyledH>{sites[counter].title}</StyledH>
          </SiteTitleButton>
        </a>
        <StyledIcon
          onClick={() => {
            setPause(true)
            counter === sites.length - 1
              ? setCounter(0)
              : setCounter(counter + 1)
          }}
          icon={faChevronRight}
          size="5x"
          title="Forward"
        />
      </ControlsContainer>
      <IphoneX onClick={() => setPause(!pause)}>
        <PlayButtonWrapper>
          <StyledIcon
            title={pause ? "Play" : "Pause"}
            icon={pause ? faPlay : faPause}
            size="lg"
          />
        </PlayButtonWrapper>
        <Speaker></Speaker>
        <Screen>
          <iframe
            src={sites[counter].url}
            style={{
              width: "100%",
              border: "none",
              height: "100%",
              display: "relative",
            }}
          />
          {sites[counter].url.includes("placeholder") ? (
            <CustomTextWrapper>
              <CustomText>Your Mobile Site</CustomText>
            </CustomTextWrapper>
          ) : (
            <></>
          )}
        </Screen>
        <Microphone></Microphone>
      </IphoneX>
    </>
  )
}

// {/* <span style={{ fontStyle: "italic" }}> Lightening Fast</span>  */}
