import { Link } from "react-router-dom";
import "./Header.scss"; 

export function Header() {
  return (
    <header className="header">
      <div className="logo">
      <h1>Countries App</h1>
      </div>
      <div className="nav">
      <Link to="/">Countries</Link>
      <Link to="/add-country">Add country</Link>
      </div>
    </header>
  );
}
