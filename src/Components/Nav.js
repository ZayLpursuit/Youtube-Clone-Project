import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <nav className="Navbar">
        <h1 className="logo"><div className="yt"></div><span className="tit">Youtube</span></h1>
        <div className="Nav-links">
        <p>hi</p>
        <Link to= "/" className="links"><p >Home</p> </Link>
        <Link to="/about" className="links"><p>About</p></Link></div>
        </nav>
    )
}