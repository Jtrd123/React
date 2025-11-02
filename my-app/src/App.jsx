import Header from "./component/Header.jsx"
import PersonList from "./component/Personlist.jsx"
import AddForm from "./component/AddForm.jsx"
import './App.css'
import { useState } from "react"

function App() {
  const [data, setData] = useState([
      { id: 1, name: "Nue", gender: "female" },
      { id: 2, name: "Ton", gender: "male" },
      { id: 3, name: "New", gender: "male" },
      { id: 4, name: "Toy", gender: "female" }
    ]);

    function deleteUser(id) {
      const result = data.filter((user) => user.id !== id) //new array
      setData(result)
    }
  return (
    <>
      <div className="app">
        <Header title="แอพจัดการข้อมูลประชากร"/>
      <main>
        <AddForm />
        <PersonList data={data} deleteUser={deleteUser}/>
      </main>
      </div>
    </>
  )
}

export default App
