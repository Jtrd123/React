import { useState } from "react";
import boy from "../assets/boy.png";
import girl from "../assets/woman.png";
import "./Personlist.css";

function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "Nue", gender: "female" },
    { id: 2, name: "Ton", gender: "male" },
    { id: 3, name: "New", gender: "male" },
    { id: 4, name: "Toy", gender: "female" }
  ]);
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <div className="header">
        <h2>จำนวนประชากร {data.length} คน</h2>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img
                src={item.gender === "male" ? boy : girl}
                width={50}
                height={50}
              />
              <p>{item.name}</p>
              <div className="control">
                <button>ลบ</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
