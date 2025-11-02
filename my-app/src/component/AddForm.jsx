import "./AddForm.css"
import { useState } from "react"

export default function AddForm(props) {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("male")

  const {data, setData} = props

  function saveData(e) {
    e.preventDefault()
    const person={
      id:Math.floor(Math.random()*1000),
      name:name,
      gender:gender
    }
    console.log(person)
    setData([...data, person])
    setName("")
    setGender("male")
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
        <button className="btn-save" type="submit" disabled={name.trim() === "" }>Save</button>
      </form>
    </section>
  );
}