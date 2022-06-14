import React from "react"
import { useState, useRef } from "react"

function Userefusestate() {
  const [name, setname] = useState("")
  const nameRef = useRef("")

  function handleChange(e) {
    setname(nameRef.current.value)
    console.log(name)
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>hit on every input form(useRef+useState)</h1>

      <label>
        Name:
        <input
          type="text"
          placeholder="write your name"
          ref={nameRef}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Userefusestate
