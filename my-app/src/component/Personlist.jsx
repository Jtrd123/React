import { useState } from "react";
import "./Personlist.css";
import User from "./User.jsx";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function PersonList({ data, deleteUser }) {
  const [show, setShow] = useState(true);
  const myStyle = {
    color: "red",
    fontSize: "30px",
  };
  return (
    <div className="container">
      <div className="header">
        <h2 style={myStyle}>จำนวนประชากร {data.length} คน</h2>
        <span onClick={() => setShow(!show)}>
          {show ? <FaEyeSlash size={30} /> : <FaEye size={30} />}
        </span>
      </div>
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser} />
          ))}
      </ul>
    </div>
  );
}

export default PersonList;
