import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { useInterval } from "./customhooks"

const sites = [
  {
    id: 764736,
    title: "Global Connect",
    url: "https://www.gcdevices.us/",
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
  color: #f04e23;
  font-family: Raleway, sans-serif;
  margin-bottom: 2rem;
`

const IphoneX = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  /* margin: auto; */
  border: 16px #293e60 solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
  z-index: -1;
`
const Microphone = styled.div`
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

export default () => {
  const [counter, setCounter] = useState(0)
  const [pause, setPause] = useState(false)

  useInterval(
    () => {
      counter === sites.length - 1 ? setCounter(0) : setCounter(counter + 1)
    },
    5000,
    pause
  )

  return (
    <>
      <Title>{sites[counter].title}</Title>
      <ControlsContainer>
        <button onClick={() => setPause(!pause)}>
          {pause ? "play" : "pause"}{" "}
        </button>
        <button
          onClick={() => {
            setPause(true)
            setCounter(counter - 1)
          }}
        >
          back
        </button>
        <button
          onClick={() => {
            setPause(true)
            setCounter(counter + 1)
          }}
        >
          forward
        </button>
      </ControlsContainer>
      <IphoneX>
        <Microphone></Microphone>
        <Screen>
          <iframe
            src={sites[counter].url}
            style={{ width: "100%", border: "none", height: "100%" }}
          />
        </Screen>
      </IphoneX>
    </>
  )
}
