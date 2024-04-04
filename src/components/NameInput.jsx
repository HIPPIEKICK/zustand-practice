import { useState } from "react"
import { useUserStore } from "../stores/userStore"

export const NameInput = () => {
  const { setNewUsername, setDescription, setActions } = useUserStore()

  const [username, setUsername] = useState("")

  const startGame = async (event) => {
    event.preventDefault()
    //Do fetch

    const options = {
      method: "POST",
      body: JSON.stringify({ username }),
      headers: { 'Content-Type': 'application/json' }
    }

    const response = await fetch("https://labyrinth.technigo.io/start", options)
    const data = await response.json()
    console.log(data)
    //coordinates, description, actions (array)
    setNewUsername(username)
    setDescription(data.description)
    setActions(data.actions)

    setUsername('')
  }

  return (
    <form>
      <label>
        Type your name to get started:
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          placeholder="Type name here..."
        />
      </label>
      <button
        type="submit"
        onClick={startGame}
        disabled={username.length < 3}>
        Start playing
        </button>
    </form>
  )
}
