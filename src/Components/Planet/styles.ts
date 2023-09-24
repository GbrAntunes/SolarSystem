import styled from 'styled-components';
import { PlanetType } from '../../types/planet';

export const PlanetContainer = styled.div<PlanetType>`
  background: cyan;
  border-radius: 50%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  margin-left: ${props => -(props.size / 2)}px;
  background: ${props => props.color};

`;
