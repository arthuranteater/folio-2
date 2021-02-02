import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//layouts

export const LayoutGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 40px;
`
export const MainContainer = styled.div`
  background: white;
  border-color: #ffb400;
  border-style: ${({ sm }) => (sm ? "none" : "solid")};
  border-width: 0 15px 0 15px;
`
export const MainColumn = styled.main`
  margin: auto;
  max-width: 960px;
  padding: 0 1.45rem 1.45rem;
  background: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #293e60;
  color: white;
  font-family: Raleway, sans-serif;
`

export const SectionColumn = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 4px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

//headers

export const Title = styled.h2`
  color: #293e60;
  text-align: center;
  font-family: "Raleway", sans-serif;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

//columns

export const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ sm }) => (sm ? `1fr` : `auto 1fr`)};
  justify-items: ${({ sm }) => (sm ? `center` : `start`)};
  grid-gap: 20px;
  padding: 2rem;
`

//avatar

//carousel

export const IphoneX = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
`
export const PlayButtonWrapper = styled.button`
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

export const ToggleButtonWrapper = styled.button`
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
export const Speaker = styled.div`
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
export const Microphone = styled.div`
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

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  /* display: grid;
  grid-template-rows: 50px 1fr 40px;
  grid-gap: 10px; */
`

export const Row = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 2px;
`

export const Screen = styled.div`
  width: 375px;
  height: 812px;
  background: white;
`

export const CustomTextWrapper = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 25%;
`

export const CustomText = styled.h1`
  color: #293e60;
  font-family: Raleway, sans-serif;
`

export const StyledH = styled.h2`
  opacity: 0.9;
`

export const ButtonLink = styled.a`
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

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #f04e23;
  &:hover {
    cursor: pointer;
    color: #293e60;
  }
`
