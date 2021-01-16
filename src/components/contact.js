import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Image from "./image" //img can be used from for lazy loading
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Resume from "../files/2021_Hunt_Applegate_Resume.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileAlt,
  faFilePdf,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons"
import Recaptcha from "react-google-recaptcha"

//recaptcha key check

// const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
// if (typeof RECAPTCHA_KEY === 'undefined') {
//   throw new Error(`
//   Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined!
//   You probably forget to set it in your Netlify build environment variables.
//   Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
//   Note this demo is specifically for Recaptcha v2
//   `)
// }

// encoding form data

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const AboutContainer = styled.div`
  width: 100%;
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

const FormGrid = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 2rem;
`

const StyledH = styled.h4`
  opacity: 0.9;
`
const LinkButtonRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  color: white;
  background-color: #293e60;
  font-family: Raleway, sans-serif;
  text-decoration: none;
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
  align-items: center;
  justify-content: center;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default () => {
  const [{ err, success }, setStatus] = useState({ err: "", success: false })
  const [message, setMessage] = useState("")
  // const recaptchaRef = React.createRef()
  const breakpoints = useBreakpoint()

  const handleSubmit = e => {
    console.log("submitting")
    const { first, email, message } = e.target.elements
    const formPkg = {
      first: first.value,
      email: email.value,
      message: message.value,
    }
    // const recaptchaValue = recaptchaRef.current.getValue()
    console.log(formPkg)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        // "g-recaptcha-response": recaptchaValue,
        ...formPkg,
      }),
    })
      .then(res => {
        console.log("res", res)
        setStatus({ err: false, success: true })
      })
      .catch(error => setStatus({ err: error, success: false }))

    e.preventDefault()
  }

  console.log("err:", err, "success:", success)

  return (
    <>
      <Divider id="contact" />
      {/* {breakpoints.sm ? "" : setSize(false)} */}
      <Title>Contact Me</Title>
      {/* {breakpoints.sm ? "" : setSize(false)} */}
      <AboutContainer>
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        {success ? (
          <h2>Thank you for the message! You'll get a response ASAP!</h2>
        ) : (
          <FormGrid
            name="contact"
            method="post"
            data-netlify="true"
            // data-netlify-recaptcha="true"
            onSubmit={e => handleSubmit(e)}
          >
            {/* <ContentGrid> */}
            <Row style={{ alignContent: "space-between" }}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="message" value={message} />
              <label
              // style={{
              //   display: "inline-block",
              //   width: "6em",
              //   position: "relative",
              //   top: "-3em",
              // }}
              >
                Name
                <input
                  placeholder="John Doe"
                  name="first"
                  required
                  style={{
                    border: "none",
                    borderBottom: "2px solid #293e60",
                  }}
                />
              </label>
              <label
                style={
                  {
                    //   display: "inline-block",
                    //   width: "6em",
                    //   position: "relative",
                    //   top: "-3em",
                  }
                }
              >
                Email
                <input
                  placeholder="email@email.com"
                  name="email"
                  type="email"
                  required
                  style={{
                    border: "none",
                    borderBottom: "2px solid #293e60",
                  }}
                />
              </label>
            </Row>
            <Column>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="type here"
                // style={{ minWidth: "800px" }}
              />
              {/* <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} /> */}
              <div>
                {err !== "" ? (
                  <h4>{`Error: ${err} We're sorry! Please try again later!`}</h4>
                ) : (
                  <></>
                )}
              </div>
            </Column>
            <Row>
              <button type="submit">Submit</button>
            </Row>
            {/* </ContentGrid> */}
          </FormGrid>
        )}
      </AboutContainer>
    </>
  )
}
