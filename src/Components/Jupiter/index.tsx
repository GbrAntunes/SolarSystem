import { useTheme } from "styled-components";
import { Orbit } from "../Orbit";
import { Planet } from "../Planet";
import { Rotator } from "../Rotator";

export function Jupiter() {
  const theme = useTheme()

  return (
    <Orbit size={theme.planets.jupiter.orbitSize}>
      <Rotator orbitDuration={theme.planets.jupiter.orbitDuration} >
        <Planet color={theme.planets.jupiter.color} size={theme.planets.jupiter.size} />
      </Rotator>
    </Orbit>
  )
}
