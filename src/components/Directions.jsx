import { useUserStore } from "../stores/userStore"

export const Directions = () => {
  const { user, description, actions, setDescription, setActions } = useUserStore()

  const submitAction = async (direction) => {
    const options = {
      method: "POST",
      body: JSON.stringify({ username: user, type: "move", direction }),
      headers: { 'Content-Type': 'application/json' }
    }

    const response = await fetch("https://labyrinth.technigo.io/action", options)
    const data = await response.json()
    console.log(data)
    //coordinates, description, actions (array)
    setDescription(data.description)
    setActions(data.actions)
  }

  return (
    <>
      <hr/>
      <h3>{description}</h3>
      <div className="signs">
        {actions.length !== 0 && actions.map((action) => {
          return (
            <div key={action.direction} className="sign">
              <p>{action.description}</p>
              <button onClick={() => submitAction(action.direction)}>{action.direction}</button>
            </div>
          )
        })}
      </div>
    </>
  )
}