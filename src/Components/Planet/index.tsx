import { PlanetContainer } from "./styles";
import { PlanetType } from '../../types/planet'

export function Planet({ color, size }:PlanetType) {
  return <PlanetContainer color={color} size={size} />
}
