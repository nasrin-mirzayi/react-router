
import { NavLink } from "react-router-dom"
 
 export default function Navbar(){
    return(


        <nav className="nav2">
    <NavLink to="/Home" style={({isActive})=>({ 
        marginRight:"10px", color : isActive?"blue" : "white"})}> Home</NavLink>


    <NavLink to="/Products" style={({isActive})=>({
       color : isActive?"blue" : "white"})}> Products</NavLink>

    
        </nav>
    )
}