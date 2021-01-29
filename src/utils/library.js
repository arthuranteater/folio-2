import styled from "styled-components"

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
  background: #fffdd0;
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
