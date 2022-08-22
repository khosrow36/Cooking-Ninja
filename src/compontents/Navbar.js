import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import SearchBar from "./SearchBar";

import "./Navbar.css";

export default function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}
