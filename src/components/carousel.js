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
import {
  SectionColumn,
  Title,
  IphoneX,
  PlayButtonWrapper,
  ToggleButtonWrapper,
  Speaker,
  Microphone,
  ControlsContainer,
  Row,
  Screen,
  CustomText,
  CustomTextWrapper,
  StyledH,
  ButtonLink,
  StyledIcon,
} from "../utils/library"

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
      {/* <SectionColumn> */}
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
            title={site.url}
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
      {/* </SectionColumn> */}
    </>
  )
}

// {/* <span style={{ fontStyle: "italic" }}> Lightening Fast</span>  */}
