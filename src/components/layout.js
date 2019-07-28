import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
const Container = styled.div`
  margin: 0 auto;
  // padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
const Layout = props => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}

export default Layout
