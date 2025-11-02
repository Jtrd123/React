import "./Header.css";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Header = ({ title, theme, setTheme }) => {
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme}>
        {theme === "light" ? <MdWbSunny size={30} /> : <FaMoon size={30} />}
      </span>
    </nav>
  );
};

export default Header;
