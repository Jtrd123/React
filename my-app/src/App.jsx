import Header from "./component/Header.jsx"
import PersonList from "./component/Personlist.jsx"
import AddForm from "./component/AddForm.jsx"
import './App.css'
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([
      { id: 1, name: "Nue", gender: "female" },
      { id: 2, name: "Ton", gender: "male" },
      { id: 3, name: "New", gender: "male" },
      { id: 4, name: "Toy", gender: "female" }
    ]);

    const [theme, setTheme] = useState("light")

    function deleteUser(id) {
      const result = data.filter((user) => user.id !== id) //new array
      setData(result)
    }

  useEffect(() => {
    console.log("Render Component")
  },[data])
  return (
    <div className={theme}>
      <div className="app">
        <Header title="แอพจัดการข้อมูลประชากร" theme={theme} setTheme={setTheme}/>
      <main>
        <AddForm data={data} setData={setData}/>
        <PersonList data={data} deleteUser={deleteUser}/>
      </main>
      </div>
    </div>
  )
}

export default App
