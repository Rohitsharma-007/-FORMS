import { useRef } from "react"
function Formcontrolled() {
  const nameRef = useRef("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log(nameRef.current.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>uncontrolled form(useRef)</h1>
        <label>
          Name:
          <input type="text" placeholder="write your name" ref={nameRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default Formcontrolled
