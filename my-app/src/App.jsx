import Header from "./component/Header.jsx"
import PersonList from "./component/Personlist.jsx"
import './App.css'

function App() {
  return (
    <>
      
      <div className="app">
      <Header />
      <main>
        <PersonList />
      </main>
      </div>
    </>
  )
}

export default App
