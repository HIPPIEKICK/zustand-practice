import { useUserStore } from "../stores/userStore"

export const InformationalHeader = () => {
  const { user, coordinates } = useUserStore()

  return (
    <header>
      <h1>Labyrinth</h1>
      <h2>Player: {user}</h2>
      <h2>Coordinates: {coordinates}</h2>
      <hr/>
    </header>
  )
}