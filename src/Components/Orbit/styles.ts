import styled from 'styled-components';

interface OrbitTypes {
  size: number
}

export const OrbitContainer = styled.div<OrbitTypes>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translatex(-50%) translatey(-50%);
`;
