import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { useInterval } from "./customhooks"

const sites = [
  { id: 1, header: "site1", picUrl: "www" },
  { id: 2, header: "site1", picUrl: "www" },
  { id: 3, header: "site1", picUrl: "www" },
  { id: 4, header: "site1", picUrl: "www" },
]

export default () => {
  const [counter, setCounter] = useState(0)
  const [pause, setPause] = useState(false)

  useInterval(
    () => {
      setCounter(counter + 1)
    },
    1000,
    pause
  )

  return (
    <>
      <div>{counter}</div>
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
    </>
  )
}
