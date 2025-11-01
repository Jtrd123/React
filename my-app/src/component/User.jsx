import boy from "../assets/boy.png";
import girl from "../assets/woman.png";

export default function User({ item }) {
  return (
    <>
    <li style={{borderStyle: "solid", borderColor: item.gender == "male" ? "green" : "pink" }}>
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
    </>
  );
}