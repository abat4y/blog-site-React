import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand" style={{ color:"#18526e"}}>Abat4y</h1>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" >
            <li className="nav-item " ><Link className="nav-link "  to="/">home</Link></li>
            <li className="nav-item "><Link className="nav-link "  to="/create">new blog</Link></li>
            </ul>
            </div>
        </nav>

    );
}
 
export default Navbar;