import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { motion } from "framer-motion"
import CodingDude from "../images/code_development_600.png"

const str = "Welcome to huntCodes!"
const str2 = "I'm Hunt, a web developer!"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

// const styledH = styled.h1`
//   color: #293e60;
//   text-align: center;
//   font-family: "Raleway", sans-serif;
//   margin-bottom: 2rem;
// `

const ImageContainer = styled(motion.div)`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default () => {
  const [show, setShow] = useState(true)
  const breakpoints = useBreakpoint()
  const hide = () => {
    setTimeout(function () {
      setShow(false)
    }, 4000)
  }
  return (
    <>
      {() => hide()}
      {hide ? (
        <div>
          <motion.h1
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
              color: "#293e60",
              textAlign: "center",
              fontFamily: "'Raleway', sans-serif",
              //   marginBottom: "1rem",
            }}
          >
            {str.split("").map((letter, index) => (
              <motion.span key={index} className="item" variants={item}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <ImageContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, type: "tween" }}
          >
            <img
              //   style={{ margin: "auto", display: "block" }}
              src={CodingDude}
              alt="codingDude"
            />
          </ImageContainer>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
