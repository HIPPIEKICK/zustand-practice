import { Directions } from "./components/Directions"
import { InformationalHeader } from "./components/InformationalHeader"
import { NameInput } from "./components/NameInput"
import "./App.css"

export const App = () => {
  return (
    <>
      <InformationalHeader />
      <NameInput />
      <Directions />
    </>
  )
}
