import "./Header.css";

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
      <button onClick={toggleTheme}>Theme: {theme}</button>
    </nav>
  );
};

export default Header;
