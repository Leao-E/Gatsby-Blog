import React, { useState } from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useEffect } from "react"
import { FiMenu, FiSearch } from "react-icons/fi"

import Header from "../Header";
import { colors } from "../../assets/styles/Colors"
import { styles, Root, ContentContainer } from "./components"


export default function Layout({ children }) {
     
  return (
    <>
      <Global styles={css`
        :root {
          font-size: 60;
        }
          
        body, html {
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
        }

        * {        
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }`} 
      />
      <Root>          
        <Header />     
        <ContentContainer>
          {children}
        </ContentContainer>
        <footer  css={css`background-color:black; color: white; width: 100%;justify-self: flex-end;`}>
          footer
        </footer>
      </Root>
    </>
  )
}