import React from "react"
import { useState } from "react"

function Formcontrolled() {
  const [name, setname] = useState("")

  function handleChange(e) {
    setname(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>controlled form(useState)</h1>

      <label>
        Name:
        <input
          type="text"
          placeholder="write your name"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Formcontrolled
