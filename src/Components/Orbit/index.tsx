import { ReactNode } from "react";
import { OrbitContainer } from "./styles";

interface OrbitType {
  children: ReactNode;
  size: number
}

export function Orbit({ children, size }: OrbitType) {
  return (
    <OrbitContainer size={size}>
      {children}
    </OrbitContainer>
  )
}
