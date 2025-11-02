import "./AddForm.css"
import { useState } from "react"

export default function AddForm() {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")

  function saveData(e) {
    e.preventDefault()
    console.log( name, gender )
  }
  return (
    <section className="container">
      <form onSubmit={saveData}>
        <label>ชื่อปะชากร</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>male</option>
          <option>female</option>
        </select>
        <button className="btn-save" type="submit">Save</button>
      </form>
    </section>
  );
}