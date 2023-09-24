import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  body {
    background: #0f0f0f;
  }
`


export const SolarSystem = styled.main`
  height: 100vh;
`

export const SunLight = styled.div`
  height: 700px;
  width: 700px;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translatex(-50%) translatey(-50%);

  background: radial-gradient(57% 57% at 50% 50%, rgba(255, 191, 117, 0.10) 0%, rgba(255, 252, 248, 0.02) 45%, rgba(255, 234, 209, 0.00) 100%);

  `
