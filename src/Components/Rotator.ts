import { styled } from "styled-components";

interface RotatorTypes {
  orbitDuration: number
}

export const Rotator = styled.div<RotatorTypes>`
  width: 100%;
  height: 0px;

  display: flex;
  align-items: center;

  position: absolute;
  top: 50%;

  animation: rotating ${props => props.orbitDuration}s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
