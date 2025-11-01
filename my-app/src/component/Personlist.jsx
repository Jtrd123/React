import { useState } from "react"
import boy from "../assets/boy.png"
import girl from "../assets/woman.png"

function PersonList() {
  const [data, setData] = useState([
      {id: 1, name: "Nue", gender: "female"},
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
            <img src={item.gender === "male" ? boy : girl} width={50} height={50}/>
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PersonList