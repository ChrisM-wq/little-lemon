import { useState } from "react";
import Logo from "../assets/little-lemon-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <nav>
            <AiOutlineMenu className="menu" size={"25px"} onClick={() => setMenu(!menu)}/>
            <Link to={"/"}><img src={Logo} alt="Little Lemon Logo" /></Link>
            <ul className="navLinks">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Menu</Link></li>
                <li><Link to={"/booking"}>Reservations</Link></li>
                <li><Link to={"/"}>Order online</Link></li>
                <li><Link to={"/"}>Login</Link></li>
            </ul>
            {menu && <ul className="mobileLinks">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Menu</Link></li>
                <li><Link to={"/booking"}>Reservations</Link></li>
                <li><Link to={"/"}>Order online</Link></li>
                <li><Link to={"/"}>Login</Link></li>
            </ul>}
        </nav>
    )
};

export default Navbar;