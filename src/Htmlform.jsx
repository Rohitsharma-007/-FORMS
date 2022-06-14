function Htmlform() {
  function handleSubmit(e) {
    e.preventDefault()
    // console.log(e.target[0].value) or
    // const formData = new FormData(e.target)
    // const formProps = Object.fromEntries(formData)
    // console.log(formProps)
    var nameValue = document.getElementById("uniqueid").value
    console.log(nameValue)
  }

  return (
    <form action="/" method="" onSubmit={handleSubmit}>
      <h1> Traditional html form (name and id)</h1>
      <label>
        Name:
        <input
          type="text"
          id="uniqueid"
          name="fname"
          placeholder="write your name"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
export default Htmlform
