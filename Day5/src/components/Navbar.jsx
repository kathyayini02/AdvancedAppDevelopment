import{Link} from "react-router-dom";
import '../assets/css/Navbar.css'
function Navbar(){
  return(
    <div id="header">
    <div id="siteinfo">

    </div>
    <div id="navbar">
      <Link className="navlink" to ="/">Home</Link>
      <Link className ="navlink" to ="/about">About</Link>
      <Link className ="navlink" to ="/contact">Contact</Link>
      <Link className ="navlink" to ="/login">Login</Link>
    </div>
    </div>
  )
}
export default Navbar