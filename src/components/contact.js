import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Resume from "../files/2021_Hunt_Applegate_Resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import Recaptcha from "react-google-recaptcha"
import { motion } from "framer-motion"
import { SectionColumn } from "../utils/library"

//recaptcha key check

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_RECAPTCHA_KEY is undefined!
  You probably forget to set it in your Netlify build environment variables.
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

// encoding form data

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const AboutContainer = styled.div`
  /* width: 100%; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const FormGrid = styled.form`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;
  padding: 2rem;
`

const StyledH = styled.h4`
  opacity: 0.9;
`
const ButtonRow = styled.button`
  margin-top: 20px;
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
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ small }) => (small ? "column" : "row")};
  align-items: ${({ small }) => (small ? "column" : "end")};
  justify-content: ${({ small }) => (small ? "center" : "space-evenly")};
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => (props.end ? "0px" : "40px")};
`
const TextArea = styled.textarea`
  width: ${({ small }) => (small ? "300px" : "600px")};
  height: ${({ small }) => (small ? "200px" : "100px")};
  border: 2px solid #293e60;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 4px;
  font-size: large;
  font-family: Raleway, sans-serif;
  color: #293e60;
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #293e60;
  font-family: Raleway, sans-serif;
  color: #293e60;
  font-size: large;
  width: 250px;
`
const Label = styled.label`
  margin-top: 4px;
  font-size: large;
  font-family: Raleway, sans-serif;
  color: #293e60;
`

const StyledResponse = styled.h3`
  font-family: Raleway, sans-serif;
  color: ${({ success }) => (success ? "#293e60" : "red")};
  margin: 10px;
`

const Blinker = styled(motion.div)`
  background-color: blue;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid back;
  display: inline-block;
`

const containerStyle = {
  position: "relative",
  width: "3rem",
  height: "3rem",
  boxSizing: "border-box",
}

const circleStyle = {
  display: "block",
  width: ".7rem",
  height: ".7rem",
  // border: "0.5rem solid #e9e9e9",
  // borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  // boxSizing: "border-box",
  backgroundColor: "#f04e23",
  top: 1,
  left: 1,
}

const circleStyle2 = {
  display: "block",
  width: ".7rem",
  height: ".7rem",
  // border: "0.5rem solid #e9e9e9",
  // borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  // boxSizing: "border-box",
  backgroundColor: "#f04e23",
  bottom: 1,
  right: 1,
}

const circleStyle3 = {
  display: "block",
  width: ".7rem",
  height: ".7rem",
  // border: "0.5rem solid #e9e9e9",
  // borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  // boxSizing: "border-box",
  backgroundColor: "#f04e23",
  bottom: 1,
  left: 1,
}

const circleStyle4 = {
  display: "block",
  width: ".7rem",
  height: ".7rem",
  // border: "0.5rem solid #e9e9e9",
  // borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  // boxSizing: "border-box",
  backgroundColor: "#f04e23",
  top: 1,
  right: 1,
}

const circleStyle5 = {
  display: "block",
  width: "1rem",
  height: "1rem",
  // border: "0.5rem solid #e9e9e9",
  // borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  // boxSizing: "border-box",
  backgroundColor: "#293e60",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: [5, 5, 2, 0.5],
}

export default () => {
  const [{ err, success }, setStatus] = useState({ err: "", success: false })
  const [message, setMessage] = useState("")
  const recaptchaRef = useRef()
  const breakpoints = useBreakpoint()

  const handleSubmit = e => {
    console.log("submitting")
    const { first, email, message } = e.target.elements
    const formPkg = {
      first: first.value,
      email: email.value,
      message: message.value,
    }
    const value = recaptchaRef.current.getValue()
    if (!value) {
      setStatus({ err: "Complete the recaptcha field!", success: false })
    } else {
      setStatus({ err: "", success: false })
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "g-recaptcha": RECAPTCHA_KEY,
          "g-recaptcha-response": value,
          ...formPkg,
        }),
      })
        .then(res => {
          console.log("res", res)
          res.status === 200
            ? setStatus({ err: "", success: true })
            : setStatus({
                err: `Error: ${res.status} status code`,
                success: true,
              })
        })
        .catch(error =>
          setStatus({
            err: `Error: ${error} Please try again later!`,
            success: false,
          })
        )
    }
    e.preventDefault()
  }

  return (
    <>
      <Divider id="contact" />

      <SectionColumn>
        <Title>Contact Me</Title>
        {success ? (
          <StyledResponse success={success}>
            Thank you! You'll receive a response via the email provided ASAP!
          </StyledResponse>
        ) : (
          <FormGrid
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
            onSubmit={e => handleSubmit(e)}
          >
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <Row small={breakpoints.sm}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="message" value={message} />
              <Column>
                <Input name="email" type="email" required />
                <Label htmlFor="email">Email</Label>
              </Column>
              <Column>
                <Input name="first" required />
                <Label htmlFor="first">Name</Label>
              </Column>
            </Row>
            <Column end="true">
              <Label htmlFor="message">Message</Label>
              <TextArea
                value={message}
                onChange={e => setMessage(e.target.value)}
                small={breakpoints.sm}
                required
              />
              <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
              <StyledResponse success={success}>
                {err ? err : ""}
              </StyledResponse>
              <ButtonRow type="submit">
                <StyledH style={{ marginRight: "10px" }}>Submit</StyledH>
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              </ButtonRow>
            </Column>
          </FormGrid>
        )}
        {/* <motion.div
          animate={{
            rotate: 90,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            // times: [1, 1, 1],
            loop: Infinity,
            // repeatDelay: 1,
          }}
          // transition={{
          //   ease: "linear",
          //   loop: Infinity,
          //   duration: 1,
          //   // repeatDelay: 1,
          // }}
          // transition={spinTransition}
          style={containerStyle}
        >
          <motion.span style={circleStyle} />
          <motion.span style={circleStyle2} />
          <motion.span style={circleStyle3} />
          <motion.span style={circleStyle4} />
          <motion.span style={circleStyle5} />
        </motion.div> */}
        {/* <Blinker
          animate={{ scale: [1, 2, 3, 2, 1] }}
          transition={{ loop: "Infinity", duration: ".3", ease: "linear" }}
        >
          test
        </Blinker> */}
        {/* <motion.div
          style={{ backgroundColor: "blue" }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        /> */}
      </SectionColumn>
    </>
  )
}
