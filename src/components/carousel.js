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
  faExternalLinkAlt,
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
const PlayButtonWrapper = styled.button`
  position: absolute;
  top: -40px;
  left: 10%;
  display: inline-block;
  border: none;
  text-decoration: none;
  background: black;
  cursor: pointer;
  text-align: center;
  /* transition: background 250ms ease-in-out, transform 150ms ease; */
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 5px;
  &:focus {
    color: #293e60;
    background-color: white;
    outline: 0;
    border: 1px solid #293e60;
  }
`

const ToggleButtonWrapper = styled.button`
  display: inline-block;
  border: none;
  text-decoration: none;
  background: black;
  cursor: pointer;
  text-align: center;
  /* transition: background 250ms ease-in-out, transform 150ms ease; */
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  text-decoration: none;
  background: white;
  cursor: pointer;
  text-align: center;
  /* transition: background 250ms ease-in-out, transform 150ms ease; */
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 5px;
  &:focus {
    color: #293e60;
    background-color: white;
    outline: 0;
    border: 1px solid #293e60;
  }
  margin: 4px;
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

const Row = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 2px;
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

const ButtonLink = styled.a`
  width: 350px;
  color: white;
  background-color: #293e60;
  font-family: Raleway, sans-serif;
  text-decoration: none;
  border-radius: 10px;
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

const StyledIcon = styled(FontAwesomeIcon)`
  color: #f04e23;
  &:hover {
    cursor: pointer;
    color: #293e60;
  }
`

export default () => {
  const [counter, setCounter] = useState(0)
  const [pause, setPause] = useState(false)
  const [hover, setHover] = useState(false)

  useInterval(
    () => {
      counter === sites.length - 1 ? setCounter(0) : setCounter(counter + 1)
    },
    6000,
    pause
  )

  const site = sites[counter]

  const call = site.id === 222222 ? true : false

  return (
    <>
      <Title>Mobile-First Applications</Title>
      <ControlsContainer>
        <ToggleButtonWrapper
          onClick={() => {
            setPause(true)
            counter === 0
              ? setCounter(sites.length - 1)
              : setCounter(counter - 1)
          }}
        >
          <StyledIcon
            //   style={{ color: "#293e60" }}
            icon={faChevronLeft}
            size="5x"
            title="Backward"
          />
        </ToggleButtonWrapper>
        <ButtonLink
          title={call ? "Go to contact form" : `Go to ${site.url}`}
          href={call ? "/#contact" : site.url}
          target={call ? "" : "_blank"}
          rel="noreferrer"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <Row>
            <StyledH>{site.title}</StyledH>
            {!call && hover ? (
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faExternalLinkAlt}
                size="lg"
              />
            ) : (
              <></>
            )}
          </Row>
        </ButtonLink>
        <ToggleButtonWrapper
          onClick={() => {
            setPause(true)
            counter === sites.length - 1
              ? setCounter(0)
              : setCounter(counter + 1)
          }}
        >
          <StyledIcon icon={faChevronRight} size="5x" title="Forward" />
        </ToggleButtonWrapper>
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
            src={site.url}
            style={{
              width: "100%",
              border: "none",
              height: "100%",
              display: "relative",
            }}
          />
          {site.url.includes("placeholder") ? (
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
