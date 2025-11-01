import "./Header.css"

const Header = ({title}) => {
  return (
    <nav>
      <h1>{title}</h1>
      <button>Light / Dark</button>
    </nav>
  )
}

export default Header