import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate= useNavigate()
  return (
    <nav className="Navbar">
      <h1 className="logo">
        <div className="yt" onClick={() => {
        navigate('/');
      }}></div>
        <span onClick={() => {
        navigate('/');
      }} className="tit">Youtube</span>
      </h1>
      <div className="Nav-links">
        <NavLink
          className="links"
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          Home
        </NavLink>
        <NavLink
          className="links"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "greenyellow" : "white",
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
