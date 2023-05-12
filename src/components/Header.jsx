import logo from "../logo.svg";
import "../App.css";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Menu />
    </header>
  );
};
