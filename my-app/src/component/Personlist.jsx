import { useState } from "react"

function PersonList() {
  const [data, setData] = useState([
      {id: 1, name: "Nue", gender: "male"},
      {id: 2, name: "Ton", gender: "male"},
      {id: 3, name: "New", gender: "male"}
    ])
    const [show, setShow] = useState(true)
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      <ul>
        {show && data.map((item) => (
          <li key={item.id}>
            <h3>{item.id} {item.name} | {item.gender}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PersonList