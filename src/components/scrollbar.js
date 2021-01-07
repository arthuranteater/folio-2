import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { motion, useViewportScroll, useTransform } from "framer-motion"

//css
// body {
//   width: 100vw;
//   height: 300vh;
//   overflow-x: hidden;
//   padding: 0;
//   margin: 0;
//   background: linear-gradient(180deg, #40f, #05f);
// }

const Wrapper = styled.div`
  width: 100%;
  height: 3px;
`

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
`

const Item = styled(motion.div)`
  width: inherit;
  height: inherit;
  background: #f04e23;
  transform-origin: 0%;
`

export default () => {
  const { scrollYProgress } = useViewportScroll()
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const breakpoints = useBreakpoint()
  return (
    <Wrapper>
      <Container
      // style={{
      //   scale
      // }}
      >
        <Item
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </Container>
    </Wrapper>
  )
}
