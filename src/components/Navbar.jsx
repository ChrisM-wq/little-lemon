import { useState } from "react";
import Logo from "../assets/little-lemon-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <nav>
            <AiOutlineMenu className="menu" size={"25px"} onClick={() => setMenu(!menu)}/>
            <img src={Logo} alt="Little Lemon Logo" />
            <ul className="navLinks">
                <Link to={"/"}>Home</Link>
                <Link to={"/#about"}>About</Link>
                <Link to={"/#specials"}>Menu</Link>
                <Link to={"/booking"}>Reservations</Link>
                <li>Order online</li>
                <li>Login</li>
            </ul>
            {menu && <ul className="mobileLinks">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>}
        </nav>
    )
};

export default Navbar;