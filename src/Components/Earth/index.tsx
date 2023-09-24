import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Earth() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.earth.orbitSize}>
      <Rotator orbitDuration={theme.planets.earth.orbitDuration} >
        <Planet color={theme.planets.earth.color} size={theme.planets.earth.size} />
      </Rotator>
    </Orbit>
  )
}
